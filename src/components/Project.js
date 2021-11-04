import projects from '../utils/Projects';
import ProjectImage from './ProjectImage';

export default function Project({ name }) {
	const { gitHub, url, description } = projects[name];

	return (
		<div className="col-md-6">
			<a href={gitHub} target="_blank" rel="noreferrer">
				<ProjectImage name={name} />
			</a>
			<h3 className="project-title">
				<a href={url} target="_blank" rel="noreferrer">
					{name}
				</a>
			</h3>
			<h4>{description}</h4>
		</div>
	);
}
