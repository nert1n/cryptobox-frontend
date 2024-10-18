import { IReferralBlock } from "@entities/referralBlock/model/types.ts";

import styles from "./referral-block.module.scss";

export const ReferralBlock = ({
	button = "",
	desc,
	input = "",
	inputPlaceholder = "",
	title,
}: IReferralBlock) => {
	return (
		<div className={styles.block}>
			<p className={styles.block__title}>{title}</p>
			<p className={styles.block__desc}>{desc}</p>
			<div className={styles.block__holder}>
				<input
					className={styles.block__input}
					placeholder={inputPlaceholder}
					type="text"
					value={input}
				/>
				{button !== "" && (
					<button className={styles.block__button}>{button}</button>
				)}
			</div>
		</div>
	);
};
