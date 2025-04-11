import React from 'react';

export function ServiceCard({ icon, title, description }) {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
			<div className="flex justify-center text-blue-600 mb-4">{icon}</div>
			<h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
}