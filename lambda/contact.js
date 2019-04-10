import {parse} from 'querystring'

const Mailgun = require('mailgun-js')

const headers = {
	'Access-Control-Allow-Origin': '*', // better change this for production
	'Access-Control-Allow-Methods': 'POST',
	'Access-Control-Allow-Headers': 'Content-Type'
}
exports.handler = async (event, context) => {
	// only allow POST requests
	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 410,
			headers,
			body: JSON.stringify({
				message: 'Only POST requests allowed.',
			}),
		}
	}

	// parse the body to JSON so we can use it in JS
	let payload = {}
	// console.log(event)
	try {
		payload = JSON.parse(event.body)
	} catch (e) {
		payload = parse(event.body)
	}

	// validate the form
	if (
		!payload.nome ||
		!payload.email ||
		!payload.telefone ||
		!payload.estado ||
		!payload.cidade ||
		!payload.mensagem
	) {
		return {
			statusCode: 422,
			headers,
			body: JSON.stringify({
				message: 'Required information is missing.',
			}),
		}
	}

	// code
	const {MAILGUN_API_KEY: apiKey, MAILGUN_DOMAIN: domain, MAILGUN_TEST_MODE: testMode} = process.env

	const mailgun = Mailgun({
		apiKey,
		domain,
		testMode,
		retry: 3
	})

	const playloadMail = {
		from: 'Thomas Groch <comercial@thomasgroch.com>',
		to: payload.email,
		subject: 'Obrigado pelo seu interesse ' + payload.nome + '.',
		text: 'Retorno para você o mais cedo possível!'
	}

	try {
		mailgun.messages().send(playloadMail, function (sendError, responseMail) {
			if (sendError) {
				console.log(sendError)
				throw Error(sendError)
				return
			}
			console.log(responseMail)
		})
	} catch (error) {
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({
				message: 'Erro ao enviar o email.',
			}),
		}
	}

	// Do redirect for JS disabled browsers
	if (event.headers['content-type'] === 'application/x-www-form-urlencoded') {
		return {
			statusCode: 302,
			headers: {
				Location: '/thanks.html',
				'Cache-Control': 'no-cache',
			},
			body: JSON.stringify({})
		}
	}

	// return data to AJAX request
	return {
		statusCode: 200,
		headers,
		body: JSON.stringify({
			message: 'Message sent successfully!',
		}),
	}
}