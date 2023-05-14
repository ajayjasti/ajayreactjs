import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import BlogPostDetail from "./components/BlogPostDetail";
import Main from "./components/Main";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <div className="h2">Not Found!</div>,
		children: [
			{
				path: "",
				element: <Main />,
			},
			{
				path: "blog/:id",
				element: <BlogPostDetail />,
				errorElement: <div className="h2">Blog Post Not Found!</div>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
