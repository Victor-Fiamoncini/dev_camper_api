import transport from '../config/nodemailer'

export default async ({ to, template, context }) => {
	const { FROM_NAME, FROM_EMAIL } = process.env

	return await transport.sendMail({
		to,
		from: `${FROM_NAME} <${FROM_EMAIL}>`,
		template,
		context,
	})
}
