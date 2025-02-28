'use client'

import {Button} from '@/components/ui/button'
import {useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

export function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 500) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', toggleVisibility)
		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="fixed bottom-6 right-6 z-50"
					initial={{opacity: 0, scale: 0.8}}
					animate={{opacity: 1, scale: 1}}
					exit={{opacity: 0, scale: 0.8}}
					transition={{duration: 0.2}}
				>
					<Button
						onClick={scrollToTop}
						size="icon"
						className="rounded-full shadow-lg"
						aria-label="Kembali ke atas"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4.5 15.75l7.5-7.5 7.5 7.5"
							/>
						</svg>
					</Button>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
