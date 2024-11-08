import { useState } from "react";

import { Title } from "@shared/ui/title";
import { StripeForm } from "@widgets/stripeForm";
import { YooMoneyForm } from "@widgets/yooMoneyForm";

import styles from "./refill.module.scss";

export const Refill = () => {
	const [currency, setCurrency] = useState(1);

	return (
		<div className={styles.refill}>
			<Title>Пополнение баланса</Title>
			<div className={styles.refill__main}>
				<p className={styles.refill__title}>Пополнение баланса</p>
				<div className={styles.refill__holder}>
					<button
						className={`${styles.refill__select} ${currency === 1 ? styles.active : ""}`}
						type={"button"}
						onClick={() => setCurrency(1)}>
						₽ - Rubbles
					</button>
					<button
						className={`${styles.refill__select} ${currency === 2 ? styles.active : ""}`}
						type={"button"}
						onClick={() => setCurrency(2)}>
						$ - Dollars
					</button>
					<button
						className={`${styles.refill__select} ${currency === 3 ? styles.active : ""}`}
						type={"button"}
						onClick={() => setCurrency(3)}>
						€ - Euro
					</button>
				</div>
				{currency === 1 && <YooMoneyForm />}
				{currency === 2 && <StripeForm value={"$"} />}
				{currency === 3 && <StripeForm value={"€"} />}
			</div>
		</div>
	);
};
