# micro-mailer

> Microservice to send e-mail with Mailgun

I currently use this service to send simple emails like email confirmation

## Usage

### With [`now`](https://now.sh)

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/bukinoshita/micro-mailer&NODE_ENV=production&env=MAILGUN_API_KEY&env=MAILGUN_DOMAIN&env=MAILGUN_FROM&env=MAILGUN_SUBJECT)

or

```
$ now bukinoshita/micro-mailer -e NODE_ENV=production -e MAILGUN_API_KEY=xxx -e MAILGUN_DOMAIN=xxx -e MAILGUN_FROM=xxx -e MAILGUN_SUBJECT=xxx
```

### Manual

Deploy to your hosting provider, set the below environment variables, and start it with `yarn start`.

## Environment variables

Define the following environment variables:

- `NODE_ENV` - Set it to `production`.
- `MAILGUN_API_KEY` - [Mailgun api key](https://app.mailgun.com/app/domains).
- `MAILGUN_DOMAIN` - Your mailgun domain
- `MAILGUN_FROM` - The email you like to send emails
- `MAILGUN_SUBJECT` - The subject in users email

## License

MIT © [bukinoshita](https://bukinoshita.io)
