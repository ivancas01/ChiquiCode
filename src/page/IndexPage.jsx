import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { SecondSlogan } from "../components/SecondSlogan";
import { Services } from "../components/Services";
import { Slogan } from "../components/Slogan";
import { TopBar } from "../components/TopBar";

export const IndexPage = () => {
	const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }
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
