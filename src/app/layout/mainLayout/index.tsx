import { Outlet } from "react-router-dom";

import { useTelegramUser } from "@app/providers/telegramProvider";
import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";
import { Stats } from "@widgets/stats";

import styles from "./main-layout.module.scss";

export const MainLayout = () => {
	const user = useTelegramUser();

	if (user === null) {
		return (
			<main className={styles.layout}>
				<h1 className={styles.layout__telegram}>
					Вы зашли на сайт не с телеграма!
				</h1>
			</main>
		);
	}

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
