'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Activity, Github, Mail, MessageCircle } from 'lucide-react';

export default function Hero() {
	const { language } = useLanguage();
	const t = translations[language];

	const links = [
		{
			name: t.links.github.name,
			href: 'https://github.com/coutureone',
			icon: <Github size={28} />,
			description: t.links.github.description
		},
		{
			name: t.links.blog.name,
			href: 'https://blog.coutures.top',
			icon: <MessageCircle size={28} />,
			description: t.links.blog.description
		},
		{
			name: t.links.running.name,
			href: 'https://run.coutures.top',
			icon: <Activity size={28} />,
			description: t.links.running.description
		},
		{
			name: t.links.contact.name,
			href: 'mailto:couturecome@gmail.com',
			icon: <Mail size={28} />,
			description: t.links.contact.description
		}
	];

	return (
		<section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-14">
			<div className="container mx-auto text-center">
				<div className="space-y-8 max-w-4xl mx-auto">
					{/* Avatar */}
					<div className="flex justify-center mb-8">
						<div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-lg hover:shadow-xl transition-shadow">
							<div className="w-full h-full rounded-full overflow-hidden bg-background">
								<img
									src="https://avatars.githubusercontent.com/u/62696030?u=197988fa72c99c3ab2618fbefa0ceda2ab259ea1&v=4"
									alt="Couture"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Title */}
					<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
						{t.greeting}{' '}
						<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Couture
						</span>
					</h1>

					{/* Description */}
					<p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto">
						{t.subtitle}
					</p>

					<p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
						{t.welcome}
					</p>

					{/* Social Links */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-12 max-w-3xl mx-auto">
						{links.map((link) => (
							<a
								key={link.name}
								href={link.href}
								target={link.href.startsWith('http') ? '_blank' : undefined}
								rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
								className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg"
							>
								<div className="mb-3 text-primary group-hover:scale-110 transition-transform">
									{link.icon}
								</div>
								<h3 className="font-semibold text-lg mb-1">{link.name}</h3>
								<p className="text-xs text-muted-foreground">{link.description}</p>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

