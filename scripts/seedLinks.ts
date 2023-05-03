import { db } from '../src/lib/database'
import { Links, NewLInk } from '../src/models/link'

async function main() {
	const newLinks: NewLInk[] = [
		{
			url: 'https://www.barstoolsports.com',
			displayText: 'Barstool Sports',
		},
		{
			url: 'https://github.com/drizzle-team/drizzle-orm',
			displayText: 'Drizzle Orm',
		},
		{
			url: 'https://vercel.com',
			displayText: 'Vercel',
		}
	]
	const insertedLink = await db.insert(Links).values(newLinks).returning()
	console.log(insertedLink)
}

main()
