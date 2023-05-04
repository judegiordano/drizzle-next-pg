import type { Metadata } from 'next'

const { DATABASE_URL } = process.env

export { DATABASE_URL }

export const baseMetaData: Metadata = {
	title: 'Def Not Linktree',
	description: 'idk man just some links',
	icons: '/stool.png',
	robots: {
		follow: true,
		index: true
	},
	openGraph: {
		description: 'idk man just some links',
		title: 'Not Linktree',
		siteName: 'not-linktree.vercel.app',
		url: 'https://not-linktree.vercel.app',
		images: {
			url: '/stool.png',
			width: 512,
			height: 512
		},
		type: 'website'
	}
}