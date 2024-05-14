import React from "react";
import Image from "next/image";

import FrontEndIcon from "@/public/assets/front-end.png";
import BackEndIcon from "@/public/assets/back-end.png";
import Design from "@/public/assets/design.png";
import SoftSkills from "@/public/assets/soft-skills.png";

function Skills() {
	return (
		<div
			className="skills"
			id="skills">
			<h3>My Skills</h3>
			<div className="skill-items">
				<div className="item">
					<div className="icon">
						{/* <i className="bx bx-directions"> */}
						<Image
							height={30}
							src={FrontEndIcon}
						/>
						{/* </i> */}
					</div>
					<h4>{"<Front-End />"}</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique.
					</p>
				</div>
				<div className="item">
					<div className="icon">
						{/* <i className="bx bx-bookmark-heart"> */}
						<Image
							height={30}
							src={BackEndIcon}
						/>
						{/* </i> */}
					</div>
					<h4>{"<Back-End />"}</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique.
					</p>
				</div>
				<div className="item">
					<div className="icon">
						{/* <i className="bx bxl-figma"> */}
						<Image
							height={30}
							src={Design}
						/>
						{/* </i> */}
					</div>
					<h4>{"<Design />"}</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique.
					</p>
				</div>
				<div className="item">
					<div className="icon">
						{/* <i className="bx bx-code-alt"> */}
						<Image
							height={30}
							src={SoftSkills}
						/>
						{/* </i> */}
					</div>
					<h4>{"<Soft-Skills />"}</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Skills;
