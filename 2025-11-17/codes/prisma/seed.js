const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create an admin user
  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@example.com",
      password: "supersecret", // Later hash this!
      role: "admin",
    },
  });

  // Create a company
  const company = await prisma.company.upsert({
    where: { name: "Acme Corp" },
    update: {},
    create: { name: "Acme Corp", industry: "Tech", city: "NY", country: "USA" },
  });

  // Create a contact
  await prisma.contact.upsert({
    where: { email: "john.doe@example.com" },
    update: {},
    create: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      title: "Manager",
      ownerId: admin.id,
      companyId: company.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
