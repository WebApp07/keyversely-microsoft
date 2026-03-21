import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool) as any;

const globalForPrisma = global as unknown as { prisma: ReturnType<typeof createPrismaClient> };

function createPrismaClient() {
  return new PrismaClient({ adapter }).$extends({
    result: {
      product: {
        price: { compute(p: any) { return p.price.toString(); } },
        rating: { compute(p: any) { return p.rating.toString(); } },
      },
      cart: {
        itemsPrice: { needs: { itemsPrice: true }, compute(c: any) { return c.itemsPrice.toString(); } },
        shippingPrice: { needs: { shippingPrice: true }, compute(c: any) { return c.shippingPrice.toString(); } },
        taxPrice: { needs: { taxPrice: true }, compute(c: any) { return c.taxPrice.toString(); } },
        totalPrice: { needs: { totalPrice: true }, compute(c: any) { return c.totalPrice.toString(); } },
      },
      order: {
        itemsPrice: { needs: { itemsPrice: true }, compute(c: any) { return c.itemsPrice.toString(); } },
        shippingPrice: { needs: { shippingPrice: true }, compute(c: any) { return c.shippingPrice.toString(); } },
        taxPrice: { needs: { taxPrice: true }, compute(c: any) { return c.taxPrice.toString(); } },
        totalPrice: { needs: { totalPrice: true }, compute(c: any) { return c.totalPrice.toString(); } },
      },
      orderItem: {
        price: { compute(c: any) { return c.price.toString(); } },
      },
    },
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
