import { db } from "../src/lib/database";
import { LinksTable, NewLInk } from "../src/models/link";

async function main() {
  const newLinks: NewLInk[] = [
    {
      url: "https://www.barstoolsports.com",
      text: "Barstool Sports",
    },
    {
      url: "https://github.com/drizzle-team/drizzle-orm",
      text: "Drizzle Orm",
    },
    {
      url: "https://vercel.com",
      text: "Vercel",
    }
  ];
  const insertedLink = await db.insert(LinksTable).values(newLinks).returning();
  console.log(insertedLink);
}

main();
