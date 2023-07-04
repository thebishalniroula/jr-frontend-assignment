/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
            protocol:"https",
            hostname:"api.deezer.com",
            },
            {
            protocol:"https",
            hostname:"e-cdns-images.dzcdn.net",
            },
        ]
    }
}

module.exports = nextConfig
