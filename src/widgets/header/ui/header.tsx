import { Link } from "react-router-dom";

import { useTelegramUser } from "@app/providers/telegramProvider";
import { BurgerMenu } from "@entities/burger-menu";

import styles from "./header.module.scss";

export const Header = () => {
	const user = useTelegramUser();

	return (
		<div className={styles.header}>
			<Link to={"/"}>
				<img
					alt="Logo mobile"
					className={styles.header__image}
					src="/images/logo-mobile.png"
				/>
			</Link>
			<div className={styles.header__holder}>
				<Link className={styles.header__button} to={"/user/1"}>
					<p>{user?.first_name}</p>
					<p>ID: {user?.id}</p>
				</Link>
				<Link className={styles.header__button_refill} to={"/refill"}>
					$0
				</Link>
			</div>
			<BurgerMenu />
		</div>
	);
};
