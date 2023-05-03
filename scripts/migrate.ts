import { migrate } from 'drizzle-orm/node-postgres/migrator'

import { db } from '../src/lib/database'

async function main() {
	await migrate(db, { migrationsFolder: './migrations' })
	console.log('done')
}

main()