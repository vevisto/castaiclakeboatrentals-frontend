
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/private/', '/admin/'],
            },
        ],
        sitemap: 'http://localhost:3000/sitemap.xml',
    }
}