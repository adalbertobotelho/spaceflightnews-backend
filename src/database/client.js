const Prisma = require('@prisma/client');
const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

const Articles = prisma.article
module.exports = Articles