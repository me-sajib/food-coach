import React from 'react';

export function About() {
	return (
		<div id="about" className="py-24 bg-orange-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="order-2 lg:order-1">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-3xl transform -rotate-3"></div>
							<img
								src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
								alt="Healthy food coaching"
								className="rounded-3xl shadow-2xl relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-300"
							/>
						</div>
					</div>
					<div className="order-1 lg:order-2">
						<div className="space-y-6">
							<h2 className="text-4xl font-bold text-gray-900 mb-8">Over Ons</h2>
							<div className="space-y-6 text-lg text-gray-600">
								<p>
									Bij VoedingsCoach BMH geloven we dat goede voeding de sleutel is tot een
									gezond en energiek leven. Onze aanpak combineert wetenschappelijke inzichten
									met praktische, haalbare adviezen.
								</p>
								<p>
									We bieden persoonlijke begeleiding die verder gaat dan standaard voedingsadvies.
									Door te kijken naar jouw leefstijl, voorkeuren en doelen, creëren we samen een
									plan dat echt bij je past.
								</p>
								<p>
									Onze gediplomeerde voedingscoaches hebben jarenlange ervaring in het begeleiden
									van mensen met diverse voedingsvraagstukken. Of je nu wilt afvallen, meer energie
									wilt krijgen of gewoon gezonder wilt eten - wij staan voor je klaar.
								</p>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
}