import { Services } from "../components/Services";
import { Slogan } from "../components/Slogan";
import { TopBar } from "../components/TopBar";

export const IndexPage = () => {
	return (
		<div className="indexPage">
			<TopBar/>
			<Slogan/>
			<h1 className="indexPageH1">Nuestros servicios</h1>
			<Services/>
		</div>
	);
};
