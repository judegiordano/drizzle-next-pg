import React from 'react'
import Link from 'next/link'
import { asc } from 'drizzle-orm'

import { db } from '@/lib/database'
import { links } from '@/models/schema'

export default async function Home() {
	const linkData = await db.select().from(links).limit(10).orderBy(asc(links.displayText))
	return (
		<div className='m-auto text-center'>
			<h1 className='py-5 text-5xl font-extrabold text-white'>Def Not Linktree</h1>
			{
				linkData.map((link) => (
					<div key={link.id} className='py-2 text-xl text-center link'>
						<Link href={link.url} target='_blank'>
							{link.displayText}
						</Link>
					</div>
				))
			}
		</div>
	)
}
