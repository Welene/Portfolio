import Main from './components/Main';

function App() {
	return (
		<div className="parallax_wrapper">
			<header id="intro" className="parallax_group intro_screen">
				<h1 className="intro_screen__title">Helene Theodorsen</h1>
			</header>
			<Main />

			<footer id="outro" className="parallax_group outro_screen">
				<p>Thank you for scrolling!</p>
			</footer>
		</div>
	);
}

export default App;
