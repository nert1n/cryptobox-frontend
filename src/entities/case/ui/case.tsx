import { Link } from "react-router-dom";

import styles from "./case.module.scss";

export const Case = ({
	cost,
	link,
	name,
}: {
	cost: number;
	name: string;
	link: string;
}) => {
	return (
		<Link className={styles.case} to={`case/${link}`}>
			<div className={styles["case-in"]}>
				<div className={styles["case-price"]}>
					<b>${cost}.00</b>
				</div>
				<div className={styles["case-images"]}>
					<img alt={name} src={`/images/cases/${link}.png`} />
				</div>
				<div className={styles["case-name"]}>{name}</div>
			</div>
		</Link>
	);
};
