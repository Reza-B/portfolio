import Image from "next/image";

const About = () => {
	return (
		<div
			className="about"
			id="about">
			<div className="left">
				{/* <Image
					src="/assets/header-img.png"
					width={100}
					height={400}
				/> */}
			</div>
			<div className="right">
				<h3>About Me</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
					faucibus massa sollicitudin amet augue. Nibh metus a semper purus
					mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
					adipiscing velit non nulla in amet pellentesque.
				</p>
				<p>
					Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
					eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod
					risus r.
				</p>
			</div>
		</div>
	);
};

export default About;
