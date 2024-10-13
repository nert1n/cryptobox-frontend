import { Outlet } from "react-router-dom";

import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";

export const MainLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
