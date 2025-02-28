'use client'

import {Button} from '@/components/ui/button'
import {AnimatedSection} from '@/components/ui/animated-section'
import Link from 'next/link'
import {motion} from 'framer-motion'

export default function Hero() {
	return (
		<section className="py-20 md:py-28 lg:py-36">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center space-y-4 text-center">
					<AnimatedSection>
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
								Halo, Saya{' '}
								<span className="text-primary">Nama Anda</span>
							</h1>
							<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
								Web Developer Full Stack dengan pengalaman lebih
								dari 100 proyek. Spesialis dalam Next.js, React,
								dan Tailwind CSS.
							</p>
						</div>
					</AnimatedSection>

					<AnimatedSection delay={1}>
						<div className="space-x-4">
							<Button
								asChild
								size="lg"
							>
								<Link href="#proyek">Lihat Portofolio</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
							>
								<Link href="#kontak">Hubungi Saya</Link>
							</Button>
						</div>
					</AnimatedSection>

					<AnimatedSection delay={2}>
						<motion.div
							className="mt-8"
							animate={{y: [0, -10, 0]}}
							transition={{repeat: Infinity, duration: 2}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-muted-foreground"
							>
								<path d="M12 5v14"></path>
								<path d="m19 12-7 7-7-7"></path>
							</svg>
						</motion.div>
					</AnimatedSection>
				</div>
			</div>
		</section>
	)
}
