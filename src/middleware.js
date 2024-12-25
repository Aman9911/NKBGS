import { NextResponse } from 'next/server';
import authService from './appwrite/auth';

export async function middleware(request) {
    const jwt = request.cookies.get('a_jwt');
    if (!jwt) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    try {
        authService.verifyJWT(jwt.value)
        await authService.verifyCurrentUser();
    } catch (error) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    return NextResponse.next();
}
export const config = {
    matcher: ['/admin/dashboard/:path*'],
};