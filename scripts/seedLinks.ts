import { db } from '../src/lib/database'
import { links, NewLInk, NewUser, users } from '../src/models/schema'

async function main() {
	const user: NewUser = {
		username: 'JudeGiordano',
		slug: 'jude-giordano'
	}
	const insertedUser = await db.insert(users).values(user).returning()
	const newLinks: NewLInk[] = [
		{
			url: 'https://www.barstoolsports.com',
			displayText: 'Barstool Sports',
			userId: insertedUser[0].id
		},
		{
			url: 'https://github.com/drizzle-team/drizzle-orm',
			displayText: 'Drizzle Orm',
			userId: insertedUser[0].id
		},
		{
			url: 'https://vercel.com',
			displayText: 'Vercel',
			userId: insertedUser[0].id
		}
	]
	const insertedLink = await db.insert(links).values(newLinks).returning()
	console.log(insertedLink)
}

main()
