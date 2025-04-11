import React from 'react';

export function Hero() {
	return (
		<div id="home" className="relative">
			<img
				src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
				alt="Healthy food arrangement"
				className="w-full h-[600px] object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">Persoonlijke Voedingscoaching</h1>
					<p className="text-xl md:text-2xl mb-8 max-w-2xl">
						Ontdek een gezondere levensstijl met professionele begeleiding op maat.
						Wij helpen je bij het bereiken van jouw voedingsdoelen.
					</p>
					<a
						href="#contact"
						className="inline-block bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition-colors"
					>
						Start Je Reis
					</a>
				</div>
			</div>
		</div>
	);
}