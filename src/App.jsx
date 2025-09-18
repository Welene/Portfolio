import Main from './components/Main';
import React from 'react';
import Stars from './components/Stars';

function App() {
	return (
		<div className="parallax_wrapper">
			<Stars count={100} />
			<header id="intro" className="parallax_group intro_screen">
				<h1 className="intro_screen__title">Helene Theodorsen</h1>
			</header>
			<Main />

			<footer id="outro" className="parallax_group outro_screen">
				<p>© 2025 Helene Theodorsen</p>
			</footer>
		</div>
	);
}

export default App;
