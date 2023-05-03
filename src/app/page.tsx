import React from 'react'
import Link from 'next/link'

import { db } from '@/lib/database'
import { LinksTable } from '@/models/link'

export default async function Home() {
	const links = await db.select().from(LinksTable)
	return (
		<div className='m-auto text-center'>
			<h1 className='text-5xl py-5 font-extrabold text-white'>Def Not Linktree</h1>
			{
				links.map((link) => (
					<div key={link.id} className='text-center link py-2 text-xl'>
						<Link href={link.url} target='_blank'>
							{link.text}
						</Link>
					</div>
				))
			}
		</div>
	)
}
