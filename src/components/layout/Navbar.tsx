'use client'

import * as React from 'react'
import Link from 'next/link'
import {cn} from '@/lib/utils'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {Button} from '@/components/ui/button'
import {ThemeToggle} from '@/components/theme/theme-toggle'
import {Menu} from 'lucide-react'
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'

export default function Navbar() {
	const [isScrolled, setIsScrolled] = React.useState(false)

	React.useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={cn(
				'sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur',
				isScrolled
					? 'border-b shadow-sm bg-background/95 supports-[backdrop-filter]:bg-background/60'
					: 'bg-background/0'
			)}
		>
			<div className="container flex h-16 items-center justify-between">
				<div className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
					<Link
						href="/"
						className="flex items-center gap-2"
					>
						<span className="hidden sm:inline">Robert S</span>
						<span className="sm:hidden">RS</span>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link
									href="/"
									legacyBehavior
									passHref
								>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
									>
										Beranda
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									Tentang
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[200px] gap-3 p-4">
										<li className="row-span-1">
											<Link
												href="#tentang-saya"
												legacyBehavior
												passHref
											>
												<NavigationMenuLink
													className={cn(
														'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
													)}
												>
													<div className="text-sm font-medium">
														Tentang Saya
													</div>
													<p className="text-sm leading-snug text-muted-foreground">
														Kenali lebih dalam
														tentang siapa saya
													</p>
												</NavigationMenuLink>
											</Link>
										</li>
										<li className="row-span-1">
											<Link
												href="#keahlian"
												legacyBehavior
												passHref
											>
												<NavigationMenuLink
													className={cn(
														'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
													)}
												>
													<div className="text-sm font-medium">
														Keahlian
													</div>
													<p className="text-sm leading-snug text-muted-foreground">
														Teknologi dan skill yang
														saya kuasai
													</p>
												</NavigationMenuLink>
											</Link>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									Proyek
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2 gap-3 p-4">
										<li>
											<Link
												href="#proyek-terbaru"
												legacyBehavior
												passHref
											>
												<NavigationMenuLink
													className={cn(
														'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
													)}
												>
													<div className="text-sm font-medium">
														Proyek Terbaru
													</div>
													<p className="text-sm leading-snug text-muted-foreground">
														Lihat karya terbaru yang
														telah saya kerjakan
													</p>
												</NavigationMenuLink>
											</Link>
										</li>
										<li>
											<Link
												href="#semua-proyek"
												legacyBehavior
												passHref
											>
												<NavigationMenuLink
													className={cn(
														'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
													)}
												>
													<div className="text-sm font-medium">
														Semua Proyek
													</div>
													<p className="text-sm leading-snug text-muted-foreground">
														Jelajahi semua proyek
														yang pernah saya
														kerjakan
													</p>
												</NavigationMenuLink>
											</Link>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link
									href="#kontak"
									legacyBehavior
									passHref
								>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
									>
										Kontak
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</nav>

				<div className="flex items-center gap-4">
					<ThemeToggle />
					<Button
						className="hidden md:inline-flex"
						asChild
						size="sm"
					>
						<a href="#kontak">Hubungi Saya</a>
					</Button>

					{/* Mobile Navigation */}
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden"
							>
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle Menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-[250px] sm:w-[300px]"
						>
							<nav className="flex flex-col gap-4 mt-8">
								<Link
									href="/"
									className="px-2 py-1 text-lg font-medium hover:text-primary transition-colors"
								>
									Beranda
								</Link>
								<Link
									href="#tentang"
									className="px-2 py-1 text-lg font-medium hover:text-primary transition-colors"
								>
									Tentang
								</Link>
								<Link
									href="#proyek"
									className="px-2 py-1 text-lg font-medium hover:text-primary transition-colors"
								>
									Proyek
								</Link>
								<Link
									href="#kontak"
									className="px-2 py-1 text-lg font-medium hover:text-primary transition-colors"
								>
									Kontak
								</Link>
								<Button
									className="mt-4"
									asChild
								>
									<a href="#kontak">Hubungi Saya</a>
								</Button>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
