'use client'

import {useState, useRef} from 'react'
import {Button} from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {AnimatedSection} from '@/components/ui/animated-section'
import {motion, useInView} from 'framer-motion'
import Image from 'next/image'
import {ArrowRight, Github, Code, Eye, Bookmark} from 'lucide-react'

interface Project {
	id: number
	title: string
	description: string
	image: string
	tags: string[]
	link: string
	github?: string
	category: string
	featured?: boolean
}

export default function Projects() {
	const [activeCategory, setActiveCategory] = useState('all')
	const containerRef = useRef(null)
	const isInView = useInView(containerRef, {once: true, amount: 0.2})

	// Extended project list with categories and featured flag
	const projects: Project[] = [
		{
			id: 1,
			title: 'E-Commerce Platform',
			description:
				'Website e-commerce lengkap dengan pembayaran, manajemen produk, dashboard admin, dan integrasi multi-vendor.',
			image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Prisma', 'PostgreSQL'],
			link: 'https://example.com/project1',
			github: 'https://github.com/betsky2112/ecommerce',
			category: 'web',
			featured: true,
		},
		{
			id: 2,
			title: 'Photography Portfolio',
			description:
				'Website portfolio yang elegan dan responsif untuk seorang fotografer profesional dengan galeri interaktif dan CMS.',
			image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Sanity.io'],
			link: 'https://example.com/project2',
			github: 'https://github.com/betsky2112/photography-portfolio',
			category: 'design',
			featured: true,
		},
		{
			id: 3,
			title: 'Dashboard Analytics',
			description:
				'Dashboard analitik dengan visualisasi data yang interaktif untuk bisnis dengan laporan real-time dan data prediktif.',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			tags: ['Next.js', 'D3.js', 'Tailwind CSS', 'Supabase'],
			link: 'https://example.com/project3',
			category: 'data',
			featured: true,
		},
		{
			id: 4,
			title: 'Social Media App',
			description:
				'Aplikasi media sosial dengan fitur posting, komentar, direct messaging, dan notifikasi real-time.',
			image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
			link: 'https://example.com/project4',
			github: 'https://github.com/betsky2112/social-app',
			category: 'mobile',
		},
		{
			id: 5,
			title: 'Learning Management System',
			description:
				'Platform pembelajaran online dengan kursus video, quiz, dan sertifikat untuk berbagai topik edukasi.',
			image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
			link: 'https://example.com/project5',
			category: 'web',
		},
		{
			id: 6,
			title: 'AI-Powered Chatbot',
			description:
				'Chatbot untuk customer support yang menggunakan machine learning untuk memahami dan merespon pertanyaan pelanggan.',
			image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			tags: ['Python', 'TensorFlow', 'Flask', 'React'],
			link: 'https://example.com/project6',
			category: 'ai',
		},
	]

	// Filter projects based on active category
	const filteredProjects =
		activeCategory === 'all'
			? projects
			: activeCategory === 'featured'
			? projects.filter((project) => project.featured)
			: projects.filter((project) => project.category === activeCategory)

	// Categories for tabs
	const categories = [
		{id: 'all', label: 'Semua'},
		{id: 'featured', label: 'Unggulan'},
		{id: 'web', label: 'Web App'},
		{id: 'mobile', label: 'Mobile'},
		{id: 'design', label: 'UI/UX'},
		{id: 'ai', label: 'AI/ML'},
		{id: 'data', label: 'Data'},
	]

	return (
		<section
			id="proyek"
			className="py-20 md:py-28 relative overflow-hidden"
		>
			{/* Background decorative elements */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute -top-48 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
				<div className="absolute -bottom-48 -left-48 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container px-4 md:px-6">
				<AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
					<Badge className="px-4 py-1.5 text-sm">My Projects</Badge>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
							Portofolio Proyek
						</span>
					</h2>
					<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
						Beberapa proyek terbaik yang telah saya kerjakan dengan
						teknologi modern dan desain kreatif.
					</p>
				</AnimatedSection>

				{/* Project Category Tabs */}
				<AnimatedSection delay={0.2}>
					<Tabs
						defaultValue="all"
						value={activeCategory}
						onValueChange={setActiveCategory}
						className="w-full"
					>
						<div className="flex justify-center mb-8">
							<TabsList className="bg-muted/80 backdrop-blur-sm p-1 overflow-x-auto whitespace-nowrap max-w-full flex-nowrap">
								{categories.map((category) => (
									<TabsTrigger
										key={category.id}
										value={category.id}
										className="px-4 data-[state=active]:bg-background data-[state=active]:text-foreground"
									>
										{category.label}
									</TabsTrigger>
								))}
							</TabsList>
						</div>

						<div
							ref={containerRef}
							className="min-h-[400px]"
						>
							<TabsContent
								value={activeCategory}
								className="mt-0"
							>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
									{filteredProjects.map((project, index) => (
										<motion.div
											key={project.id}
											initial={{opacity: 0, y: 20}}
											animate={
												isInView
													? {opacity: 1, y: 0}
													: {}
											}
											transition={{
												duration: 0.5,
												delay: index * 0.1,
											}}
										>
											<Card className="overflow-hidden h-full flex flex-col bg-background/80 backdrop-blur-sm border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-lg relative">
												{project.featured && (
													<div className="absolute top-3 right-3 z-10">
														<Badge
															variant="secondary"
															className="bg-primary/90 text-primary-foreground flex items-center gap-1 py-1"
														>
															<Bookmark className="h-3 w-3" />{' '}
															Featured
														</Badge>
													</div>
												)}

												<div className="relative aspect-video overflow-hidden group">
													<Image
														src={project.image}
														alt={project.title}
														fill
														className="object-cover transition-transform duration-500 group-hover:scale-110"
													/>
													<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
														<Button
															size="sm"
															variant="secondary"
															asChild
														>
															<a
																href={
																	project.link
																}
																target="_blank"
																rel="noopener noreferrer"
																className="flex items-center gap-1"
															>
																<Eye className="h-4 w-4" />{' '}
																Preview
															</a>
														</Button>
														{project.github && (
															<Button
																size="sm"
																variant="outline"
																asChild
															>
																<a
																	href={
																		project.github
																	}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="flex items-center gap-1"
																>
																	<Github className="h-4 w-4" />{' '}
																	Code
																</a>
															</Button>
														)}
													</div>
												</div>

												<CardHeader className="p-5">
													<CardTitle className="text-xl flex items-center justify-between">
														{project.title}
														<Badge
															variant="outline"
															className="text-xs font-normal"
														>
															{project.category.toUpperCase()}
														</Badge>
													</CardTitle>
													<CardDescription className="line-clamp-2 mt-2 text-sm">
														{project.description}
													</CardDescription>
												</CardHeader>

												<CardContent className="px-5 pb-4 pt-0 flex-grow">
													<div className="flex flex-wrap gap-2 mt-2">
														{project.tags.map(
															(tag, tagIndex) => (
																<span
																	key={
																		tagIndex
																	}
																	className="bg-secondary/10 hover:bg-secondary/20 text-foreground text-[11px] px-2 py-0.5 rounded-md transition-colors"
																>
																	{tag}
																</span>
															)
														)}
													</div>
												</CardContent>

												<CardFooter className="p-5 pt-0">
													<Button
														asChild
														className="w-full"
														variant="outline"
													>
														<a
															href={project.link}
															target="_blank"
															rel="noopener noreferrer"
															className="flex items-center justify-center gap-1 group"
														>
															Detail Proyek
															<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
														</a>
													</Button>
												</CardFooter>
											</Card>
										</motion.div>
									))}
								</div>

								{/* Empty state when no projects match the filter */}
								{filteredProjects.length === 0 && (
									<div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
										<div className="rounded-full bg-muted p-4 text-muted-foreground">
											<Code className="h-10 w-10" />
										</div>
										<h3 className="text-xl font-medium">
											Tidak ada proyek
										</h3>
										<p className="text-muted-foreground max-w-[500px]">
											Belum ada proyek yang tersedia dalam
											kategori ini. Silakan pilih kategori
											lain atau kembali lagi nanti.
										</p>
										<Button
											variant="outline"
											onClick={() =>
												setActiveCategory('all')
											}
										>
											Lihat Semua Proyek
										</Button>
									</div>
								)}
							</TabsContent>
						</div>
					</Tabs>
				</AnimatedSection>

				{/* View all projects button */}
				<AnimatedSection
					delay={0.4}
					className="flex flex-col items-center justify-center mt-12"
				>
					<div className="relative">
						<div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-20 transition-all duration-300 group-hover:opacity-50"></div>
						<Button
							size="lg"
							className="relative"
							asChild
						>
							<a href="/projects">
								Lihat Semua Proyek{' '}
								<ArrowRight className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</div>

					<p className="text-muted-foreground text-sm mt-4">
						Ada lebih dari 30+ proyek yang telah saya kerjakan
					</p>
				</AnimatedSection>
			</div>
		</section>
	)
}
