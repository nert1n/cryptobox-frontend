import { useState } from "react";

import styles from "./burger-menu.module.scss";

export const BurgerMenu = () => {
	const [isActive, setIsActive] = useState(false);

	const handleChangeIsActive = () => {
		setIsActive(!isActive);
	};

	return (
		<button
			className={`${styles.burger__container} ${isActive ? styles.active : ""}`}
			onClick={handleChangeIsActive}>
			<div className={`${styles.burger} ${isActive ? styles.active : ""}`}>
				<span></span>
			</div>
		</button>
	);
};
