import React from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import RequestForm from "./components/RequestForm";

function App() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			<Hero />
			<RequestForm />
			<Services />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
