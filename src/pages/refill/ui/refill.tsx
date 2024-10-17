import { Title } from "@shared/ui/title";

import styles from "./refill.module.scss";

export const Refill = () => {
	return (
		<div className={styles.faq}>
			<Title>Пополнение баланса</Title>
			<div className={styles.faq__main}></div>
		</div>
	);
};
