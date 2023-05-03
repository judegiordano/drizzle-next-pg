import {
	index,
	integer,
	pgTable,
	serial,
	timestamp,
	uniqueIndex,
	varchar,
} from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'

export const links = pgTable(
	'links',
	{
		id: serial('id').primaryKey(),
		url: varchar('link', { length: 256 }).notNull(),
		displayText: varchar('display_text', { length: 256 }).notNull(),
		userId: integer('user_id').references(() => users.id),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		updatedAt: timestamp('updated_at').defaultNow().notNull(),
	},
	(link) => {
		return {
			urlIdx: index('url_idx').on(link.url),
			displayTextIdx: index('display_text_idx').on(link.displayText),
		}
	}
)
export type Link = InferModel<typeof links>
export type NewLInk = InferModel<typeof links, 'insert'>

export const users = pgTable(
	'users',
	{
		id: serial('id').primaryKey(),
		username: varchar('username', { length: 256 }).notNull(),
		slug: varchar('slug', { length: 256 }).notNull(),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		updatedAt: timestamp('updated_at').defaultNow().notNull(),
	},
	(user) => {
		return {
			slugIdx: uniqueIndex('slug_idx').on(user.slug)
		}
	}
)
export type User = InferModel<typeof users>
export type NewUser = InferModel<typeof users, 'insert'>