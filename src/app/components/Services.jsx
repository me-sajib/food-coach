import React from 'react';
import { Apple, Scale, Heart, Users, Calendar, LineChart as ChartLine, Utensils, BookOpen } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function Services() {
	const services = [
		{
			icon: <Utensils className="h-8 w-8" />,
			title: "Voedingsadvies",
			description: "Persoonlijk voedingsadvies afgestemd op jouw leefstijl en doelen"
		},
		{
			icon: <Scale className="h-8 w-8" />,
			title: "Gewichtsmanagement",
			description: "Begeleiding bij het bereiken en behouden van een gezond gewicht"
		},
		{
			icon: <Heart className="h-8 w-8" />,
			title: "Gezonde Leefstijl",
			description: "Tips en strategieën voor een duurzame gezonde levensstijl"
		},
		{
			icon: <Users className="h-8 w-8" />,
			title: "Groepssessies",
			description: "Interactieve workshops over voeding en gezondheid"
		},
		{
			icon: <Calendar className="h-8 w-8" />,
			title: "Maaltijdplanning",
			description: "Hulp bij het opstellen van gezonde weekmenu's"
		},
		{
			icon: <ChartLine className="h-8 w-8" />,
			title: "Voortgangsmonitoring",
			description: "Regelmatige evaluatie en bijsturing van je voedingsplan"
		},
		{
			icon: <Apple className="h-8 w-8" />,
			title: "Recepten & Tips",
			description: "Gezonde recepten en praktische voedingstips"
		},
		{
			icon: <BookOpen className="h-8 w-8" />,
			title: "Educatie",
			description: "Leer alles over voeding en een gezonde leefstijl"
		}
	];

	return (
		<div id="services" className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-4xl font-bold mb-6 text-gray-900">Onze Diensten</h2>
					<p className="text-xl text-gray-600">
						Ontdek ons uitgebreide aanbod aan voedingscoaching diensten, speciaal ontwikkeld om jou
						te helpen bij het bereiken van jouw persoonlijke gezondheidsdoelen.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, index) => (
						<div key={index} className="bg-orange-50 p-8 rounded-3xl hover:bg-orange-100 transition-colors duration-300">
							<div className="text-orange-600 mb-4">{service.icon}</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
							<p className="text-gray-600">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}