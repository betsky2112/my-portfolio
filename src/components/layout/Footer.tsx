'use client'

import Link from 'next/link'
import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {
	Github,
	Linkedin,
	Twitter,
	Instagram,
	Mail,
	ArrowRight,
	ChevronUp,
	MapPin,
	Phone,
} from 'lucide-react'

export default function Footer() {
	const [email, setEmail] = useState('')
	const [showScrollTop, setShowScrollTop] = useState(false)
	const currentYear = new Date().getFullYear()

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setShowScrollTop(true)
			} else {
				setShowScrollTop(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// Handle newsletter subscription
		console.log('Newsletter subscription:', email)
		setEmail('')
		// Add toast notification here
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<footer className="relative border-t bg-background">
			{/* Decorative background patterns */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
			</div>

			{/* Newsletter section */}
			<div className="container py-12">
				<div className="relative mb-12 md:mb-16 p-6 md:p-10 rounded-2xl bg-muted/50 backdrop-blur-sm border overflow-hidden">
					<div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
					<div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />

					<div className="relative max-w-3xl mx-auto text-center space-y-4">
						<h2 className="text-2xl md:text-3xl font-bold">
							Dapatkan Kabar Terbaru
						</h2>
						<p className="text-muted-foreground">
							Berlangganan newsletter untuk mendapatkan update
							terbaru tentang proyek dan artikel terbaru.
						</p>

						<form
							onSubmit={handleSubmit}
							className="flex flex-col sm:flex-row gap-3 mt-6 max-w-md mx-auto"
						>
							<Input
								type="email"
								placeholder="Email anda..."
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="flex-1"
							/>
							<Button type="submit">
								Berlangganan{' '}
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</form>
					</div>
				</div>

				<div className="ml-5 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
					<div className="md:col-span-1">
						<div className="space-y-4">
							<h3 className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
								Robert Siagian
							</h3>
							<p className="text-muted-foreground">
								Web developer profesional dengan pengalaman
								lebih dari 1 tahun yang sukses membantu bisnis
								tumbuh secara digital.
							</p>

							<div className="flex gap-2">
								<Button
									variant="outline"
									size="icon"
									asChild
									className="rounded-full"
								>
									<a
										href="https://github.com/betsky2112"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="GitHub"
									>
										<Github className="h-4 w-4" />
									</a>
								</Button>
								<Button
									variant="outline"
									size="icon"
									asChild
									className="rounded-full"
								>
									<a
										href="https://linkedin.com/in/robertsiagian21"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="LinkedIn"
									>
										<Linkedin className="h-4 w-4" />
									</a>
								</Button>
								<Button
									variant="outline"
									size="icon"
									asChild
									className="rounded-full"
								>
									<a
										href="https://instagram.com/aku_obet"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Instagram"
									>
										<Instagram className="h-4 w-4" />
									</a>
								</Button>
							</div>
						</div>
					</div>

					<div className="md:col-span-1 ml-12">
						<h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/"
									className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
								>
									<ArrowRight className="h-3 w-3" /> Beranda
								</Link>
							</li>
							<li>
								<Link
									href="#tentang"
									className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
								>
									<ArrowRight className="h-3 w-3" /> Tentang
								</Link>
							</li>
							<li>
								<Link
									href="#proyek"
									className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
								>
									<ArrowRight className="h-3 w-3" /> Proyek
								</Link>
							</li>
							<li>
								<Link
									href="#kontak"
									className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
								>
									<ArrowRight className="h-3 w-3" /> Kontak
								</Link>
							</li>
						</ul>
					</div>

					{/* <div className="md:col-span-1">
						<h3 className="font-bold text-lg mb-4">Media Sosial</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="https://github.com/yourusername"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
								>
									<Github className="h-4 w-4" /> GitHub
								</a>
							</li>
							<li>
								<a
									href="https://linkedin.com/in/yourusername"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
								>
									<Linkedin className="h-4 w-4" /> LinkedIn
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/yourusername"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
								>
									<Twitter className="h-4 w-4" /> Twitter
								</a>
							</li>
							<li>
								<a
									href="https://instagram.com/yourusername"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
								>
									<Instagram className="h-4 w-4" /> Instagram
								</a>
							</li>
						</ul>
					</div> */}

					<div className="md:col-span-1">
						<h3 className="font-bold text-lg mb-4">Kontak</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="mailto:email@example.com"
									className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
								>
									<Mail className="h-4 w-4" />{' '}
									email@example.com
								</a>
							</li>
							<li>
								<a
									href="tel:+6281234567890"
									className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
								>
									<Phone className="h-4 w-4" /> +62
									812-3456-7890
								</a>
							</li>
							<li>
								<span className="text-muted-foreground flex items-center gap-2">
									<MapPin className="h-4 w-4" /> Jakarta,
									Indonesia
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="ml-5 mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-center md:text-left text-muted-foreground text-sm">
						&copy; {currentYear} betsky. Semua hak dilindungi.
					</p>
					<div className="flex items-center gap-4 text-sm text-muted-foreground">
						<Link
							href="/privacy"
							className="hover:underline"
						>
							Kebijakan Privasi
						</Link>
						<span className="text-muted-foreground/30">•</span>
						<Link
							href="/terms"
							className="hover:underline"
						>
							Syarat & Ketentuan
						</Link>
					</div>
				</div>
			</div>

			{/* Scroll to top button */}
			{showScrollTop && (
				<motion.div
					initial={{opacity: 0, scale: 0.8}}
					animate={{opacity: 1, scale: 1}}
					exit={{opacity: 0, scale: 0.8}}
					className="fixed bottom-6 right-6 z-50"
				>
					<Button
						onClick={scrollToTop}
						size="icon"
						className="rounded-full shadow-lg"
					>
						<ChevronUp className="h-5 w-5" />
						<span className="sr-only">Kembali ke atas</span>
					</Button>
				</motion.div>
			)}
		</footer>
	)
}
