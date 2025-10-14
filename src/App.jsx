import Main from './components/Main';
import React from 'react';
import Stars from './components/Stars';

function App() {
	return (
		<>
			<header id="intro" className="parallax_group intro_screen">
				<h1 className="intro_screen__title">
					Helene Theodorsens portfolio
				</h1>
			</header>
			<div className="parallax_wrapper">
				<Stars count={700} />

				<Main />
			</div>
			<footer id="outro" className="parallax_group outro_screen">
				<p>© 2025 Helene Theodorsen</p>
			</footer>

			{/* move footer inside the wrapper again if weird with scrolling */}
		</>
	);
}

export default App;
