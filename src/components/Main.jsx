import Section from '../components/Section';
import IconContainer from './IconContainer';

function Main() {
	return (
		<main className="mainContainer">
			<section id="group-1" className="parallax_group">
				<div className="parallax_layer base_layer">
					<p>Base Layer Page</p>
				</div>
				<div className="parallax_layer mid_layer">
					{/* <p>Mid Layer Page</p> */}
					<Section />
				</div>
			</section>

			<section id="group-2" className="parallax_group">
				<div className="parallax_layer mid_layer">
					{/* <p>Another Mid Layer Page</p> */}
					<IconContainer />
				</div>
				<div className="parallax_layer top_layer">
					<p className="top-layer__text">Top Layer Page</p>
				</div>
			</section>
			<section id="group-3" className="parallax_group">
				<div className="parallax_layer base_layer">
					<p className="base-layer">Base layer group 3</p>
				</div>
				<div className="parallax_layer mid_layer">
					{/* your new content here */}
					<Section />
				</div>
			</section>
		</main>
	);
}

export default Main;
