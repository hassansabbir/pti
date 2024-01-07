/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["www.api.technicaltest.quadtheoryltd.com"],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://your-vercel-app.vercel.app",
          },
        ],
      },
    ];
  },
};
