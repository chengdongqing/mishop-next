import { auth } from '@/auth';

const protectedRoutes: string[] = [
  '/cart/checkout',
  '/account',
  '/orders',
  '/user'
];

export const middleware = auth((req) => {
  const pathname = req.nextUrl.pathname;
  const isProtected = protectedRoutes.some((path) => pathname.startsWith(path));

  if (isProtected && !req.auth) {
    return Response.redirect(new URL('/auth/signin', req.nextUrl.origin));
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] // 匹配所有的页面访问
};
