import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Scroll, Shield, Clock, FileCheck } from 'lucide-react';

export default function TermsAndConditions() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			{/* Hero Section */}
			<div className="bg-orange-100 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl font-bold text-gray-900 mb-4">Algemene Voorwaarden</h1>
						<p className="text-lg text-gray-600">
							Transparant en duidelijk: onze afspraken voor een succesvolle samenwerking
						</p>
					</div>
				</div>
			</div>

			{/* Quick Info Cards */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
				<div className="grid md:grid-cols-4 gap-6">
					<div className="bg-white rounded-xl p-6 shadow-lg">
						<Scroll className="h-8 w-8 text-orange-500 mb-4" />
						<h3 className="font-semibold text-gray-900">Duidelijke Afspraken</h3>
						<p className="text-sm text-gray-600 mt-2">Heldere voorwaarden voor optimale samenwerking</p>
					</div>
					<div className="bg-white rounded-xl p-6 shadow-lg">
						<Shield className="h-8 w-8 text-orange-500 mb-4" />
						<h3 className="font-semibold text-gray-900">Privacy Gewaarborgd</h3>
						<p className="text-sm text-gray-600 mt-2">Uw gegevens zijn veilig bij ons</p>
					</div>
					<div className="bg-white rounded-xl p-6 shadow-lg">
						<Clock className="h-8 w-8 text-orange-500 mb-4" />
						<h3 className="font-semibold text-gray-900">Flexibele Planning</h3>
						<p className="text-sm text-gray-600 mt-2">Afspraken op uw tempo</p>
					</div>
					<div className="bg-white rounded-xl p-6 shadow-lg">
						<FileCheck className="h-8 w-8 text-orange-500 mb-4" />
						<h3 className="font-semibold text-gray-900">Kwaliteitsgarantie</h3>
						<p className="text-sm text-gray-600 mt-2">Professionele begeleiding</p>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-4xl mx-auto px-4 py-16">
				<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
					<div className="prose prose-orange max-w-none">
						<h2 className="text-3xl font-bold text-gray-900 mb-8">Welkom bij VoedingsCoach</h2>

						<div className="space-y-12">
							<section>
								<h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Over VoedingsCoach</h3>
								<p className="text-gray-600">
									VoedingsCoach is uw partner in gezonde voeding en leefstijl. Wij bieden professionele
									begeleiding bij het ontwikkelen van gezonde eetgewoontes en een evenwichtige leefstijl
									via persoonlijke coaching, groepssessies en online begeleiding.
								</p>
							</section>

							<section>
								<h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Onze Dienstverlening</h3>
								<div className="bg-orange-50 rounded-xl p-6">
									<ul className="list-none space-y-3">
										<li className="flex items-center text-gray-700">
											<span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
											Persoonlijke voedingsanalyse en advies
										</li>
										<li className="flex items-center text-gray-700">
											<span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
											Op maat gemaakte voedingsplannen
										</li>
										<li className="flex items-center text-gray-700">
											<span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
											Leefstijlbegeleiding
										</li>
										<li className="flex items-center text-gray-700">
											<span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
											Coaching bij gewichtsmanagement
										</li>
										<li className="flex items-center text-gray-700">
											<span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
											Groepsworkshops over gezonde voeding
										</li>
									</ul>
								</div>
							</section>

							<section>
								<h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Coaching Trajecten</h3>
								<div className="grid md:grid-cols-2 gap-6">
									<div className="bg-gray-50 rounded-xl p-6">
										<h4 className="font-semibold mb-2">Duur</h4>
										<p className="text-gray-600">3-6 maanden, flexibel in te delen</p>
									</div>
									<div className="bg-gray-50 rounded-xl p-6">
										<h4 className="font-semibold mb-2">Sessies</h4>
										<p className="text-gray-600">45-60 minuten, fysiek of online</p>
									</div>
								</div>
							</section>

							<section>
								<h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Tarieven en Betalingen</h3>
								<p className="text-gray-600">
									Onze tarieven worden vooraf duidelijk gecommuniceerd. Betaling kan per traject of per
									sessie, met mogelijkheid tot gespreide betaling in overleg. Facturen dienen binnen 14
									dagen te worden voldaan.
								</p>
							</section>

							<section>
								<h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Afspraken en Annuleringen</h3>
								<div className="bg-orange-50 rounded-xl p-6">
									<p className="text-gray-700">
										Kosteloos annuleren tot 48 uur voor de afspraak. Bij latere annulering of no-show
										wordt het volledige bedrag in rekening gebracht.
									</p>
								</div>
							</section>

							<section>
								<h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy en Bescherming</h3>
								<p className="text-gray-600">
									Uw privacy is onze prioriteit. Alle informatie wordt vertrouwelijk behandeld volgens
									de AVG-wetgeving en wordt alleen gedeeld na uw expliciete toestemming.
								</p>
							</section>

							<section>
								<h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Contactgegevens</h3>
								<div className="bg-gray-50 rounded-xl p-6">
									<div className="space-y-2 text-gray-700">
										<p>Voedings coach FRL</p>
										<p>Workum Buterikkers 33</p>
										<p>Hoofdvestiging</p>
										<p>E-mail: info@VoedingsCoach.nl</p>
										<p>KVK: 96951362</p>
									</div>
								</div>
							</section>
						</div>

						<div className="mt-12 pt-8 border-t border-gray-200">
							<p className="text-sm text-gray-500">Laatste update: maart 2025</p>
							<p className="mt-4 text-gray-600">
								Door gebruik te maken van onze diensten verklaart u zich akkoord met deze algemene voorwaarden.
								We kijken ernaar uit om u te begeleiden naar een gezondere leefstijl!
							</p>
						</div>
					</div>
				</div>
			</div>


			<Footer />
		</div>
	);
}	