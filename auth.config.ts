/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
  providers: [], // Required by NextAuthConfig type
  callbacks: {
    authorized({ request, auth }: any) {
      // Array of regex patterns of paths we want to protect
      const protectedPaths = [
        /\/shipping-address/,
        /\/payment-method/,
        /\/place-order/,
        /\/profile/,
        /\/user\/(.*)/,
        /\/order\/(.*)/,
        /\/admin/,
      ];
      // Get pathname from the req URL object
      const { pathname } = request.nextUrl;

      // STEP 1: Check public paths FIRST (before protected paths)
      const publicPaths = [
        "/",
        "/about",
        "/contact",
        "/help",
        "/help-center",
        "/terms",
        "/terms-of-service",
        "/privacy",
        "/privacy-policy",
        "/refund-policy",
        "/return-policy",
        "/shipping-policy",
        "/payment-methods", // THIS IS THE KEY ONE!
        "/products",
        "/sign-in",
        "/sign-up",
      ];

      // Allow if it's a public path
      if (publicPaths.includes(pathname)) {
        if (!request.cookies.get("sessionCartId")) {
          const sessionCartId = crypto.randomUUID();
          const response = NextResponse.next({
            request: { headers: new Headers(request.headers) },
          });
          response.cookies.set("sessionCartId", sessionCartId);
          return response;
        }
        return true; // ✅ Allow public access
      }

      // Check if user is not authenticated and accessing a protected path
      if (!auth && protectedPaths.some((p) => p.test(pathname))) return false;

      // Check for session cart cookie
      if (!request.cookies.get("sessionCartId")) {
        // Generate new session cart id cookie
        const sessionCartId = crypto.randomUUID();

        // Create new response and add the new headers
        const response = NextResponse.next({
          request: {
            headers: new Headers(request.headers),
          },
        });

        // Set newly generated sessionCartId in the response cookies
        response.cookies.set("sessionCartId", sessionCartId);

        return response;
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
