import React from 'react'
import { Poppins } from 'next/font/google'

import '../../styles/globals.css'
import { baseMetaData } from '@/lib/config'

export const metadata = baseMetaData

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
	// 'dracula', 'luxury', 'night', 'lofi', 'cupcake', 'garden'
		<html lang="en" data-theme="garden">
			<body className={poppins.className}>
				{children}
			</body>
		</html>
	)
}
