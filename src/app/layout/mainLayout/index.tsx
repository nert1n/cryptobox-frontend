import { Outlet } from "react-router-dom";

import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";
import { Stats } from "@widgets/stats";

export const MainLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Stats />
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
