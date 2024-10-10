import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from './services/authService';

interface IRoleBaseRoute  {
  USER:RegExp[],
  ADMIN:RegExp[],
  MODERATOR:RegExp[]
}

const roleBaseRoutes:IRoleBaseRoute = {
  USER: [/^\/dashboard\/user/,/^\/post/],
  ADMIN: [/^\/dashboard\/admin/,/^\/post/],
  MODERATOR: [/^\/dashboard\/admin/,/^\/post/],
};

const authRoutes = ['/auth/sign-in', '/auth/sign-up'];

export default async function (request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();
 
  if (user && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  } else if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/auth/sign-in/?redirect=${pathname}`, request.url)
      );
    }
  } else if (user?.role && roleBaseRoutes[user.role]) {
    const routes = roleBaseRoutes[user.role];

    if (routes.some((route) => pathname.match(route))) {
  
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL('/', request.url));
}
export const config = {
  matcher: ['/dashboard/:page*','/auth/:page*','/post/:page*'],
};
