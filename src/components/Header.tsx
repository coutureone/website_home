'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Header() {
	const { language, setLanguage } = useLanguage();

	return (
		<header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/40">
			<nav className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-14 items-center justify-between">
					{/* Logo */}
					<Link
						href="/"
						className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
					>
						Couture
					</Link>

					{/* Language Switcher */}
					<button
						onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
						className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
						aria-label="Switch Language"
					>
						<span className="text-base">{language === 'zh' ? '🇨🇳' : '🇺🇸'}</span>
						<span>{language === 'zh' ? '中文' : 'EN'}</span>
					</button>
				</div>
			</nav>
		</header>
	);
}
