import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getBlogPosts from "../api/getBlogPosts";

export default function Main() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getBlogPosts().then(setPosts).catch(console.log);
	}, []);

	return (
		<main id="main" className="bg-light p-3 rounded">
			<h2>Blog Posts</h2>
			<div className="d-flex flex-column gap-3">
				{posts?.map((post, index) => (
					<BlogPost key={index} {...post} id={index + 1} />
				))}
			</div>
		</main>
	);
}

const BlogPost = ({ id, title, date, author, summary, body }) => (
	<article className="row g-3">
		<img
			src={summary.image_path}
			alt="blog image"
			className="col-3"
			height="auto"
			style={{ maxHeight: 130 }}
		/>
		<div className="col">
			<Link to={`/blog/${id}`} className="h5">
				{title}
			</Link>
			<p>
				Posted by <strong>{author}</strong> on <strong>{date}</strong>
			</p>
			<p>{summary.text}</p>
		</div>
	</article>
);
