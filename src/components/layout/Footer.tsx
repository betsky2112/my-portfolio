import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="border-t bg-background/95">
			<div className="container py-8 md:py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="font-bold text-lg mb-4">Nama Anda</h3>
						<p className="text-muted-foreground">
							Web developer profesional dengan pengalaman lebih
							dari 100 proyek.
						</p>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-4">Tautan</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-muted-foreground hover:text-foreground"
								>
									Beranda
								</Link>
							</li>
							<li>
								<Link
									href="#tentang"
									className="text-muted-foreground hover:text-foreground"
								>
									Tentang
								</Link>
							</li>
							<li>
								<Link
									href="#proyek"
									className="text-muted-foreground hover:text-foreground"
								>
									Proyek
								</Link>
							</li>
							<li>
								<Link
									href="#kontak"
									className="text-muted-foreground hover:text-foreground"
								>
									Kontak
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-4">Media Sosial</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="https://github.com/yourusername"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-foreground"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="https://linkedin.com/in/yourusername"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-foreground"
								>
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 pt-6 border-t">
					<p className="text-center text-muted-foreground">
						&copy; {new Date().getFullYear()} Nama Anda. Semua hak
						dilindungi.
					</p>
				</div>
			</div>
		</footer>
	)
}
