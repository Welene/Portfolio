import Section from '../components/Section';
import IconContainer from './IconContainer';
import Blob1 from '../assets/blobs/blob1.png';
import Blob2 from '../assets/blobs/blob2.png';
import Blob3 from '../assets/blobs/blob3.png';
import Blob4 from '../assets/blobs/blob4.png';
import Blob5 from '../assets/blobs/blob5.png';
import Blob6 from '../assets/blobs/blob6.png';
import Blob7 from '../assets/blobs/blob7.png';

const Spacer = ({ height = '1rem' }) => <div style={{ height }} />;

function Main() {
	return (
		<main className="mainContainer">
			{/* group 1 */}
			<section id="group-1" className="parallax_group">
				<div className="parallax_layer base_layer">
					<p>Base Layer Page</p>
					<section className="base_layer blob_section">
						<img
							className="blob_section__blob1"
							src={Blob1}
							alt="Background picture of a blob"
						/>
						<img
							className="blob_section__blob2"
							src={Blob2}
							alt="Background picture of a blob"
						/>
						<img
							className="blob_section__blob3"
							src={Blob3}
							alt="Background picture of a blob"
						/>
					</section>
				</div>
				<div className="parallax_layer mid_layer">
					{/* <p>Mid Layer Page</p> */}
					<Section
						title="Hej, va trevligt att se dig här!"
						text={
							<>
								Jag är en svenskinflyttad tjej från Norge sedan
								några år tillbaka.
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
				<div className="parallax_layer top_layer"></div>
			</section>

			{/* group 2 */}
			<section id="group-2" className="parallax_group">
				<div className="parallax_layer mid_layer">
					{/* <p>Another Mid Layer Page</p> */}
					<IconContainer />
				</div>
				{/* <div className="parallax_layer top_layer">
					<p className="top-layer__text">Top Layer Page</p>
				</div> */}
			</section>

			{/* group 3 */}
			<section id="group-3" className="parallax_group">
				<div className="parallax_layer base_layer">
					<p className="base-layer">Base layer group 3</p>
					<section className="base_layer blob_section-2">
						<img
							className="blob_section__blob4"
							src={Blob4}
							alt="Background picture of a blob"
						/>
						<img
							className="blob_section__blob5"
							src={Blob5}
							alt="Background picture of a blob"
						/>
						<img
							className="blob_section__blob6"
							src={Blob6}
							alt="Background picture of a blob"
						/>
						<img
							className="blob_section__blob6"
							src={Blob7}
							alt="Background picture of a blob"
						/>
					</section>
				</div>

				<div className="parallax_layer mid_layer">
					<Section
						title="Projekter"
						text={
							<>
								Nedan kan du se flera exempel på olika projekt
								jag har arbetat med under utbildningen. Jag har
								fått arbeta både självständigt & i team.
								Teamarbete har vi lagt mycket fokus på, vilket
								har gjort att jag utvecklats mycket & lärt mig
								att bli ett ännu bättre på agilt arbete!
							</>
						}
					/>
				</div>
				{/* <div className="parallax_layer top_layer">
					<p className="top-layer__text">Top Layer Page</p>
				</div> */}
			</section>
		</main>
	);
}

export default Main;
