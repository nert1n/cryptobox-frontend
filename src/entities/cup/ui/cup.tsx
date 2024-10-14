import { ICup } from "@entities/cup/model/types.ts";

import styles from "./cup.module.scss";

export const Cup = ({
	countReferals,
	isGain,
	level,
	procentReplenishment,
}: ICup) => {
	return (
		<div className={`${styles.cup} ${isGain ? styles.active : ""}`}>
			<div className={styles.cup__level}>
				<span>{level}</span>
				<p>Уровень</p>
			</div>
			<p className={styles.cup__text}>
				{countReferals} рефералов нужно пригласить
			</p>
			<p className={styles.cup__description}>
				{procentReplenishment}% от пополнения счёта
			</p>
		</div>
	);
};
