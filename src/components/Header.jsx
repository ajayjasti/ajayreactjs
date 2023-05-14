import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import viteLogo from "../data/vite.svg";

export default function Header() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Link to="/" className="navbar-brand">
					<img
						alt="brand logo"
						src={viteLogo}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
					Blog Website
				</Link>
			</Container>
		</Navbar>
	);
}
