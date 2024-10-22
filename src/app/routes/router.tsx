import Layout from "@app/layout";
import { MainLayout } from "@app/layout/mainLayout";
import { CasePage } from "@pages/case";
import { FaqPage } from "@pages/faq";
import { MainPage } from "@pages/main";
import { ProfilePage } from "@pages/profile";
import { ReferralPage } from "@pages/referral";
import { RefillPage } from "@pages/refill";
import { SuccessPage } from "@pages/success";

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
						path: "refill",
						element: <RefillPage />,
					},
					{
						path: "refill/success",
						element: <SuccessPage />,
					},
					{
						path: "user/:id",
						element: <ProfilePage />,
					},
					{
						path: "referral",
						element: <ReferralPage />,
					},
					{
						path: "case/:id",
						element: <CasePage />,
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
