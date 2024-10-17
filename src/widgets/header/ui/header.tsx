import { Link } from "react-router-dom";

import { BurgerMenu } from "@entities/burger-menu";

import styles from "./header.module.scss";

export const Header = () => {
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
					<p>nert1n</p>
					<p>ID: 19352</p>
				</Link>
				<Link className={styles.header__button_refill} to={"/faq"}>
					$0
				</Link>
			</div>
			<BurgerMenu />
		</div>
	);
};
