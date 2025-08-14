// import Article from '../components/Article';
// import Section from '../components/Section';

function Main() {
	return (
		<main className="mainContainer">
			<section id="group-1" className="parallax_group">
				<div className="parallax_layer base_layer">
					<p>Base Layer Page</p>
				</div>
				<div className="parallax_layer mid_layer">
					<p>Mid Layer Page</p>
				</div>
			</section>

			<section id="group-2" className="parallax_group">
				<div className="parallax_layer mid_layer">
					<p>Another Mid Layer Page</p>
				</div>
				<div className="parallax_layer top_layer">
					<p>Top Layer Page</p>
				</div>
			</section>
		</main>
	);
}

export default Main;
