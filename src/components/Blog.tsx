import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogPost {
	id: number;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	category: string;
}

const blogPosts: BlogPost[] = [
	{
		id: 1,
		title: 'Next.js 14 最佳实践指南',
		excerpt:
			'深入探讨 Next.js 14 的新特性，包括 App Router、Server Components 和性能优化技巧...',
		date: '2024-10-15',
		readTime: '8 分钟',
		category: '前端开发'
	},
	{
		id: 2,
		title: 'TypeScript 高级技巧与设计模式',
		excerpt:
			'学习如何使用 TypeScript 的高级类型系统，提升代码质量和开发效率...',
		date: '2024-10-08',
		readTime: '12 分钟',
		category: '编程技术'
	},
	{
		id: 3,
		title: 'React Server Components 深度解析',
		excerpt:
			'了解 React Server Components 的工作原理，以及如何在项目中正确使用它们...',
		date: '2024-10-01',
		readTime: '15 分钟',
		category: '前端开发'
	},
	{
		id: 4,
		title: 'Tailwind CSS 实战技巧',
		excerpt:
			'分享在实际项目中使用 Tailwind CSS 的经验和技巧，打造优雅的用户界面...',
		date: '2024-09-24',
		readTime: '10 分钟',
		category: '前端开发'
	}
];

export default function Blog() {
	return (
		<section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
			<div className="container mx-auto max-w-6xl">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
						技术博客
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						分享技术见解、学习笔记和开发经验
					</p>
					<p className="text-sm text-muted-foreground mt-2">
						点击卡片访问完整博客站点 →{' '}
						<a
							href="https://blog.coutures.top"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline font-medium"
						>
							blog.coutures.top
						</a>
					</p>
				</div>

				{/* Blog Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					{blogPosts.map((post) => (
						<a
							key={post.id}
							href="https://blog.coutures.top"
							target="_blank"
							rel="noopener noreferrer"
							className="group bg-background rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden block"
						>
							<div className="p-6">
								{/* Category Badge */}
								<div className="mb-4">
									<span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
										{post.category}
									</span>
								</div>

								{/* Title */}
								<h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
									{post.title}
								</h3>

								{/* Excerpt */}
								<p className="text-muted-foreground mb-4 line-clamp-2">
									{post.excerpt}
								</p>

								{/* Meta Info */}
								<div className="flex items-center text-sm text-muted-foreground space-x-4 mb-4">
									<div className="flex items-center">
										<Calendar size={16} className="mr-1" />
										<span>{post.date}</span>
									</div>
									<div className="flex items-center">
										<Clock size={16} className="mr-1" />
										<span>{post.readTime}</span>
									</div>
								</div>

								{/* Read More Link */}
								<a
									href="https://blog.coutures.top"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
								>
									阅读更多
									<ArrowRight
										size={16}
										className="ml-1 group-hover:translate-x-1 transition-transform"
									/>
								</a>
							</div>
						</a>
					))}
				</div>

				{/* View All Button */}
				<div className="text-center">
					<a
						href="https://blog.coutures.top"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
					>
						查看所有博客
					</a>
				</div>
			</div>
		</section>
	);
}

