// Packages
const { parse } = require('url')
const qs = require('querystring')
const mailgun = require('mailgun.js')
const cors = require('micro-cors')()

// Template
const html = require('./template')

// Envs
const key = process.env.MAILGUN_API_KEY
const domain = process.env.MAILGUN_DOMAIN
const from = process.env.MAILGUN_FROM
const subject = process.env.MAILGUN_SUBJECT || from

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

const handlerMailer = async (req, res) => {
  const url = parse(req.url)
  const mailer = mailgun.client({ username: 'api', key })
  const { email } = qs.parse(url.query)

  if (email) {
    try {
      await mailer.messages.create(domain, { from, html, to: [email], subject })

      return res.end('E-mail sent!')
    } catch (error) {
      return res.end(`${error.status} ${error.message}`)
    }
  }

  return res.end('E-mail is required!')
}

module.exports = cors(handlerMailer)
