import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ url, redirect }, next) => {
	if (url.pathname === '/admin' || url.pathname === '/admin/') {
		return redirect('/admin/index.html', 302);
	}

	return next();
});
