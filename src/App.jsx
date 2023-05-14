import { Outlet } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<>
			<Header />
			<Container className="my-3">
				<Row>
					<Col sm={9}>
						<Outlet />
					</Col>
					<Col>
						<Nav />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default App;
