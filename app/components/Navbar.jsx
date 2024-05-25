import React from "react";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image
					src="/assets/logo.png"
					width={100}
					height={100}
				/>
				<a
					href="#"
					target="_blank">
					Reza Buzarjemehri
				</a>
			</div>
			<ul>
				<li>
					<a href="#main">Home</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#about">About Me</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
			</ul>
			<div>
				<button style={{ marginRight: "10px" }}>Download Resume</button>
				<button>Contact Me</button>
			</div>
			<button
				id="menuButton"
				onclick={openMenu()}>
				<i className="bx open bx-menu"></i>
			</button>
		</nav>
	);
};

const openMenu = () => {
	// const nav = document.querySelector("nav");
	// nav.classList.toggle("open");
};

export default Navbar;
