CREATE TABLE IF NOT EXISTS "links" (
	"id" serial PRIMARY KEY NOT NULL,
	"link" varchar(256) NOT NULL,
	"display_text" varchar(256) NOT NULL,
	"user_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(256) NOT NULL,
	"slug" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

DO $$ BEGIN
 ALTER TABLE "links" ADD CONSTRAINT "links_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE INDEX IF NOT EXISTS "url_idx" ON "links" ("link");
CREATE INDEX IF NOT EXISTS "display_text_idx" ON "links" ("display_text");
CREATE UNIQUE INDEX IF NOT EXISTS "slug_idx" ON "users" ("slug");