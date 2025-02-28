import {Button} from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

interface Project {
	id: number
	title: string
	description: string
	image: string
	tags: string[]
	link: string
}

export default function Projects() {
	const projects: Project[] = [
		{
			id: 1,
			title: 'E-commerce Website',
			description:
				'Website e-commerce lengkap dengan pembayaran, manajemen produk, dan dashboard admin.',
			image: '/images/project1.jpg',
			tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Prisma'],
			link: 'https://example.com/project1',
		},
		{
			id: 2,
			title: 'Portfolio Website',
			description:
				'Website portfolio yang elegan dan responsif untuk seorang fotografer.',
			image: '/images/project2.jpg',
			tags: ['React', 'Tailwind CSS', 'Framer Motion'],
			link: 'https://example.com/project2',
		},
		{
			id: 3,
			title: 'Dashboard Analytics',
			description:
				'Dashboard analitik dengan visualisasi data yang interaktif untuk bisnis.',
			image: '/images/project3.jpg',
			tags: ['Next.js', 'D3.js', 'Tailwind CSS', 'Supabase'],
			link: 'https://example.com/project3',
		},
	]

	return (
		<section
			id="proyek"
			className="py-16"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Portofolio Proyek
						</h2>
						<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
							Beberapa proyek terbaik yang telah saya kerjakan.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
					{projects.map((project) => (
						<Card
							key={project.id}
							className="overflow-hidden group"
						>
							<div className="relative aspect-video overflow-hidden">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<CardHeader>
								<CardTitle>{project.title}</CardTitle>
								<CardDescription>
									{project.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2 mt-2">
									{project.tags.map((tag, index) => (
										<span
											key={index}
											className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
										>
											{tag}
										</span>
									))}
								</div>
							</CardContent>
							<CardFooter>
								<Button
									asChild
									className="w-full"
								>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										Lihat Proyek
									</a>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
				<div className="flex justify-center mt-10">
					<Button
						variant="outline"
						size="lg"
					>
						Lihat Semua Proyek
					</Button>
				</div>
			</div>
		</section>
	)
}
