import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import {ThemeProvider} from '@/components/theme/theme-provider'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
	title: 'Portfolio Profesional | Nama Anda',
	description:
		'Website portfolio yang menampilkan karya dan keahlian Nama Anda sebagai web developer profesional dengan pengalaman lebih dari 100 proyek',
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
	authors: [{name: 'Nama Anda', url: 'https://namaanda.com'}],
	creator: 'Nama Anda',
	openGraph: {
		type: 'website',
		locale: 'id_ID',
		url: 'https://www.namaanda.com',
		title: 'Portfolio Profesional | Nama Anda',
		description:
			'Website portfolio yang menampilkan karya dan keahlian Nama Anda sebagai web developer profesional',
		siteName: 'Portfolio Nama Anda',
		images: [
			{
				url: '/images/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Portfolio Profesional Nama Anda',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Portfolio Profesional | Nama Anda',
		description:
			'Website portfolio yang menampilkan karya dan keahlian Nama Anda sebagai web developer profesional',
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
				</ThemeProvider>
			</body>
		</html>
	)
}
