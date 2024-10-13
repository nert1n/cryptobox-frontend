import { useLocation } from "react-router";

import { Title } from "@shared/ui/title";

import styles from "./case.module.scss";

export const Case = () => {
	const { pathname } = useLocation();

	const caseName = pathname
		.replace("/case/", "")
		.replace(/-/g, " ")
		.toUpperCase();

	return (
		<div className={styles.case}>
			<Title>Кейс “{caseName}”</Title>
		</div>
	);
};
