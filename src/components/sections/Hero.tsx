'use client'

import {useState, useEffect} from 'react'
import {Button} from '@/components/ui/button'
import {AnimatedSection} from '@/components/ui/animated-section'
import Link from 'next/link'
import Image from 'next/image'
import {motion, useAnimation} from 'framer-motion'
import {Parallax} from 'react-parallax'
import {
	ChevronDown,
	Github,
	Linkedin,
	Twitter,
} from 'lucide-react'
import {TypeAnimation} from 'react-type-animation'
import {Badge} from '@/components/ui/badge'

// Social media links component
const SocialLinks = () => {
	return (
		<div className="flex items-center gap-3">
			<a
				href="https://github.com/yourusername"
				target="_blank"
				rel="noreferrer"
				className="bg-background/80 backdrop-blur p-2 rounded-full hover:bg-primary/10 transition-colors"
				aria-label="GitHub"
			>
				<Github className="h-5 w-5" />
			</a>
			<a
				href="https://linkedin.com/in/yourusername"
				target="_blank"
				rel="noreferrer"
				className="bg-background/80 backdrop-blur p-2 rounded-full hover:bg-primary/10 transition-colors"
				aria-label="LinkedIn"
			>
				<Linkedin className="h-5 w-5" />
			</a>
			<a
				href="https://twitter.com/yourusername"
				target="_blank"
				rel="noreferrer"
				className="bg-background/80 backdrop-blur p-2 rounded-full hover:bg-primary/10 transition-colors"
				aria-label="Twitter"
			>
				<Twitter className="h-5 w-5" />
			</a>
		</div>
	)
}

// Floating badge component
const FloatingSkillBadge = ({children, icon: Icon, delay, x, y}) => {
	return (
		<motion.div
			className="absolute hidden md:flex items-center"
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{delay, duration: 0.5}}
			style={{left: `${x}%`, top: `${y}%`}}
		>
			<Badge
				variant="secondary"
				className="flex items-center gap-1 px-3 py-1 shadow-lg bg-background/80 backdrop-blur"
			>
				{Icon && <Icon className="h-3 w-3" />} {children}
			</Badge>
		</motion.div>
	)
}

export default function Hero() {
	const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
	const controls = useAnimation()

	// Handle mouse movement for parallax effect on the profile picture
	const handleMouseMove = (e) => {
		const {clientX, clientY} = e
		const moveX = (clientX - window.innerWidth / 2) / -20
		const moveY = (clientY - window.innerHeight / 2) / -20
		setMousePosition({x: moveX, y: moveY})
	}

	useEffect(() => {
		controls.start({
			x: mousePosition.x,
			y: mousePosition.y,
			transition: {type: 'spring', stiffness: 75},
		})
	}, [mousePosition, controls])

	return (
		<section
			className="relative overflow-hidden min-h-[90vh] flex items-center justify-center py-20 md:py-28 lg:py-0"
			onMouseMove={handleMouseMove}
		>
			{/* Animated Background */}
			<div className="absolute inset-0 z-0">
				<Parallax
					bgImage="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
					strength={300}
					bgImageStyle={{opacity: 0.2}}
					className="w-full h-full"
				>
					<div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background to-background"></div>
					<div style={{height: '90vh'}}></div>
				</Parallax>
			</div>

			{/* Animated Blobs */}
			<div className="absolute top-48 right-5 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
			<div className="absolute bottom-24 left-12 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

			{/* Floating skill badges */}
			{/* <FloatingSkillBadge
				icon={Layout}
				delay={1.2}
				x={15}
				y={30}
			>
				React
			</FloatingSkillBadge>
			<FloatingSkillBadge
				icon={Code}
				delay={1.5}
				x={75}
				y={40}
			>
				Next.js
			</FloatingSkillBadge>
			<FloatingSkillBadge
				icon={Database}
				delay={1.8}
				x={25}
				y={70}
			>
				MongoDB
			</FloatingSkillBadge>
			<FloatingSkillBadge
				icon={PenTool}
				delay={2.1}
				x={70}
				y={65}
			>
				Tailwind CSS
			</FloatingSkillBadge> */}

			<div className="container relative z-10 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
				{/* Left content */}
				<div className="flex-1 text-center md:text-left">
					<AnimatedSection>
						<motion.h1
							className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4"
							initial={{opacity: 0, y: 30}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.8, ease: 'easeOut'}}
						>
							<span className="block">Halo, Saya</span>
							<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
								<TypeAnimation
									sequence={[
										'Robert Siagian',
										2000,
										'Web Developer',
										2000,
										'UI Designer',
										2000,
									]}
									wrapper="span"
									speed={50}
									repeat={Infinity}
								/>
							</span>
						</motion.h1>

						<motion.p
							className="mx-auto md:mx-0 max-w-[700px] text-xl text-muted-foreground mb-8"
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							transition={{duration: 0.8, delay: 0.3}}
						>
							Web Developer Full Stack dengan spesialisasi dalam
							membangun aplikasi modern dan
							<span className="text-primary font-medium">
								{' '}
								pengalaman lebih dari 100 proyek
							</span>
							. Mahir dalam Next.js, React, dan Tailwind CSS.
						</motion.p>
					</AnimatedSection>

					<AnimatedSection delay={0.6}>
						<div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
							<Button
								asChild
								size="lg"
								className="rounded-full"
							>
								<Link href="#proyek">
									Lihat Portofolio
									<motion.span
										className="ml-1"
										animate={{x: [0, 4, 0]}}
										transition={{
											repeat: Infinity,
											duration: 1.5,
										}}
									>
										→
									</motion.span>
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="rounded-full"
							>
								<Link href="#kontak">Hubungi Saya</Link>
							</Button>
						</div>

						<div className="hidden md:block">
							<p className="text-sm text-muted-foreground mb-3">
								Temukan Saya di:
							</p>
							<SocialLinks />
						</div>
					</AnimatedSection>
				</div>

				{/* Profile image with mouse movement effect */}
				<div className="flex-1 flex justify-center md:justify-end">
					<AnimatedSection delay={0.4}>
						<motion.div
							className="relative"
							animate={controls}
						>
							<div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 animate-pulse"></div>
							<div className="relative h-[280px] w-[280px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] overflow-hidden rounded-full border-4 border-background">
								<Image
									src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
									alt="Betsky2112 - Web Developer"
									fill
									className="object-cover"
									priority
								/>
							</div>

							{/* Mobile-only social links */}
							<div className="md:hidden flex justify-center mt-6">
								<SocialLinks />
							</div>
						</motion.div>
					</AnimatedSection>
				</div>
			</div>

			{/* Scroll down indicator */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
				<AnimatedSection delay={2}>
					<motion.div
						animate={{y: [0, 8, 0]}}
						transition={{repeat: Infinity, duration: 2}}
						className="flex flex-col items-center cursor-pointer"
						onClick={() => {
							const element = document.getElementById('tentang')
							element?.scrollIntoView({behavior: 'smooth'})
						}}
					>
						<span className="text-xs text-muted-foreground mb-2">
							Scroll ke bawah
						</span>
						<ChevronDown className="h-5 w-5 text-muted-foreground" />
					</motion.div>
				</AnimatedSection>
			</div>

			{/* Add custom CSS for animations */}
			<style
				jsx
				global
			>{`
				@keyframes blob {
					0% {
						transform: translate(0px, 0px) scale(1);
					}
					33% {
						transform: translate(30px, -50px) scale(1.1);
					}
					66% {
						transform: translate(-20px, 20px) scale(0.9);
					}
					100% {
						transform: translate(0px, 0px) scale(1);
					}
				}
				.animate-blob {
					animation: blob 10s infinite;
				}
				.animation-delay-4000 {
					animation-delay: 4s;
				}
			`}</style>
		</section>
	)
}
