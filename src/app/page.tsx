import React from 'react'
import Link from 'next/link'
import { asc } from 'drizzle-orm'

import { db } from '@/lib/database'
import { Links } from '@/models/link'

export default async function Home() {
	const links = await db.select().from(Links).limit(10).orderBy(asc(Links.displayText))
	return (
		<div className='m-auto text-center'>
			<h1 className='py-5 text-5xl font-extrabold text-white'>Def Not Linktree</h1>
			{
				links.map((link) => (
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
