'use client'

import {Button} from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {useForm} from 'react-hook-form'
import {useState} from 'react'

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm()

	const onSubmit = async (data: any) => {
		setIsSubmitting(true)

		// Simulasi pengiriman formulir
		await new Promise((resolve) => setTimeout(resolve, 1000))

		// Dalam implementasi nyata, Anda akan mengirim data ke API
		console.log(data)

		setIsSubmitting(false)
		setIsSubmitted(true)
	}

	return (
		<section
			id="kontak"
			className="py-16 bg-muted/50"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Hubungi Saya
						</h2>
						<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
							Tertarik untuk bekerja sama? Kirimkan pesan Anda dan
							saya akan segera merespon.
						</p>
					</div>
				</div>

				<div className="mx-auto max-w-md mt-8">
					<Card>
						<CardHeader>
							<CardTitle>Formulir Kontak</CardTitle>
							<CardDescription>
								Isi formulir di bawah ini untuk menghubungi
								saya.
							</CardDescription>
						</CardHeader>
						<CardContent>
							{!isSubmitted ? (
								<form
									onSubmit={handleSubmit(onSubmit)}
									className="space-y-4"
								>
									<div className="space-y-2">
										<label
											htmlFor="name"
											className="text-sm font-medium"
										>
											Nama
										</label>
										<Input
											id="name"
											placeholder="Masukkan nama Anda"
											{...register('name', {
												required: true,
											})}
										/>
										{errors.name && (
											<span className="text-red-500 text-sm">
												Nama wajib diisi
											</span>
										)}
									</div>
									<div className="space-y-2">
										<label
											htmlFor="email"
											className="text-sm font-medium"
										>
											Email
										</label>
										<Input
											id="email"
											type="email"
											placeholder="nama@contoh.com"
											{...register('email', {
												required: true,
												pattern:
													/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											})}
										/>
										{errors.email && (
											<span className="text-red-500 text-sm">
												Email valid wajib diisi
											</span>
										)}
									</div>
									<div className="space-y-2">
										<label
											htmlFor="message"
											className="text-sm font-medium"
										>
											Pesan
										</label>
										<Textarea
											id="message"
											placeholder="Tulis pesan Anda disini..."
											{...register('message', {
												required: true,
											})}
										/>
										{errors.message && (
											<span className="text-red-500 text-sm">
												Pesan wajib diisi
											</span>
										)}
									</div>
									<Button
										type="submit"
										className="w-full"
										disabled={isSubmitting}
									>
										{isSubmitting
											? 'Mengirim...'
											: 'Kirim Pesan'}
									</Button>
								</form>
							) : (
								<div className="text-center py-4">
									<h3 className="text-xl font-medium text-green-600 mb-2">
										Pesan Terkirim!
									</h3>
									<p>
										Terima kasih telah menghubungi. Saya
										akan segera merespon pesan Anda.
									</p>
									<Button
										variant="outline"
										className="mt-4"
										onClick={() => setIsSubmitted(false)}
									>
										Kirim Pesan Lagi
									</Button>
								</div>
							)}
						</CardContent>
					</Card>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
					<div className="flex flex-col items-center space-y-2 text-center">
						<div className="p-3 rounded-full bg-primary/10">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 text-primary"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold">Email</h3>
						<p className="text-muted-foreground">
							info@namaanda.com
						</p>
					</div>
					<div className="flex flex-col items-center space-y-2 text-center">
						<div className="p-3 rounded-full bg-primary/10">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 text-primary"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold">Telepon</h3>
						<p className="text-muted-foreground">
							+62 123 4567 890
						</p>
					</div>
					<div className="flex flex-col items-center space-y-2 text-center">
						<div className="p-3 rounded-full bg-primary/10">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 text-primary"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold">Lokasi</h3>
						<p className="text-muted-foreground">
							Jakarta, Indonesia
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
