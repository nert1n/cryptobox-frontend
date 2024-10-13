import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./burger-menu.module.scss";

export const BurgerMenu = () => {
	const [isActive, setIsActive] = useState(false);

	const handleChangeIsActive = () => {
		setIsActive(!isActive);
	};

	return (
		<>
			<button
				className={`${styles.burger__container} ${isActive ? styles.active : ""}`}
				onClick={handleChangeIsActive}>
				<div className={`${styles.burger} ${isActive ? styles.active : ""}`}>
					<span></span>
				</div>
			</button>
			<nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
				<ul className={styles.nav__menu}>
					<li>
						<Link className={styles.nav__button} to="/">
							Главная
						</Link>
					</li>
					<li>
						<Link to="faq">FAQ</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};
