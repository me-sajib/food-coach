import React from 'react';
import { Utensils, Scale, Heart, Users, Calendar, LineChart as ChartLine, Apple, BookOpen } from 'lucide-react';
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
		<div id="services" className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center mb-4">Onze Diensten</h2>
				<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
					Wij bieden uitgebreide voedingscoaching en begeleiding om je te helpen bij het bereiken
					van jouw persoonlijke gezondheidsdoelen.
				</p>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, index) => (
						<ServiceCard key={index} {...service} />
					))}
				</div>
			</div>
		</div>
	);
}