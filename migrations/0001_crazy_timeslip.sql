ALTER TABLE "links" RENAME COLUMN "text" TO "display_text";
DROP INDEX IF EXISTS "text_idx";
CREATE INDEX IF NOT EXISTS "display_text_idx" ON "links" ("display_text");