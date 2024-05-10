
import { Footer } from "../components/Footer";
import { TopBar } from "../components/TopBar"

export const OurTeamPage = () => {
    return (
        <div>
            <TopBar/>
            <div className="ourTeam">
                <div className="ourTeamText">
                    <h1 className="ourTeamTextH1">Transforma tus sueños en realidad digital con NOSOTROS</h1>
                    <p className="ourTeamTextP">Bienvenido a PSYCHOCODE, tu socio confiable desde Chiquinquirá para el desarrollo de software y web. Nos destacamos por nuestra pasión, innovación y la excelencia en el desarrollo de cada proyecto. Nuestro equipo altamente calificado está comprometido en brindarte soluciones digitales personalizadas que impulsarán tu éxito en línea. Con nosotros, puedes esperar calidad, creatividad y un servicio excepcional en cada paso del camino. ¡Únete a nosotros y lleva tu presencia digital al siguiente nivel!</p>
                </div>
                <div className="ourTeamBase">
                    <h1 className="ourTeamBaseH1">Nuestras bases</h1>
                    <div className="ourTeamBaseItems">
                        <div className="ourTeamBaseItemsOne">
                            <h1 className="ourTeamBaseItemsOneH1">
                                1
                            </h1>
                            <p className="ourTeamBaseItemsOneP1">
                                Evolución.
                            </p>
                            <p className="ourTeamBaseItemsOneP2">
                            Construimos el futuro a través de la innovación tecnológica, evolucionando constantemente para ofrecer soluciones digitales de vanguardia.
                            </p>
                        </div>
                        <div className="ourTeamBaseItemsOne">
                            <h1 className="ourTeamBaseItemsOneH1">
                                2
                            </h1>
                            <p className="ourTeamBaseItemsOneP1">
                                Compromiso.
                            </p>
                            <p className="ourTeamBaseItemsOneP2">
                            Nuestro compromiso es brindar soluciones digitales excepcionales, adaptadas a las necesidades cambiantes de nuestros clientes y del mercado.
                            </p>
                        </div>
                        <div className="ourTeamBaseItemsOne">
                            <h1 className="ourTeamBaseItemsOneH1">
                                3
                            </h1>
                            <p className="ourTeamBaseItemsOneP1">
                                Eficacia.
                            </p>
                            <p className="ourTeamBaseItemsOneP2">
                            Nos dedicamos a ofrecer resultados tangibles y eficaces, cumpliendo con precisión las metas y expectativas de nuestros clientes.
                            </p>
                        </div>
                        <div className="ourTeamBaseItemsOne">
                            <h1 className="ourTeamBaseItemsOneH1">
                                4
                            </h1>
                            <p className="ourTeamBaseItemsOneP1">
                                Igualdad.
                            </p>
                            <p className="ourTeamBaseItemsOneP2">
                            Promovemos la igualdad en cada proyecto, garantizando accesibilidad y equidad en nuestras soluciones tecnológicas para todos.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ourTeamPeople">
                    <h1 className="ourTeamPeopleH1">
                        Nuestro Equipo de trabajo
                    </h1>
                    <p className="ourTeamPeopleP">?</p>
                    <p className="ourTeamPeopleP2">Muy pronto los conoceras</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
