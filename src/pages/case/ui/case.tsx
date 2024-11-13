import { useLocation } from "react-router";

import { CaseOpen } from "@features/caseOpen";
import { Title } from "@shared/ui/title";

import styles from "./case.module.scss";

export const Case = () => {
	const { pathname } = useLocation();

	const caseName = pathname.replace("/case/", "");

	return (
		<div className={styles.case}>
			<Title>Кейс “{caseName}”</Title>
			<CaseOpen />
		</div>
	);
};
