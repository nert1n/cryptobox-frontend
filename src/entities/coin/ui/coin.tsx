import { ICoin } from "@entities/coin/model/types";

import styles from "./coin.module.scss";

export const Coin = ({
	coinColor,
	coinCost,
	coinCount,
	coinImage,
	coinName,
}: ICoin) => {
	return (
		<div className={`${styles.coin} ${coinColor ? styles[coinColor] : ""}`}>
			<p className={styles.coin__cost}>${coinCost}</p>
			<img
				alt="Coin"
				className={styles.coin__image}
				src={`/images/coins/${coinImage}.png`}
			/>
			<div className={styles.coin__info}>
				<p className={styles.coin__count}>{coinCount}</p>
				<p className={styles.coin__name}>{coinName}</p>
			</div>
		</div>
	);
};
