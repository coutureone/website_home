import ThemeProviders from '@/components/theme-providers';
import siteMetadata from '@/data/siteMetadata';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Couture - 个人主页',
	description:
		'欢迎来到 Couture 的个人主页！在这里可以访问我的技术博客和跑步记录。',
	keywords: ['Couture', '博客', '跑步', '技术', 'Next.js', 'TypeScript'],
	authors: [{ name: 'Couture' }],
	icons: {
		icon: 'https://fav.farm/👨🏻‍💻',
		shortcut: 'https://fav.farm/👨🏻‍💻',
		apple: 'https://fav.farm/👨🏻‍💻'
	},
	openGraph: {
		title: 'Couture - 个人主页',
		description: '探索技术博客和跑步记录',
		type: 'website',
		locale: 'zh_CN',
		url: 'https://coutures.top'
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang={siteMetadata.locale} suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProviders
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProviders>
			</body>
		</html>
	);
}
