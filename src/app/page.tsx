import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function Home() {
	return (
		<LanguageProvider>
			<div className="min-h-screen">
				<Header />
				<main>
					<Hero />
				</main>
			</div>
		</LanguageProvider>
	);
}
