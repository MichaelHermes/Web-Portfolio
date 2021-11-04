export default function Footer() {
	return (
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
	);
}
