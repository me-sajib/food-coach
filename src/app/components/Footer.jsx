import React from 'react';
import { Utensils } from 'lucide-react';

export function Footer() {
	return (
		<footer className="bg-gray-800 text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-3 gap-8">
					<div>
						<div className="flex items-center mb-4">
							<Utensils className="h-8 w-8" />
							<span className="ml-2 text-xl font-bold">VoedingsCoach BMH</span>
						</div>
						<p className="text-gray-400">
							Professionele voedingscoaching voor een gezondere levensstijl.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Snelle Links</h3>
						<ul className="space-y-2">
							<li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
							<li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Over Ons</a></li>
							<li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Diensten</a></li>
							<li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
							<li><a href="/algemene-voorwaarden" className="text-gray-400 hover:text-white transition-colors">Algemene Voorwaarden</a></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Info</h3>
						<ul className="space-y-2 text-gray-400">
							<li>Workum Buterikkers 33</li>
							<li>Hoofdvestlging</li>
							<li>info@VoedingsCoach.nl</li>
							<li>KVK: 96951362</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
					<p>&copy; 2025 VoedingsCoach BMH. Alle rechten voorbehouden.</p>
				</div>
			</div>
		</footer>
	);
}