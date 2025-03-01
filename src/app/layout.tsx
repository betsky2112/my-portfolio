import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import {ThemeProvider} from '@/components/theme/theme-provider'
import {ScrollToTopButton} from '@/components/ui/scroll-to-top'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
	title: 'Portfolio Profesional | Robert Siagian',
	description:
		'Website portfolio yang menampilkan karya dan keahlian Robert Siagian sebagai web developer profesional dengan pengalaman lebih dari 1 tahun',
	keywords: [
		'web developer',
		'portfolio',
		'next.js',
		'react',
		'tailwind css',
		'full stack',
		'frontend',
		'backend',
	],
	authors: [{name: 'Robert Siagian', url: 'https://betsky.me'}],
	creator: 'Robert Siagian',
	openGraph: {
		type: 'website',
		locale: 'id_ID',
		url: 'https://betsky.me',
		title: 'Portfolio Profesional | Robert Siagian',
		description:
			'Website portfolio yang menampilkan karya dan keahlian Robert Siagian sebagai web developer profesional',
		siteName: 'Portfolio Robert Siagian',
		images: [
			{
				url: '/images/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Portfolio Profesional Robert Siagian',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Portfolio Profesional | Robert Siagian',
		description:
			'Website portfolio yang menampilkan karya dan keahlian Robert Siagian sebagai web developer profesional',
		creator: '@username_anda',
		images: ['/images/og-image.jpg'],
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html
			lang="id"
			className="scroll-smooth"
			suppressHydrationWarning
		>
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main className="flex-grow">{children}</main>
					<Footer />
					<ScrollToTopButton />
				</ThemeProvider>
			</body>
		</html>
	)
}
