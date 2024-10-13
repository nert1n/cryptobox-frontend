import Layout from "@app/layout";
import { HomePage } from "@pages/home";

export const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <div>Error page!</div>,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
		],
	},
	{
		path: "*",
		element: <div>Page not found!</div>,
	},
];
