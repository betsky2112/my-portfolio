'use client'

import {motion, Variants} from 'framer-motion'
import {ReactNode} from 'react'

interface AnimatedSectionProps {
	children: ReactNode
	className?: string
	delay?: number
}

export function AnimatedSection({
	children,
	className,
	delay = 0,
}: AnimatedSectionProps) {
	const variants: Variants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				delay: delay * 0.1,
			},
		},
	}

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{once: true, margin: '-100px'}}
			variants={variants}
			className={className}
		>
			{children}
		</motion.div>
	)
}
