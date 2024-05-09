import { useLocation } from "react-router-dom";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { SecondSlogan } from "../components/SecondSlogan";
import { Services } from "../components/Services";
import { Slogan } from "../components/Slogan";
import { TopBar } from "../components/TopBar";
import { useEffect } from "react";

export const IndexPage = () => {
	const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollTo = params.get('scrollTo');
        if (scrollTo) {
            scrollToSection(scrollTo);
        }
    }, [location.search]);
	return (
		<div className="indexPage">
			<TopBar scrollToSection={scrollToSection}/>
			<Slogan/>
			<SecondSlogan id="secondSloganSection"/>
			<h1 className="indexPageH1">¿Que servicios ofrecemos?</h1>
			<Services/>
			<Contact id="contactSection"/>
			<Footer/>
		</div>
	);
};
