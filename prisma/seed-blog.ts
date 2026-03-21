import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CATEGORIES = [
  { name: "Microsoft Office", slug: "microsoft-office" },
  { name: "Windows", slug: "windows" },
  { name: "How-To Guides", slug: "how-to-guides" },
  { name: "Security", slug: "security" },
  { name: "News", slug: "news" },
];

async function main() {
  console.log("Seeding blog categories...");

  for (const cat of CATEGORIES) {
    await prisma.blogCategory.upsert({
      where: { slug: cat.slug },
      create: { name: cat.name, slug: cat.slug },
      update: {},
    });
    console.log("Created category: " + cat.name);
  }

  console.log("Done!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
