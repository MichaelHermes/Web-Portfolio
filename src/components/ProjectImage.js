import projects from '../utils/Projects';

export default function ProjectImage({ name }) {
	const { image } = projects[name];

	return (
		<img
			src={image}
			alt={`Screenshot of the ${name} application`}
			className="img-fluid thumbnail"
		/>
	);
}
