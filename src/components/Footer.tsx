import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		navigation: [
			{ name: '首页', href: '#home', external: false },
			{ name: '博客', href: 'https://blog.coutures.top', external: true },
			{ name: '跑步', href: 'https://running.coutures.top', external: true },
			{ name: '联系', href: '#contact', external: false }
		],
		resources: [
			{ name: 'GitHub', href: 'https://github.com/coutures', external: true },
			{
				name: '博客 RSS',
				href: 'https://blog.coutures.top/rss.xml',
				external: true
			}
		]
	};

	return (
		<footer className="border-t bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Brand */}
					<div>
						<Link
							href="/"
							className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block mb-4"
						>
							Couture
						</Link>
						<p className="text-muted-foreground text-sm">
							分享技术、记录跑步、追求进步
						</p>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="font-semibold mb-4">导航</h3>
						<ul className="space-y-2">
							{footerLinks.navigation.map((link) => (
								<li key={link.name}>
									{link.external ? (
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-muted-foreground hover:text-primary transition-colors"
										>
											{link.name}
										</a>
									) : (
										<Link
											href={link.href}
											className="text-sm text-muted-foreground hover:text-primary transition-colors"
										>
											{link.name}
										</Link>
									)}
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className="font-semibold mb-4">资源链接</h3>
						<ul className="space-y-2">
							{footerLinks.resources.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-muted-foreground hover:text-primary transition-colors"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-border">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-sm text-muted-foreground text-center md:text-left">
							© {currentYear} Couture. 保留所有权利.
						</p>
						<p className="text-sm text-muted-foreground flex items-center">
							使用 Next.js 构建，用
							<Heart
								size={14}
								className="mx-1 text-red-500 fill-red-500 animate-pulse"
							/>
							制作
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
