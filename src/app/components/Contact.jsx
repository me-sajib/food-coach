import React from 'react';
import { MapPin, Mail, Clock } from 'lucide-react';

export function Contact() {
	return (
		<div id="contact" className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-4xl font-bold mb-6 text-gray-900">Contact</h2>
					<p className="text-xl text-gray-600">
						Klaar om te werken aan een gezondere leefstijl? Neem contact met ons op voor een
						vrijblijvend kennismakingsgesprek.
					</p>
				</div>
				<div className="grid lg:grid-cols-2 gap-16">
					<div className="bg-orange-50 p-12 rounded-3xl">
						<div className="space-y-8">
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-gray-900">Begin Je Gezonde Reis</h3>
								<p className="text-gray-600">
									Ontdek hoe wij je kunnen helpen bij het bereiken van jouw voedingsdoelen.
									Vul het formulier in of neem direct contact met ons op.
								</p>
							</div>
							<div className="space-y-6">
								<div className="flex items-center">
									<MapPin className="h-6 w-6 text-orange-600" />
									<span className="ml-3 text-gray-600">Workum Buterikkers 33 Hoofdvestlging</span>
								</div>
								<div className="flex items-center">
									<Mail className="h-6 w-6 text-orange-600" />
									<span className="ml-3 text-gray-600">info@voedingsCoach.nl</span>
								</div>
								<div className="flex items-center">
									<Clock className="h-6 w-6 text-orange-600" />
									<span className="ml-3 text-gray-600">Maandag tot en met vrijdag, van 9:00 tot 17:00 uur</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<form className="space-y-6">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Naam</label>
								<input
									type="text"
									className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
									placeholder="Uw naam"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
								<input
									type="email"
									className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
									placeholder="uw.email@voorbeeld.nl"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Onderwerp</label>
								<input
									type="text"
									className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
									placeholder="Onderwerp van uw bericht"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Bericht</label>
								<textarea
									rows={4}
									className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
									placeholder="Schrijf uw bericht hier..."
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-orange-600 text-white py-4 px-6 rounded-xl hover:bg-orange-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
							>
								Verstuur Bericht
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}