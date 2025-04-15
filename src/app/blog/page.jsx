import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import Link from 'next/link';

const blogPosts = [
	{
		id: 1,
		title: 'Gezond Eten: De Basis van een Vitaal Leven',
		slug: 'gezond-eten-basis',
		excerpt: 'Ontdek de fundamentele principes van gezonde voeding en hoe je deze kunt toepassen in je dagelijkse leven.',
		image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80',
		date: '15 maart 2025',
		category: 'Voeding'
	},
	{
		id: 2,
		title: 'Mindful Eten: De Sleutel tot Gewichtsbeheersing',
		slug: 'mindful-eten',
		excerpt: 'Leer hoe bewust eten je kan helpen bij het bereiken en behouden van een gezond gewicht.',
		image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&q=80',
		date: '10 maart 2025',
		category: 'Leefstijl'
	},
	{
		id: 3,
		title: 'Sportvoeding: Optimaliseer Je Prestaties',
		slug: 'sportvoeding',
		excerpt: 'Alles wat je moet weten over voeding voor, tijdens en na het sporten.',
		image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
		date: '5 maart 2025',
		category: 'Sport'
	},
	{
		id: 4,
		title: 'Gezonde Recepten voor Drukke Dagen',
		slug: 'gezonde-recepten',
		excerpt: 'Snelle en voedzame recepten die passen bij een drukke levensstijl.',
		image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80',
		date: '1 maart 2025',
		category: 'Recepten'
	}
];

export default function Blog() {
	return (
		<>
			<Navigation />
			<div className="bg-gradient-to-b from-orange-50 to-white min-h-screen py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-4xl font-bold text-gray-900 mb-4">Voedingskennis Blog</h1>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Ontdek waardevolle inzichten, tips en kennis over gezonde voeding,
							leefstijl en persoonlijke ontwikkeling.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map(post => (
							<Link
								key={post.id}
								href={`/blog/${post.slug}`}
								className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<div className="relative h-48">
									<img
										src={post.image}
										alt={post.title}
										className="w-full h-full object-cover"
									/>
									<div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
										{post.category}
									</div>
								</div>
								<div className="p-6">
									<div className="text-sm text-gray-500 mb-2">{post.date}</div>
									<h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
									<p className="text-gray-600">{post.excerpt}</p>
									<div className="mt-4 text-orange-600 font-medium">Lees meer →</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}