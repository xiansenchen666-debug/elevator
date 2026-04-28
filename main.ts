import designDocHtml from "./电梯安全监测系统设计说明书.html" with { type: "text" };

const HTML_HEADERS = {
  "content-type": "text/html; charset=utf-8",
  "cache-control": "public, max-age=300",
};

Deno.serve((request) => {
  const { pathname } = new URL(request.url);

  if (pathname === "/healthz") {
    return new Response("ok", {
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  return new Response(designDocHtml, { headers: HTML_HEADERS });
});
