import './Section.css';
import Article from '../components/Article';

function Section() {
	return (
		<section className="infoContainer">
			<Article
				title="This is me"
				text="This is a text that describes me as a person"
			/>
			<Article
				title="Skillset"
				text="This text shows what I have learned through my education so far!"
			/>
			<Article
				title="Projects"
				text="Examples of different school projects & exams I have done (pictures/screenshots or something)"
			/>
			<Article
				title="Contact"
				text="e-mail: helenetheo@live.no -- number: +47 468 78 670"
			/>
		</section>
	);
}

export default Section;
