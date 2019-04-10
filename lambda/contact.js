import {parse} from 'querystring'

const Mailgun = require('mailgun-js')

const {MAILGUN_API_KEY: apiKey, MAILGUN_DOMAIN: domain} = process.env
const mailgun = Mailgun({
	apiKey,
	domain,
	retry: 3
})

const headers = {
	'Access-Control-Allow-Origin': '*', // better change this for production
	'Access-Control-Allow-Methods': 'POST',
	'Access-Control-Allow-Headers': 'Content-Type'
}

const sendEmail = data => {
	const {from, to, subject, text} = data
	const email = {from, to, subject, text}

	return mailgun.messages().send(email)
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
	try {
		const playloadMail = {
			from: 'Thomas Groch <thomas.groch@gmail.com>',
			to: payload.email,
			subject: 'Obrigado pelo seu interesse ' + payload.nome + '.',
			text: 'Retorno para você o mais cedo possível!'
		}
		const result = await sendEmail(playloadMail)
		if (!result || !result.message) {
			throw Error(result)
		}
	} catch (error) {
		console.log('[error]')
		console.log(error)
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