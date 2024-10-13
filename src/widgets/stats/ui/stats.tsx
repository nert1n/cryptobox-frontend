import styles from "./stats.module.scss";

export const Stats = () => {
	return (
		<div className={styles.stats}>
			<div className={styles.stats__holder}>
				<div className={styles.stats__element}>
					<p className={styles.stats__element_title}>479,317</p>
					<p className={styles.stats__element_name}>Кейсы</p>
				</div>
				<div className={styles.stats__element}>
					<p className={styles.stats__element_title}>18,661</p>
					<p className={styles.stats__element_name}>Пользователи</p>
				</div>
			</div>
			<div className={styles.stats__holder}>
				<div className={styles.stats__element}>
					<p className={styles.stats__element_title}>1873838$</p>
					<p className={styles.stats__element_name}>Выплачено</p>
				</div>
				<div className={styles.stats__element}>
					<p className={styles.stats__element_title}>25</p>
					<p className={styles.stats__element_name}>Онлайн</p>
				</div>
			</div>
		</div>
	);
};
