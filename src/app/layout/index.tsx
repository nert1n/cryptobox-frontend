import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Providers from "@app/providers";

const Layout = () => {
	return (
		<Providers>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</Providers>
	);
};

export default Layout;
