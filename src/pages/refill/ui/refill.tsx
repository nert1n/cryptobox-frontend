import { useState } from "react";

import { Title } from "@shared/ui/title";
import { StripeForm } from "@widgets/stripeForm";
import { YooMoneyForm } from "@widgets/yooMoneyForm";

import styles from "./refill.module.scss";

export const Refill = () => {
	const [isYooMoney, setIsYooMoney] = useState(true);

	return (
		<div className={styles.refill}>
			<Title>Пополнение баланса</Title>
			<div className={styles.refill__main}>
				<p className={styles.refill__title}>Пополнение баланса</p>
				<div className={styles.refill__holder}>
					<button
						className={`${styles.refill__select} ${isYooMoney ? styles.active : ""}`}
						type={"button"}
						onClick={() => setIsYooMoney(true)}>
						₽ - Rubbles
					</button>
					<button
						className={`${styles.refill__select} ${!isYooMoney ? styles.active : ""}`}
						type={"button"}
						onClick={() => setIsYooMoney(false)}>
						$ - Dollars
					</button>
				</div>
				{isYooMoney ? <YooMoneyForm /> : <StripeForm />}
			</div>
		</div>
	);
};
