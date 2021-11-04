import Footer from './Footer';
import ProjectList from './ProjectList';

export default function PortfolioContainer() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-8 panel-right px-0">
					<section className="intro">
						<h1 className="display-4">
							Web Development Professional Portfolio
						</h1>
						<p>
							I am an aspiring web developer. I began my software development
							career in 2012, with the majority of my experience focusing
							primarily on Windows desktop applications. I am excited by the
							creative freedom that web development allows me to showcase.
						</p>
					</section>
					<ProjectList />
					<Footer />
				</div>
			</div>
		</div>
	);
}
