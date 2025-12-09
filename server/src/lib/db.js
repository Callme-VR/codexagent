import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis;
const adapter = new PrismaPg();
const prisma = new PrismaClient({
  adapter
});

if(!process.env.NODE_ENV !== "production"){
    globalForPrisma.prisma=prisma;
}

export default prisma;