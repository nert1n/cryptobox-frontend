import { useEffect, useState } from "react";

import UserService from "@shared/api/user.service.ts";

import styles from "./stats.module.scss";

interface IStatsData {
	cases: number;
	users: number;
	paid: number;
	online: number;
}

export const Stats = () => {
	const [statsData, setStatsData] = useState<IStatsData>();

	const getStatsData = async () => {
		try {
			const result = await UserService.getStatsData();

			setStatsData(result.data.data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getStatsData();
	}, []);

	return (
		<div className={styles.stats}>
			<div className={styles.stats__holder}>
				<div className={styles.stats__element}>
					<p className={styles.stats__element_title}>
						{statsData ? statsData.cases : 0}
					</p>
					<p className={styles.stats__element_name}>Кейсы</p>
				</div>
				<div className={styles.stats__element}>
					<p className={styles.stats__element_title}>
						{statsData ? statsData.users : 0}
					</p>
					<p className={styles.stats__element_name}>Пользователи</p>
				</div>
			</div>
			<div className={styles.stats__holder}>
				<div className={styles.stats__element}>
					<p className={styles.stats__element_title}>
						{statsData ? statsData.paid : 0}$
					</p>
					<p className={styles.stats__element_name}>Выплачено</p>
				</div>
				<div className={styles.stats__element}>
					<p className={styles.stats__element_title}>
						{statsData ? statsData.online : 0}
					</p>
					<p className={styles.stats__element_name}>Онлайн</p>
				</div>
			</div>
		</div>
	);
};
