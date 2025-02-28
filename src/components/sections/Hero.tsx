import {Button} from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
	return (
		<section className="py-20 md:py-28 lg:py-36">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
							Halo, Saya{' '}
							<span className="text-primary">Nama Anda</span>
						</h1>
						<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
							Web Developer Full Stack dengan pengalaman lebih
							dari 100 proyek. Spesialis dalam Next.js, React, dan
							Tailwind CSS.
						</p>
					</div>
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
				</div>
			</div>
		</section>
	)
}
