import Main from './components/Main';

function App() {
	return (
		<div className="parallax_wrapper">
			<header id="intro" className="parallax_group intro_screen">
				<h1 className="intro_screen__title">
					Hi, I'm a Frontend student!
				</h1>
			</header>
			<Main />

			<footer id="outro" className="parallax_group outro_screen">
				<p>Thank you for scrolling!</p>
			</footer>
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
