/**
 * 301 redirect www → apex for every request (static + SPA).
 * Deployed as Cloudflare Pages Functions — no zone redirect API token needed.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.slice(4);
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
