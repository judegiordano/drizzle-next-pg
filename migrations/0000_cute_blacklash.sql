CREATE TABLE IF NOT EXISTS "links" (
	"id" serial PRIMARY KEY NOT NULL,
	"link" varchar(256) NOT NULL,
	"text" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "url_idx" ON "links" ("link");
CREATE INDEX IF NOT EXISTS "text_idx" ON "links" ("text");