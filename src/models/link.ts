import {
	index,
	pgTable,
	serial,
	timestamp,
	varchar,
} from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'

export const Links = pgTable(
	'links',
	{
		id: serial('id').primaryKey(),
		url: varchar('link', { length: 256 }).notNull(),
		displayText: varchar('display_text', { length: 256 }).notNull(),
		created_at: timestamp('created_at').defaultNow().notNull(),
		updated_at: timestamp('updated_at').defaultNow().notNull(),
	},
	(links) => {
		return {
			urlIdx: index('url_idx').on(links.url),
			displayTextIdx: index('display_text_idx').on(links.displayText),
		}
	}
)

export type Link = InferModel<typeof Links>;
export type NewLInk = InferModel<typeof Links, 'insert'>;
