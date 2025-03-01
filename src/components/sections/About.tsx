'use client'

import {useEffect, useRef} from 'react'
import {Card, CardContent} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {AnimatedSection} from '@/components/ui/animated-section'
import {motion, useAnimation, useInView} from 'framer-motion'
import {Calendar, GraduationCap, Briefcase, Heart, Award} from 'lucide-react'
import Image from 'next/image'

// Progress bar component
const SkillBar = ({skill, level, delay = 0}) => {
	const controls = useAnimation()
	const ref = useRef(null)
	const inView = useInView(ref, {once: true})

	useEffect(() => {
		if (inView) {
			controls.start({
				width: `${level}%`,
				transition: {
					duration: 1.2,
					delay: delay,
					ease: 'easeOut',
				},
			})
		}
	}, [controls, inView, level, delay])

	return (
		<div className="mb-4">
			<div className="flex justify-between mb-1">
				<span className="text-sm font-medium">{skill}</span>
				<span className="text-xs text-muted-foreground">{level}%</span>
			</div>
			<div
				className="h-2 rounded-full bg-muted overflow-hidden"
				ref={ref}
			>
				<motion.div
					className="h-full bg-gradient-to-r from-primary to-secondary"
					initial={{width: '0%'}}
					animate={controls}
				></motion.div>
			</div>
		</div>
	)
}

// Achievement card component
const AchievementCard = ({icon: Icon, value, label}) => {
	return (
		<Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300 hover:shadow-xl">
			<CardContent className="p-5 flex flex-col items-center">
				<div className="mb-2 rounded-full bg-primary/10 p-3">
					<Icon className="h-6 w-6 text-primary" />
				</div>
				<h3 className="text-2xl font-bold">{value}</h3>
				<p className="text-sm text-muted-foreground text-center">
					{label}
				</p>
			</CardContent>
		</Card>
	)
}

export default function About() {
	// Core skills with proficiency level
	const coreSkills = [
		{name: 'Next.js', level: 90},
		{name: 'React', level: 95},
		{name: 'TypeScript', level: 85},
		{name: 'Node.js', level: 80},
		{name: 'Tailwind CSS', level: 90},
	]

	// Other skills as badges
	const otherSkills = [
		'JavaScript',
		'GraphQL',
		'MongoDB',
		'PostgreSQL',
		'Firebase',
		'Redux',
		'Express.js',
		'REST API',
		'Git',
		'Docker',
		'AWS',
		'CI/CD',
		'Jest',
		'Figma',
		'UI/UX Design',
	]

	// Achievements
	const achievements = [
		{icon: Briefcase, value: '100+', label: 'Proyek Selesai'},
		{icon: Award, value: '15+', label: 'Penghargaan'},
		{icon: Calendar, value: '5+', label: 'Tahun Pengalaman'},
		{icon: Heart, value: '98%', label: 'Kepuasan Klien'},
	]

	return (
		<section
			id="tentang"
			className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30"
		>
			{/* Background elements */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

				{/* Subtle pattern */}
				<div
					className="absolute inset-0 opacity-5"
					style={{
						backgroundImage:
							'url("https://www.transparenttextures.com/patterns/cubes.png")',
						backgroundRepeat: 'repeat',
					}}
				></div>
			</div>

			<div className="container px-4 md:px-6">
				{/* Section title */}
				<AnimatedSection>
					<div className="text-center mb-12">
						<Badge className="mb-3 px-3 py-1 text-sm">
							Get to Know Me
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold">
							<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
								Tentang Saya
							</span>
						</h2>
					</div>
				</AnimatedSection>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
					{/* Profile column */}
					<AnimatedSection className="lg:col-span-5 space-y-8">
						<div className="relative max-w-md mx-auto">
							{/* Profile image with decorative elements */}
							<div className="relative z-10 mx-auto rounded-xl overflow-hidden border-4 border-background shadow-2xl w-64 h-64 md:w-72 md:h-72">
								<Image
									src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
									alt="Betsky2112 - Web Developer"
									fill
									className="object-cover"
								/>
							</div>

							{/* Decorative elements */}
							<div className="absolute top-0 right-0 -mt-4 -mr-4 z-0">
								<div className="w-24 h-24 rounded-lg bg-primary/20 backdrop-blur"></div>
							</div>
							<div className="absolute bottom-0 left-0 -mb-4 -ml-4 z-0">
								<div className="w-24 h-24 rounded-lg bg-secondary/20 backdrop-blur"></div>
							</div>

							{/* Profile info card */}
							<motion.div
								className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur shadow-lg rounded-full px-6 py-2 flex items-center space-x-2"
								initial={{opacity: 0, y: 20}}
								whileInView={{opacity: 1, y: 0}}
								transition={{delay: 0.5}}
								viewport={{once: true}}
							>
								{/* <User className="h-4 w-4 text-primary" /> */}
								{/* <span className="text-sm font-medium">
									@betsky2112
								</span> */}
							</motion.div>
						</div>

						{/* Achievements */}
						<AnimatedSection delay={0.3}>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								{achievements.map((achievement, index) => (
									<AchievementCard
										key={index}
										icon={achievement.icon}
										value={achievement.value}
										label={achievement.label}
									/>
								))}
							</div>
						</AnimatedSection>
					</AnimatedSection>

					{/* Content column */}
					<div className="lg:col-span-7 space-y-6">
						<AnimatedSection>
							<Card className="bg-background/80 backdrop-blur shadow-lg border-none">
								<CardContent className="p-6 space-y-4">
									<div className="flex items-center gap-3 mb-2">
										<div className="h-10 w-1 bg-primary rounded-full"></div>
										<h3 className="text-2xl font-semibold">
											Perkenalan
										</h3>
									</div>

									<p className="text-muted-foreground leading-relaxed">
										Halo! Saya{' '}
										<span className="text-foreground font-medium">
											Betsky2112
										</span>
										, seorang web developer full stack
										dengan pengalaman lebih dari 5 tahun
										dalam industri. Saya telah menyelesaikan
										lebih dari 100 proyek untuk berbagai
										klien dari startup hingga perusahaan
										besar.
									</p>

									<p className="text-muted-foreground leading-relaxed">
										Saya berspesialisasi dalam pengembangan
										aplikasi web modern dengan fokus pada
										pengalaman pengguna yang baik dan
										performa yang optimal. Pendekatan saya
										dalam pengembangan web adalah memadukan
										desain yang menarik dengan kode yang
										bersih dan efisien.
									</p>

									<div className="flex flex-col sm:flex-row gap-6 pt-2">
										<div className="flex-1">
											<div className="flex items-center gap-2 mb-1">
												<GraduationCap className="h-4 w-4 text-primary" />
												<span className="text-sm font-medium">
													Pendidikan
												</span>
											</div>
											<p className="text-sm text-muted-foreground">
												S1 Teknik Informatika,
												Universitas Indonesia
											</p>
										</div>
										<div className="flex-1">
											<div className="flex items-center gap-2 mb-1">
												<Briefcase className="h-4 w-4 text-primary" />
												<span className="text-sm font-medium">
													Pengalaman Kerja
												</span>
											</div>
											<p className="text-sm text-muted-foreground">
												Senior Web Developer, PT Digital
												Kreasi
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</AnimatedSection>

						{/* Skills section */}
						<AnimatedSection delay={0.2}>
							<Card className="bg-background/80 backdrop-blur shadow-lg border-none">
								<CardContent className="p-6">
									<div className="flex items-center gap-3 mb-4">
										<div className="h-10 w-1 bg-primary rounded-full"></div>
										<h3 className="text-2xl font-semibold">
											Keahlian Utama
										</h3>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
										{coreSkills.map((skill, index) => (
											<SkillBar
												key={index}
												skill={skill.name}
												level={skill.level}
												delay={index * 0.1}
											/>
										))}
									</div>
								</CardContent>
							</Card>
						</AnimatedSection>

						{/* Other skills */}
						<AnimatedSection delay={0.4}>
							<Card className="bg-background/80 backdrop-blur shadow-lg border-none">
								<CardContent className="p-6">
									<div className="flex items-center gap-3 mb-4">
										<div className="h-10 w-1 bg-primary rounded-full"></div>
										<h3 className="text-2xl font-semibold">
											Keahlian Lainnya
										</h3>
									</div>

									<div className="flex flex-wrap gap-2">
										{otherSkills.map((skill, index) => (
											<motion.div
												key={index}
												initial={{opacity: 0, y: 20}}
												whileInView={{opacity: 1, y: 0}}
												transition={{
													delay: 0.1 + index * 0.05,
												}}
												viewport={{once: true}}
											>
												<Badge
													variant="secondary"
													className="px-3 py-1 bg-primary/10 hover:bg-primary/20 text-foreground transition-colors"
												>
													{skill}
												</Badge>
											</motion.div>
										))}
									</div>
								</CardContent>
							</Card>
						</AnimatedSection>
					</div>
				</div>
			</div>
		</section>
	)
}
