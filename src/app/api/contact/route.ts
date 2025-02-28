import {NextRequest, NextResponse} from 'next/server'

export async function POST(request: NextRequest) {
	try {
		const data = await request.json()

		const {name, email, message} = data

		if (!name || !email || !message) {
			return NextResponse.json(
				{error: 'Semua field wajib diisi'},
				{status: 400}
			)
		}

		// Di implementasi nyata, Anda dapat:
		// 1. Menyimpan pesan ke database
		// 2. Mengirim email notifikasi
		// 3. Integrasi dengan layanan pihak ketiga seperti Mailchimp, SendGrid dll.

		console.log('Pesan diterima:', {name, email, message})

		// Simulasi pengiriman pesan berhasil
		return NextResponse.json(
			{success: true, message: 'Pesan berhasil dikirim'},
			{status: 200}
		)
	} catch (error) {
		console.error('Error:', error)
		return NextResponse.json(
			{error: 'Terjadi kesalahan server'},
			{status: 500}
		)
	}
}
