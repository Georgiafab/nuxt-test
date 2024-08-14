import { PrismaClient } from "@prisma/client";
import { defineEventHandler } from "h3";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching users");
  } finally {
    await prisma.$disconnect();
  }
});
