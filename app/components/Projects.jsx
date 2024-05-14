import React from "react";

const Projects = () => {
	return (
		<div
			className="portfolio"
			id="projects">
			<div className="header">
				<div className="info">
					<h3>Recent Projects</h3>
				</div>
			</div>
			<div className="portfo-items">
				<div className="item">
					<img src="assets/sc-1.jpg" />
					<div className="info">
						<h4>Project 1</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros.
						</p>
					</div>
				</div>
				<div className="item">
					<img src="assets/sc-2.jpg" />
					<div className="info">
						<h4>Project 2</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros.
						</p>
					</div>
				</div>
				<div className="item">
					<img src="assets/sc-3.jpg" />
					<div className="info">
						<h4>Project 3</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
