"use client"
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from '@/app/components/Navigation';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Footer } from '@/app/components/Footer';

const blogPosts = {
	'gezond-eten-basis': {
		title: 'Gezond Eten: De Basis van een Vitaal Leven',
		date: '15 maart 2025',
		category: 'Voeding',
		image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80',
		content: `
      <h2>De basis van gezonde voeding</h2>
      <p>Een gezond voedingspatroon is de basis voor een vitaal leven. Het gaat niet alleen om wat je eet, maar ook om hoe en wanneer je eet. In dit artikel bespreken we de fundamentele principes van gezonde voeding.</p>

      <h3>1. Balans in voedingsstoffen</h3>
      <p>Een evenwichtig voedingspatroon bevat de juiste verhouding:</p>
      <ul>
        <li>Koolhydraten voor energie</li>
        <li>Eiwitten voor spieropbouw</li>
        <li>Gezonde vetten voor orgaanfunctie</li>
        <li>Vitaminen en mineralen voor weerstand</li>
      </ul>

      <h3>2. Portiegrootte en timing</h3>
      <p>Leer je lichaam kennen en herken echte hongersignalen. Verdeel je maaltijden regelmatig over de dag en luister naar je verzadigingsgevoel.</p>

      <h3>3. Praktische tips</h3>
      <ul>
        <li>Eet veel groenten en fruit</li>
        <li>Kies voor volkoren producten</li>
        <li>Varieer met eiwitbronnen</li>
        <li>Drink voldoende water</li>
      </ul>

      <h2>Conclusie</h2>
      <p>Gezond eten hoeft niet ingewikkeld te zijn. Begin met kleine aanpassingen en bouw dit geleidelijk op voor een duurzaam resultaat.</p>
    `
	},
	'mindful-eten': {
		title: 'Mindful Eten: De Sleutel tot Gewichtsbeheersing',
		date: '10 maart 2025',
		category: 'Leefstijl',
		image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&q=80',
		content: `
      <h2>Wat is mindful eten?</h2>
      <p>Mindful eten is een bewuste manier van eten waarbij je volledig aanwezig bent bij je maaltijd. Het helpt je om beter te luisteren naar je lichaam en gezondere keuzes te maken.</p>

      <h3>1. De principes van mindful eten</h3>
      <ul>
        <li>Eet zonder afleiding</li>
        <li>Kauw bewust en langzaam</li>
        <li>Herken honger- en verzadigingssignalen</li>
        <li>Geniet van elke hap</li>
      </ul>

      <h3>2. Voordelen voor gewichtsbeheersing</h3>
      <p>Door mindful te eten:</p>
      <ul>
        <li>Voorkom je overeten</li>
        <li>Verbetert je spijsvertering</li>
        <li>Maak je bewustere voedingskeuzes</li>
        <li>Ontwikkel je een gezondere relatie met eten</li>
      </ul>

      <h2>Praktische oefeningen</h2>
      <p>Begin met deze simpele oefeningen:</p>
      <ul>
        <li>Eet zonder telefoon of tv</li>
        <li>Neem tijd voor je maaltijd</li>
        <li>Proef bewust verschillende smaken</li>
        <li>Eet met aandacht en dankbaarheid</li>
      </ul>
    `
	},
	'sportvoeding': {
		title: 'Sportvoeding: Optimaliseer Je Prestaties',
		date: '5 maart 2025',
		category: 'Sport',
		image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
		content: `
      <h2>Voeding voor optimale sportprestaties</h2>
      <p>De juiste voeding kan het verschil maken tussen een goede en een uitstekende sportprestatie. Leer hoe je je voeding kunt afstemmen op je trainingsschema.</p>

      <h3>1. Voor de training</h3>
      <ul>
        <li>Timing van je maaltijd</li>
        <li>Koolhydraten voor energie</li>
        <li>Licht verteerbare voeding</li>
        <li>Voldoende hydratatie</li>
      </ul>

      <h3>2. Tijdens het sporten</h3>
      <p>Afhankelijk van de duur en intensiteit:</p>
      <ul>
        <li>Sportdranken bij lange sessies</li>
        <li>Elektrolytenbalans</li>
        <li>Energiegels wanneer nodig</li>
      </ul>

      <h3>3. Herstelvoeding</h3>
      <ul>
        <li>Eiwitten voor spierherstel</li>
        <li>Koolhydraten aanvullen</li>
        <li>Timing van je herstelmaaltijd</li>
      </ul>

      <h2>Supplementen</h2>
      <p>Bespreek het gebruik van supplementen altijd met een professional. Basis supplementen kunnen zijn:</p>
      <ul>
        <li>Proteïne shakes</li>
        <li>BCAA's</li>
        <li>Magnesium</li>
        <li>Vitamine D</li>
      </ul>
    `
	},
	'gezonde-recepten': {
		title: 'Gezonde Recepten voor Drukke Dagen',
		date: '1 maart 2025',
		category: 'Recepten',
		image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80',
		content: `
      <h2>Snelle en gezonde maaltijden</h2>
      <p>Een druk leven hoeft gezond eten niet in de weg te staan. Met deze recepten en tips maak je snel voedzame maaltijden.</p>

      <h3>1. Voorbereiding is key</h3>
      <ul>
        <li>Meal prepping op zondag</li>
        <li>Slimme boodschappenlijst</li>
        <li>Voorraadkast essentials</li>
      </ul>

      <h3>2. Snelle ontbijtrecepten</h3>
      <p>Begin je dag goed met deze opties:</p>
      <ul>
        <li>Overnight oats met fruit</li>
        <li>Groene smoothie bowl</li>
        <li>Proteïne pannenkoeken</li>
      </ul>

      <h3>3. Lunch voor onderweg</h3>
      <ul>
        <li>Quinoa salade met gegrilde kip</li>
        <li>Wraps met hummus en groenten</li>
        <li>Buddha bowl prep</li>
      </ul>

      <h3>4. Snelle avondmaaltijden</h3>
      <p>Gezonde maaltijden in 20 minuten:</p>
      <ul>
        <li>One-pan zalm met groenten</li>
        <li>Vegetarische curry</li>
        <li>Volkoren pasta pesto</li>
      </ul>
    `
	}
};

export default function BlogPost() {
	const { id } = useParams();
	const post = id ? blogPosts[id] : null;

	if (!post) {
		return (
			<>
				<Navigation />
				<div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
					<div className="max-w-3xl mx-auto px-4">
						<h1 className="text-2xl font-bold text-gray-900">Artikel niet gevonden</h1>
						<Link href="/blog" className="text-orange-600 hover:underline mt-4 inline-block">
							Terug naar blog overzicht
						</Link>
					</div>
				</div>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Navigation />
			<article className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
				<div className="max-w-3xl mx-auto px-4">
					<Link
						href="/blog"
						className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Terug naar blog overzicht
					</Link>

					<div className="bg-white rounded-xl overflow-hidden shadow-lg">
						<img
							src={post.image}
							alt={post.title}
							className="w-full h-64 object-cover"
						/>
						<div className="p-8">
							<div className="flex items-center justify-between mb-4">
								<span className="text-sm text-gray-500">{post.date}</span>
								<span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
									{post.category}
								</span>
							</div>
							<h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
							<div
								className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-orange-600"
								dangerouslySetInnerHTML={{ __html: post.content }}
							/>
						</div>
					</div>
				</div>
			</article>
			<Footer />
		</>
	);
}