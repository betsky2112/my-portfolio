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

export default function Navbar() {
	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<div className="font-bold text-xl">
					<Link href="/">Nama Anda</Link>
				</div>
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
							<Link
								href="#tentang"
								legacyBehavior
								passHref
							>
								<NavigationMenuLink
									className={navigationMenuTriggerStyle()}
								>
									Tentang
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link
								href="#proyek"
								legacyBehavior
								passHref
							>
								<NavigationMenuLink
									className={navigationMenuTriggerStyle()}
								>
									Proyek
								</NavigationMenuLink>
							</Link>
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
				<div className="flex items-center gap-4">
					<ThemeToggle />
					<Button asChild>
						<a href="#kontak">Hubungi Saya</a>
					</Button>
				</div>
			</div>
		</header>
	)
}
