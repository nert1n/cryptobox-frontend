import Layout from "@app/layout";
import { MainLayout } from "@app/layout/mainLayout";
import { FaqPage } from "@pages/faq";
import { MainPage } from "@pages/main";
import { SignInPage } from "@pages/sign-in";
import { SignUpPage } from "@pages/sign-up";

export const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <div>Error page!</div>,
		children: [
			{
				element: <MainLayout />,
				children: [
					{
						path: "",
						element: <MainPage />,
					},
					{
						path: "faq",
						element: <FaqPage />,
					},
					{
						path: "sign-in",
						element: <SignInPage />,
					},
					{
						path: "sign-up",
						element: <SignUpPage />,
					},
				],
			},
		],
	},
	{
		path: "*",
		element: <div>Page not found!</div>,
	},
];
