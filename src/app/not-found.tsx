import {Button} from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-[80vh] text-center">
			<h1 className="text-6xl font-bold">404</h1>
			<h2 className="text-2xl font-semibold mt-4">
				Halaman Tidak Ditemukan
			</h2>
			<p className="text-muted-foreground mt-2 max-w-md">
				Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah
				dipindahkan.
			</p>
			<Button
				asChild
				className="mt-8"
			>
				<Link href="/">Kembali ke Beranda</Link>
			</Button>
		</div>
	)
}
