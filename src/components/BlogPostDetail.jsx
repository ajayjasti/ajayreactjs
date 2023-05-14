import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogPost } from "../api/getBlogPosts";

export default function BlogPostDetail() {
	const [post, setPost] = useState({});
	const params = useParams();

	useEffect(() => {
		getBlogPost(params.id).then(setPost).catch(console.log);
	}, [params]);

	return (
		<div>
			<Link to="/" className="text-decoration-none">
				&larr; Back
			</Link>
			<h1>{post.title}</h1>
			<p>
				Posted by <strong>{post.author}</strong> on{" "}
				<strong>{post.date}</strong>
			</p>
			<img
				src={post.summary?.image_path}
				alt="blog image"
				className="d-block w-full"
				height="auto"
				style={{ maxHeight: 300 }}
			/>
			<p>{post.body}</p>
		</div>
	);
}
