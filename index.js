// Packages
const { parse } = require('url')
const qs = require('querystring')
const mailgun = require('mailgun.js')
const microCors = require('micro-cors')
const rateLimit = require('micro-ratelimit')

// Template
const templates = require('./templates')

// Envs
const key = process.env.MAILGUN_API_KEY
const domain = process.env.MAILGUN_DOMAIN
const from = process.env.MAILGUN_FROM
const origin = process.env.CORS_ORIGIN || '*'
const window = process.env.RATE_LIMIT_WINDOW || 1000
const limit = process.env.RATE_LIMIT || 10

const cors = microCors({ origin, allowMethods: ['GET'] })
const rateLimitOptions = { window, limit, headers: true }

if (!key) {
  throw new Error(
    'Please set your Mailgun api key in the `MAILGUN_API_KEY` environment variable'
  )
}

if (!domain) {
  throw new Error(
    'Please set your Mailgun domain in the `MAILGUN_DOMAIN` environment variable'
  )
}

if (!from) {
  throw new Error(
    'Please set your Mailgun from in the `MAILGUN_FROM` environment variable'
  )
}

const handler = async (req, res) => {
  const url = parse(req.url)
  const mailer = mailgun.client({ username: 'api', key })
  const { email, template = 'preBeta', subject = from, company } = qs.parse(
    url.query
  )

  if (email) {
    try {
      const html = templates[template]({ company })
      await mailer.messages.create(domain, { from, html, to: [email], subject })

      return res.end('E-mail sent!')
    } catch (error) {
      return res.end(error.message)
    }
  }

  res.end('E-mail is required!')
}

module.exports = rateLimit(rateLimitOptions, cors(handler))
