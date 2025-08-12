import './Article.css';

function Article({ text, title }) {
	// props so that you can have different and unique text on each of the Articles in Section.jsx
	return (
		<article className="article">
			<h2 className="articleTitle">{title}</h2>
			<p className="articleText">{text}</p>
		</article>
	);
}

export default Article;
