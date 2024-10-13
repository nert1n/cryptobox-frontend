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
			{name}
			{cost}
		</Link>
	);
};
