import './IconContainer.css';
import cssIcon from '../assets/icons/css.png';
import figmaIcon from '../assets/icons/figma.png';
import gitIcon from '../assets/icons/github.png';
import htmlIcon from '../assets/icons/html.png';
import jsIcon from '../assets/icons/javascript.png';
import mongoIcon from '../assets/icons/mongodb.png';
import nodeIcon from '../assets/icons/nodejs.png';
import reactIcon from '../assets/icons/react.png';
import vscIcon from '../assets/icons/vscode.png';

function IconContainer() {
	return (
		<section className="icon-container">
			<figure className="icon-container__logo">
				<img
					src={cssIcon}
					alt="CSS Icon"
					className="icon-container__icon"
				/>
			</figure>
			<figure className="icon-container__logo">
				<img
					src={htmlIcon}
					alt="CSS Icon"
					className="icon-container__icon"
				/>
			</figure>
			<figure className="icon-container__logo">
				<img
					src={jsIcon}
					alt="CSS Icon"
					className="icon-container__icon"
				/>
			</figure>
			<figure className="icon-container__logo">
				<img
					src={reactIcon}
					alt="CSS Icon"
					className="icon-container__icon"
				/>
			</figure>

			<figure className="icon-container__logo">
				<img
					src={nodeIcon}
					alt="CSS Icon"
					className="icon-container__icon"
				/>
			</figure>
			<figure className="icon-container__logo">
				<img
					src={vscIcon}
					alt="CSS Icon"
					className="icon-container__icon"
				/>
			</figure>
			<figure className="icon-container__logo">
				<img
					src={figmaIcon}
					alt="CSS Icon"
					className="icon-container__icon"
				/>
			</figure>
			<figure className="icon-container__logo">
				<img
					src={mongoIcon}
					alt="CSS Icon"
					className="icon-container__icon"
				/>
			</figure>
			<figure className="icon-container__logo">
				<img
					src={gitIcon}
					alt="CSS Icon"
					className="icon-container__icon"
				/>
			</figure>
		</section>
	);
}

export default IconContainer;
