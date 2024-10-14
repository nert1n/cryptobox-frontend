import { useState } from "react";

import { IOpenBar } from "@entities/openBar/model/types";

import styles from "./open-bar.module.scss";

export const OpenBar = ({ description, title }: IOpenBar) => {
	const [isActive, setIsActive] = useState(false);

	const handleToggle = () => {
		setIsActive(!isActive);
	};

	return (
		<div className={styles.bar}>
			<button
				className={styles.bar__title}
				type={"button"}
				onClick={() => handleToggle()}>
				{title}
			</button>
			{isActive && <p className={styles.bar__description}>{description}</p>}
		</div>
	);
};
