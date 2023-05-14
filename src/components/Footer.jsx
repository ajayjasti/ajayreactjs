import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="dark bg-dark text-white">
			<Container className="py-2">
				<ul className="p-0 m-0 ms-4">
					<li>
						<Link
							to="/"
							className="h6 d-block text-decoration-none"
						>
							Home
						</Link>
					</li>
					<li>
						<a
							href="https://newsapi.org/"
							className="h6 d-block text-decoration-none"
							target="_blank"
						>
							Google News Headlines API
						</a>
					</li>
				</ul>
				<p className="text-center">&copy;Copyright 2023</p>
			</Container>
		</footer>
	);
}
