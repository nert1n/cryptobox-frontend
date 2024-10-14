import { Cup } from "@entities/cup";
import { Title } from "@shared/ui/title";

import styles from "./referral.module.scss";

const referrals = [
	{
		level: 1,
		count: 0,
		percent: 2.5,
		isGain: true,
	},
];

export const Referral = () => {
	return (
		<div className={styles.referral}>
			<Title>Реферальная система</Title>
			<div className={styles.referral__achivment}>
				{referrals.map(referrals => (
					<Cup
						key={referrals.level}
						countReferals={referrals.count}
						isGain={referrals.isGain}
						level={referrals.level}
						procentReplenishment={referrals.percent}
					/>
				))}
			</div>
		</div>
	);
};
