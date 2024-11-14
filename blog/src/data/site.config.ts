interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Videohead.io', // Site author
	title: 'Videohead Blog — Smart Video Creation: Tutorials and Marketing Tips for Video Content Creators', // Site title.
	description: 'Discover smart video creation tips and marketing strategies. Learn how to easily create engaging videos from your website for social media, tutorials, and more!', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
