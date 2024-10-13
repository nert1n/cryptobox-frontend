import { Outlet } from "react-router-dom";

import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";

export const MainLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
