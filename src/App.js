import avatar from './images/avatar.jpg';
import cityScan from './images/CityScan.png';
import codingQuiz from './images/CodingQuiz.png';
import weatherDashboard from './images/WeatherDashboard.png';
import yourForum from './images/YourForum.png';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="background"></div>
			<div className="intro-left">
				<div className="container-fluid full-height">
					<div className="row text-center align-items-center full-height">
						<div className="col">
							<img src={avatar} alt="User avatar" className="avatar" />
							<p className="display-6">Michael Hermes</p>
							<p>Web Developer</p>
						</div>
					</div>
				</div>
			</div>
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

						<section className="projects">
							<h2 className="display-6">My projects:</h2>
							<div className="container-fluid">
								<div className="row gy-5">
									<div className="col-md-6">
										<a
											href="https://michaelhermes.github.io/City-Scan/"
											target="_blank"
											rel="noreferrer"
										>
											<img
												src={cityScan}
												alt="Screenshot of the CityScan application"
												className="img-fluid thumbnail"
											/>
										</a>
										<h3 className="project-title">
											<a
												href="https://github.com/MichaelHermes/City-Scan"
												target="_blank"
												rel="noreferrer"
											>
												City Scan
											</a>
										</h3>
										<h4>Javascript, HTML, CSS</h4>
									</div>
									<div className="col-md-6">
										<a
											href="https://pacific-journey-91002.herokuapp.com/"
											target="_blank"
											rel="noreferrer"
										>
											<img
												src={yourForum}
												alt="Screenshot of the YourForum application"
												className="img-fluid thumbnail"
											/>
										</a>
										<h3 className="project-title">
											<a
												href="https://github.com/newengood/your-forum"
												target="_blank"
												rel="noreferrer"
											>
												Your Forum
											</a>
										</h3>
										<h4>Node, Express, MySQL, MVC</h4>
									</div>
									<div className="col-md-6">
										<a
											href="https://michaelhermes.github.io/Weather-Dashboard/"
											target="_blank"
											rel="noreferrer"
										>
											<img
												src={weatherDashboard}
												alt="Screenshot of the WeatherDashboard application"
												className="img-fluid thumbnail"
											/>
										</a>
										<h3 className="project-title">
											<a
												href="https://github.com/MichaelHermes/Weather-Dashboard"
												target="_blank"
												rel="noreferrer"
											>
												Weather Dashboard
											</a>
										</h3>
										<h4>Javascript, HTML, CSS</h4>
									</div>
									<div className="col-md-6">
										<a
											href="https://michaelhermes.github.io/coding-quiz/"
											target="_blank"
											rel="noreferrer"
										>
											<img
												src={codingQuiz}
												alt="Screenshot of the CodingQuiz application"
												className="img-fluid thumbnail"
											/>
										</a>
										<h3 className="project-title">
											<a
												href="https://github.com/MichaelHermes/coding-quiz"
												target="_blank"
												rel="noreferrer"
											>
												Coding Quiz
											</a>
										</h3>
										<h4>Javascript, HTML, CSS</h4>
									</div>
								</div>
							</div>
						</section>

						<footer className="text-center text-lg-start bg-light text-muted">
							<section>
								<div className="container text-center text-md-start mt-5">
									<div className="row mt-3">
										<div className="col mx-auto mb-md-0 mb-4">
											<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
											<p>
												<i className="fas fa-home me-3"></i> Snohomish, WA 98296
											</p>
											<p>
												<a
													href="mailto:mikehermes87@gmail.com"
													target="_blank"
													className="text-reset"
													rel="noreferrer"
												>
													<i className="fas fa-envelope me-3"></i>
												</a>
												mikehermes87@gmail.com
											</p>
											<p>
												<i className="fas fa-phone me-3"></i>425.807.0713
											</p>
											<p>
												<a
													href="https://drive.google.com/uc?id=1lm_bqgI1GhYjmevenv3AQn8FUxexRUih&export=download"
													target="_blank"
													className="text-reset"
													rel="noreferrer"
												>
													<i className="fas fa-download me-3"></i>
												</a>
												Resume
											</p>
										</div>
									</div>
								</div>
								<div className="d-flex justify-content-center p-4 border-top">
									<a
										href="https://www.linkedin.com/in/michaeljhermes/"
										target="_blank"
										className="me-4 text-reset"
										rel="noreferrer"
									>
										<i className="fab fa-linkedin"></i>
									</a>
									<a
										href="https://github.com/MichaelHermes"
										target="_blank"
										className="me-4 text-reset"
										rel="noreferrer"
									>
										<i className="fab fa-github"></i>
									</a>
								</div>
							</section>
						</footer>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
