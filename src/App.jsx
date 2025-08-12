// import TodoList from './components/TodoList';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	return (
		<div className="parallax_wrapper">
			<section id="intro" className="parallax_group intro_screen">
				<h1>Helene sitt portfolio</h1>
			</section>

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

			<section id="outro" className="parallax_group outro_screen">
				<p>Thank you for scrolling!</p>
			</section>
			{/* 
			<main className="app">
				<section className="appWrapper">
					<Header />
					<Main />
					<Footer />
				</section>
			</main> */}
		</div>
	);
}

export default App;

// function App() {
// 	let appName = 'My Todo App';

// 	return (
// 		<div className="app">
// 			<h1>{appName}</h1>
// 			<TodoList />
// 		</div>
// 	);
// }

// export default App;
