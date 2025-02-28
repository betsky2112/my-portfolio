import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import {ThemeProvider} from '@/components/theme/theme-provider'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
	title: 'Portfolio Profesional | Robert Siagian',
	description: 'Website portfolio yang menampilkan karya dan keahlian saya',
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
