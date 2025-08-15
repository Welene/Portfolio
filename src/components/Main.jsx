import Section from '../components/Section';
import IconContainer from './IconContainer';
import Blob1 from '../assets/blobs/blob1.png';
import Blob2 from '../assets/blobs/blob2.png';
import Blob3 from '../assets/blobs/blob3.png';
import Blob4 from '../assets/blobs/blob4.png';
import Blob5 from '../assets/blobs/blob5.png';
import Blob6 from '../assets/blobs/blob6.png';
import Blob7 from '../assets/blobs/blob7.png';

function Main() {
	return (
		<main className="mainContainer">
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
					<Section />
				</div>
				<div className="parallax_layer top_layer"></div>
			</section>

			<section id="group-2" className="parallax_group">
				<div className="parallax_layer mid_layer">
					{/* <p>Another Mid Layer Page</p> */}
					<IconContainer />
				</div>
				{/* <div className="parallax_layer top_layer">
					<p className="top-layer__text">Top Layer Page</p>
				</div> */}
			</section>
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
					<Section />
				</div>
				{/* <div className="parallax_layer top_layer">
					<p className="top-layer__text">Top Layer Page</p>
				</div> */}
			</section>
		</main>
	);
}

export default Main;
