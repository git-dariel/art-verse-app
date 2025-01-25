/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w.wallhaven.cc",
        port: "",
        pathname: "/full/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.meer.com",
        port: "",
        pathname: "/attachments/**",
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
        port: "",
        pathname: "/**",
  },
      {
        protocol: "https",
        hostname: "www.framedcanvasart.com",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "artsdot.com",
        port: "",
        pathname: "/ADC/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/commons/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/en/**",
      },
      {
        protocol: "https",
        hostname: "www.claude-monet.com",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "www.liveabout.com",
        port: "",
        pathname: "/thmb/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.kennedy-center.org",
        port: "",
        pathname: "/globalassets/**",
      },
      {
        protocol: "https",
        hostname: "www.hollywoodreporter.com",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/jerrick/**",
      },
      {
        protocol: "https",
        hostname: "onehundredpages.wordpress.com",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "gitmind.com",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net",
        port: "",
        pathname: "/project_modules/**",
      },
      {
        protocol: "https",
        hostname: "www.edinburghnews.scotsman.com",
        port: "",
        pathname: "/webimg/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
        pathname: "/dms/**",
  },
    ],
  },
};

module.exports = nextConfig
