import { CaseHolder } from "@features/caseHolder";
import { Title } from "@shared/ui/title";

import styles from "./main.module.scss";

export const Main = () => {
	return (
		<div className={styles.main}>
			<Title>CASES</Title>
			<CaseHolder />
		</div>
	);
};
