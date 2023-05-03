import {
	index,
	pgTable,
	serial,
	timestamp,
	varchar,
} from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'

export const LinksTable = pgTable(
	'links',
	{
		id: serial('id').primaryKey(),
		url: varchar('link', { length: 256 }).notNull(),
		text: varchar('text', { length: 256 }).notNull(),
		created_at: timestamp('created_at').defaultNow().notNull(),
		updated_at: timestamp('updated_at').defaultNow().notNull(),
	},
	(links) => {
		return {
			urlIdx: index('url_idx').on(links.url),
			textIdx: index('text_idx').on(links.text),
		}
	}
)

export type Link = InferModel<typeof LinksTable>;
export type NewLInk = InferModel<typeof LinksTable, 'insert'>;
