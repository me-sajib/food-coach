import React from 'react';
import { Utensils } from 'lucide-react';

export function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-4 gap-12">
					<div className="col-span-2 md:col-span-1">
						<div className="flex items-center mb-6">
							<Utensils className="h-8 w-8 text-orange-500" />
							<span className="ml-2 text-xl font-bold">Voedings coach FRL</span>
						</div>
						<p className="text-gray-400">
							Professionele voedingscoaching voor een gezondere en energiekere levensstijl.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-6">Menu</h3>
						<ul className="space-y-4">
							<li><a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
							<li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">Over Ons</a></li>
							<li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">Diensten</a></li>
							<li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-6">Links</h3>
						<ul className="space-y-4">
							<li><a href="/algemene-voorwaarden" className="text-gray-400 hover:text-orange-500 transition-colors">Algemene Voorwaarden</a></li>
						</ul>
					</div>
					<div>

						<h3 className="text-lg font-semibold mb-6">Contact Info</h3>
						<ul className="space-y-4 text-gray-400">
							<li>Workum Buterikkers 33</li>
							<li>info@VoedingsCoach.nl</li>
							<li>KVK: 96951362</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
					<p>&copy; 2025 Voedings coach FRL. Alle rechten voorbehouden.</p>
				</div>
			</div>
		</footer>
	);
}