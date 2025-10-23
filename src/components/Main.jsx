import Section from '../components/Section';
import IconContainer from './IconContainer';

import Email from '../assets/contact/email.png';
import Instagram from '../assets/contact/instagram.png';
import Linkedin from '../assets/contact/linkedin.png';

import gitIcon from '../assets/icons/github.png';
import Photo from '../assets/icons/photo.png';
import Draw from '../assets/icons/draw.png';

import { EmblaCarousel } from './EmblaCarousel';

// import photo1 from '../assets/photos/1.jpg';
// import photo2 from '../assets/photos/2.jpg';
// import photo3 from '../assets/photos/3.jpg';
// import photo11 from '../assets/photos/11.jpg';
// import photo6 from '../assets/photos/6.jpg';
// import photo7 from '../assets/photos/7.jpg';

import project1 from '../assets/projects/1.png';
import project2 from '../assets/projects/2.png';
import project3 from '../assets/projects/3.png';
import project4 from '../assets/projects/4.png';
import project5 from '../assets/projects/5.png';
import project6 from '../assets/projects/6.png';
import project1a from '../assets/projects/1a.png';

import projectA from '../assets/projects/a.png';
import projectB from '../assets/projects/b.png';
import projectC from '../assets/projects/c.png';
import projectD from '../assets/projects/d.png';

const Spacer = ({ height = '1rem' }) => <div style={{ height }} />;

const projectPhotosPhone = [
	project1,
	project2,
	project3,
	project4,
	project5,
	project6,
	project1a,
];

const projectPhotosDesktop = [projectA, projectB, projectC, projectD];

function Main() {
	return (
		<main className="mainContainer">
			{/* INTRO SECTION ----------------------------------------------------------------------------------------------------------------------------------------- */}
			<section id="group-1" className="parallax_group intro-section">
				<div className="intro-section__icons">
					<IconContainer />
				</div>
				<div className="parallax_layer top_layer">
					<Section
						title="Hej! va trevligt att se dig här"
						text={
							<>
								Jag är en norskinflyttad tjej som har bott i
								Sverige i några år.
								<Spacer height="1rem" />
								Som en kreativ själ bestämde jag mig för att
								börja på Frontendutbildningen hösten 2024, ett
								val som var 100% rätt!
								<Spacer height="1rem" />
								Jag är en positiv & glad person som gillar att
								sprida glädje.
								<Spacer height="1rem" />
								Kanske får jag chansen att skapa något &
								utvecklas vidare hos er, det skulle vara både en
								ära & en glädje!
							</>
						}
					/>
				</div>
			</section>

			{/* PROJECTS SECTION----------------------------------------------------------------------------------------------------------------------------------------- */}
			<section id="group-2" className="parallax_group project-section">
				<Section
					title="Projekter"
					text={
						<>
							Nedan kan du se exempel på projekt jag har arbetat
							med under utbildningen. Jag har fått arbeta både
							självständigt & i team. Vi har lagt mycket fokus på
							teamarbete, vilket har gjort att jag utvecklats
							mycket & lärt mig att bli ett ännu bättre på agilt
							arbete!
						</>
					}
				/>
				<div className="parallax_layer mid_layer--over">
					{/* <p>Another Mid Layer Page</p> */}
					<EmblaCarousel photos={projectPhotosDesktop} />
				</div>
				<div className="parallax_layer mid_layer--under">
					{/* <p>Another Mid Layer Page</p> */}

					<EmblaCarousel photos={projectPhotosPhone} />
				</div>
			</section>

			{/* CONTACT/INFO SECTION -----------------------------------------------------------------------------------------------------------------------------------------  */}
			<section id="group-3" className="parallax_group">
				<div className="parallax_layer mid_layer">
					<section className="other-section">
						<article className="other-section__content">
							<h3 className="other-section__heading">Annat</h3>
						</article>

						<figure className="icon-container__other">
							<div className="icon-item">
								<a
									href="https://github.com/welene"
									target="_blank">
									<img
										className="icon-container__icon--other"
										src={gitIcon}
										alt="Github icon"
									/>
								</a>
								<p className="icon-container__icon--info">
									Besök mig på Github!
								</p>
							</div>

							<div className="icon-item">
								<a
									href="https://picflow.com/a/gallery/gal_hHvASBovPKvnOhH9/designer"
									target="_blank">
									<img
										className="icon-container__icon--other"
										src={Draw}
										alt="Pencil icon"
									/>
								</a>
								<p className="icon-container__icon--info">
									Kolla min artwork portfolio!
								</p>
							</div>

							<div className="icon-item">
								<a
									href="https://picflow.com/a/gallery/ZVwlOjZ378xNh82f/designer"
									target="_blank">
									<img
										className="icon-container__icon--other"
										src={Photo}
										alt="Photography icon"
									/>
								</a>
								<p className="icon-container__icon--info">
									Eller mitt foto-portfolio!
								</p>
							</div>
						</figure>
					</section>

					<section className="contact-section">
						<article className="contact-section__content">
							<h3 className="contact-section__heading">
								Kontakt
							</h3>
							<p className="contact-section__txt">
								Hör gärna av dig till mig:
							</p>
						</article>

						<figure className="icon-container__contact">
							<a href="mailto:yourname@email.com">
								<img
									className="icon-container__icon--contact"
									src={Email}
									alt="Email icon"
								/>
							</a>
							<a
								href="https://www.instagram.com/helenetheodorsen/"
								target="_blank">
								<img
									className="icon-container__icon--contact"
									src={Instagram}
									alt="Instagram icon"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/helene-theodorsen-645a20311/"
								target="_blank">
								<img
									className="icon-container__icon--contact"
									src={Linkedin}
									alt="LinkedIn icon"
								/>
							</a>
						</figure>
					</section>
				</div>
			</section>
		</main>
	);
}

export default Main;
