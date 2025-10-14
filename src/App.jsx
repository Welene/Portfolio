import Main from './components/Main';
import React from 'react';
import Stars from './components/Stars';
import Top from './components/Arrow/Arrow';

function App() {
	return (
		<>
			<header id="intro" className="parallax_group intro_screen">
				<h1 class="intro_screen__title">
					<span class="swoosh-text">
						Helene Theodorsens portfolio
					</span>
				</h1>
			</header>
			<div className="parallax_wrapper">
				<Stars count={700} />

				<Main />
			</div>
			<Top />
			<footer id="outro" className="parallax_group outro_screen">
				<p className="outro_screen-txt">© 2025 Helene Theodorsen</p>
			</footer>
		</>
	);
}

export default App;
