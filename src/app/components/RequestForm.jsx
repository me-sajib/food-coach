"use client"
import React, { useState } from 'react';

export default function RequestForm() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
		postalCode: '',
		city: '',
		requestType: '',
		currentDiet: '',
		healthGoals: '',
		medicalConditions: '',
		preferredContact: 'email',
		urgency: 'normal'
	});

	const requestTypes = [
		'Persoonlijk voedingsadvies',
		'Gewichtsmanagement',
		'Gezonde leefstijl coaching',
		'Sportvoeding',
		'Voeding bij medische condities',
		'Groepsworkshops',
		'Anders'
	];

	const healthGoalsList = [
		'Gewichtsverlies',
		'Spiermassa opbouwen',
		'Meer energie',
		'Betere spijsvertering',
		'Gezonder eetpatroon',
		'Sportprestaties verbeteren',
		'Anders'
	];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div className="py-16 bg-gradient-to-b from-orange-50 to-white">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">Start Je Gezonde Reis</h2>
					<p className="text-lg text-gray-600">
						Vul het onderstaande formulier in voor een persoonlijk voedingsadvies
					</p>
				</div>

				<form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Voornaam *
							</label>
							<input
								type="text"
								name="firstName"
								required
								value={formData.firstName}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Achternaam *
							</label>
							<input
								type="text"
								name="lastName"
								required
								value={formData.lastName}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								E-mail *
							</label>
							<input
								type="email"
								name="email"
								required
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Telefoonnummer *
							</label>
							<input
								type="tel"
								name="phone"
								required
								value={formData.phone}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Adres
							</label>
							<input
								type="text"
								name="address"
								value={formData.address}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Postcode
							</label>
							<input
								type="text"
								name="postalCode"
								value={formData.postalCode}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Stad
							</label>
							<input
								type="text"
								name="city"
								value={formData.city}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Type begeleiding *
							</label>
							<select
								name="requestType"
								required
								value={formData.requestType}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
							>
								<option value="">Selecteer type begeleiding</option>
								{requestTypes.map(type => (
									<option key={type} value={type}>{type}</option>
								))}
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Gezondheidsdoel *
							</label>
							<select
								name="healthGoals"
								required
								value={formData.healthGoals}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
							>
								<option value="">Selecteer je doel</option>
								{healthGoalsList.map(goal => (
									<option key={goal} value={goal}>{goal}</option>
								))}
							</select>
						</div>

						<div className="md:col-span-2">
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Huidige voedingspatroon
							</label>
							<textarea
								name="currentDiet"
								value={formData.currentDiet}
								onChange={handleChange}
								rows={3}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
								placeholder="Beschrijf kort je huidige eetgewoontes..."
							></textarea>
						</div>

						<div className="md:col-span-2">
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Medische condities of allergieën
							</label>
							<textarea
								name="medicalConditions"
								value={formData.medicalConditions}
								onChange={handleChange}
								rows={3}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
								placeholder="Vermeld relevante medische condities of allergieën..."
							></textarea>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Voorkeur contact
							</label>
							<select
								name="preferredContact"
								value={formData.preferredContact}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
							>
								<option value="email">E-mail</option>
								<option value="phone">Telefoon</option>
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Urgentie
							</label>
							<select
								name="urgency"
								value={formData.urgency}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
							>
								<option value="normal">Normaal</option>
								<option value="urgent">Urgent</option>
								<option value="very-urgent">Zeer urgent</option>
							</select>
						</div>
					</div>

					<div className="mt-8">
						<button
							type="submit"
							className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium text-lg"
						>
							Start Je Gezonde Reis
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}