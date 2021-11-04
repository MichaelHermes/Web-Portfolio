import Project from './Project';

export default function ProjectList() {
	return (
		<section className="projects">
			<h2 className="display-6">My projects:</h2>
			<div className="container-fluid">
				<div className="row gy-5">
					<Project name="City Scan" />
					<Project name="Your Forum" />
					<Project name="Weather Dashboard" />
					<Project name="Coding Quiz" />
				</div>
			</div>
		</section>
	);
}
