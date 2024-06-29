import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
    publicRoutes: ["/", "/api/webhooks/stripe"],
    
    clerk: {
        publishableKey: process.env.Clerk_API_PUBLISHABLE_KEY
    }
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};