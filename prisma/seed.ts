import "dotenv/config";
import { PrismaClient } from "./generated-client/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
//   const createMany = await prisma.user.createMany({
//   data: [
//     {
//       name: "Admin",
//       email: "admin@admin.com",
//       password: "Qwerty12345",
//     },
//     {
//       name: "John Doe",
//       email: "jogn@gmail.com",
//       password: "Qwerty12345",
//     },
//   ],
//   skipDuplicates: true, // Skip records with duplicate unique fields
// });

}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
