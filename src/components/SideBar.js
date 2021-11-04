import avatar from '../images/avatar.jpg';

export default function SideBar() {
	return (
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
	);
}
