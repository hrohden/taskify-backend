import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.status.create({
    data: {
      id: 1,
      description: 'Pending',
    },
  });
  await prisma.status.create({
    data: {
      id: 2,
      description: 'Running',
    },
  });
  await prisma.status.create({
    data: {
      id: 3,
      description: 'Blocked',
    },
  });
  await prisma.status.create({
    data: {
      id: 4,
      description: 'Completed',
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
