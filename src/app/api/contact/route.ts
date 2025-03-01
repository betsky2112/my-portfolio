import {NextResponse} from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
	try {
		// Ambil data dari request body
		const body = await request.json()
		const {name, email, message} = body

		// Validasi data
		if (!name || !email || !message) {
			return NextResponse.json(
				{error: 'Semua field harus diisi'},
				{status: 400}
			)
		}

		// Konfigurasi transporter email
		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: Number(process.env.EMAIL_PORT) || 587,
			secure: process.env.EMAIL_SECURE === 'true',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		})

		// Membuat konten email
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER, // Email tujuan
			replyTo: email, // Pengirim bisa langsung dibalas ke email pengirim form
			subject: `Pesan Website Portfolio dari ${name}`,
			text: `
        Nama: ${name}
        Email: ${email}
        Pesan: ${message}
      `,
			html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Pesan Baru dari Website Portfolio</h2>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Pesan:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
		}

		// Kirim email
		await transporter.sendMail(mailOptions)

		return NextResponse.json({success: true, message: 'Pesan terkirim!'})
	} catch (error) {
		console.error('Error sending email:', error)
		return NextResponse.json(
			{error: 'Terjadi kesalahan saat mengirim email'},
			{status: 500}
		)
	}
}
