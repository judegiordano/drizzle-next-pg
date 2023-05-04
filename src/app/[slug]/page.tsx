import React from 'react'
import Link from 'next/link'
import { asc, eq } from 'drizzle-orm'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { db } from '@/lib/database'
import { links, users } from '@/models/schema'
import { Divider } from '@/ui/Divider'
import { baseMetaData } from '@/lib/config'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	return {
		...baseMetaData,
		openGraph: {
			...baseMetaData.openGraph,
			title: `${baseMetaData.openGraph?.title} | ${params.slug}`,
		}
	}
}

export default async function Home({ params }: { params: { slug: string } }) {
	const userSlug = params.slug
	const usersData = await db
		.select()
		.from(users)
		.where(eq(users.slug, userSlug))
		.leftJoin(links, eq(links.userId, users.id))
		.orderBy(asc(links.displayText))
	if (!usersData.length) notFound()
	const user = usersData[0].users
	return (
		<div className='m-auto text-center'>
			<h1 className='py-5 text-5xl font-extrabold text-primary mobile:text-[35px]'>{user.username} Links</h1>
			<p className='font-extrabold'>@{user.slug}</p>
			<Divider />
			{
				usersData.map(({ links }) => (
					links && (
						<div key={links.id} className='py-2 link'>
							<button className="btn w-[250px] btn-circle">
								<Link href={links.url} target='_blank'>
									{links.displayText}
								</Link>
							</button>
						</div>
					)
				))
			}
		</div>
	)
}
