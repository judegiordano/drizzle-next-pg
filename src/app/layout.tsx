import React from 'react'
import { Poppins } from 'next/font/google'
import '../../styles/globals.css'

export const metadata = {
	title: 'Def Not Linktree',
	description: 'idk man just some links',
	icons: '/stool.png',
	robots: {
		follow: true,
		index: true
	}
}

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
	// 'dracula', 'luxury', 'night', 'lofi', 'cupcake', 'garden'
		<html lang="en" data-theme="luxury">
			<body className={poppins.className}>
				{children}
			</body>
		</html>
	)
}
