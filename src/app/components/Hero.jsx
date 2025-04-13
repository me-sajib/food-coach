import React from 'react';

export function Hero() {
	return (
		<div id="home" className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<h1 className="text-5xl md:text-6xl font-bold text-gray-900">
							<span className="text-orange-600">Gezond leven</span> begint met goede voeding
						</h1>
						<p className="text-xl text-gray-600 max-w-2xl">
							Ontdek hoe persoonlijke voedingscoaching je kan helpen om je doelen te bereiken en een gezondere levensstijl te ontwikkelen.
						</p>
						<div className="flex flex-wrap gap-4">
							<a
								href="#contact"
								className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
							>
								Start Je Reis
							</a>
							<a
								href="#services"
								className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border-2 border-orange-600"
							>
								Onze Diensten
							</a>
						</div>
					</div>
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-3xl transform rotate-3"></div>
						<img
							src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80"
							alt="Healthy food preparation"
							className="rounded-3xl shadow-2xl relative z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-300"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}