import React from 'react';

export function About() {
	return (
		<div id="about" className="py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:flex lg:items-center lg:gap-12">
					<div className="lg:w-1/2">
						<img
							src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80"
							alt="Food coaching session"
							className="rounded-lg shadow-lg"
						/>
					</div>
					<div className="lg:w-1/2 mt-8 lg:mt-0">
						<h2 className="text-3xl font-bold mb-6">Over Ons</h2>
						<div className="space-y-4 text-lg text-gray-600">
							<p>
								Bij VoedingsCoach BMH geloven we dat goede voeding de basis is voor een gezond
								en gelukkig leven. Onze aanpak is gebaseerd op wetenschappelijk onderzoek en
								jarenlange praktijkervaring in voedingscoaching.
							</p>
							<p>
								We bieden persoonlijke begeleiding die verder gaat dan alleen voedingsadvies.
								We kijken naar jouw leefstijl, gewoontes en doelen om samen een plan op te
								stellen dat bij jou past en duurzame resultaten oplevert.
							</p>
							<p>
								Onze voedingscoaches zijn gediplomeerd en hebben ruime ervaring in het begeleiden
								van mensen met verschillende voedingsvraagstukken, van gewichtsverlies tot het
								ontwikkelen van gezonde eetgewoontes.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}