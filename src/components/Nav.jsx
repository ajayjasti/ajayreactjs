import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import getNews from "../api/getNews";

export default function Nav() {
	const [news, setNews] = useState([]);
	const pageRef = useRef(1);

	const updateNews = useCallback(() => {
		getNews(pageRef.current).then(setNews).catch(console.log);
		pageRef.current++;
	}, []);

	useEffect(() => {
		updateNews();

		const interval = setInterval(() => {
			updateNews();
		}, 60000); // update news after every 60000ms( 60sec )

		return () => clearInterval(interval); // clean up when component is unmounted
	}, []);

	return (
		<nav id="nav" className="bg-light h-full p-3 rounded">
			<Link to="/" className="text-decoration-none">
				&larr; Home
			</Link>
			<h3>News</h3>
			<div className="d-flex flex-column gap-2">
				{news.map((item, index) => (
					<a
						key={index}
						href={item.url}
						className="h6 d-block text-decoration-none"
						target="_blank"
					>
						{item.title}
					</a>
				))}
			</div>
		</nav>
	);
}
