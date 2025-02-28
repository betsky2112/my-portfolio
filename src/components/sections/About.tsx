import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

export default function About() {
	const skills = [
		'Next.js',
		'React',
		'TypeScript',
		'JavaScript',
		'Node.js',
		'Tailwind CSS',
		'GraphQL',
		'MongoDB',
		'PostgreSQL',
		'Firebase',
	]

	return (
		<section
			id="tentang"
			className="py-16 bg-muted/50"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col md:flex-row gap-8 items-center">
					<div className="md:w-1/3 flex justify-center">
						<Avatar className="h-64 w-64">
							<AvatarImage
								src="/images/profile.jpg"
								alt="Foto Profil"
							/>
							<AvatarFallback>NA</AvatarFallback>
						</Avatar>
					</div>
					<div className="md:w-2/3 space-y-4">
						<h2 className="text-3xl font-bold">Tentang Saya</h2>
						<p className="text-muted-foreground">
							Saya adalah seorang web developer full stack dengan
							pengalaman lebih dari 5 tahun dalam industri. Saya
							telah menyelesaikan lebih dari 100 proyek untuk
							berbagai klien dari startup hingga perusahaan besar.
							Saya berspesialisasi dalam pengembangan aplikasi web
							modern dengan fokus pada pengalaman pengguna yang
							baik dan performa yang optimal.
						</p>
						<p className="text-muted-foreground">
							Pendekatan saya dalam pengembangan web adalah
							memadukan desain yang menarik dengan kode yang
							bersih dan efisien. Saya selalu bersemangat untuk
							mempelajari teknologi baru dan
							mengimplementasikannya dalam proyek-proyek saya.
						</p>

						<div className="pt-4">
							<h3 className="text-xl font-bold mb-2">Keahlian</h3>
							<div className="flex flex-wrap gap-2">
								{skills.map((skill, index) => (
									<span
										key={index}
										className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
