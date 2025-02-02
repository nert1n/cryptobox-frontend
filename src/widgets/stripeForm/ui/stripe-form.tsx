import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { ChangeEvent, useState } from "react";

import { StripeWidget } from "@features/stripeWidget";
import styles from "@pages/refill/ui/refill.module.scss";
import PaymentService from "@shared/api/payment.service.ts";

const stripePromise = loadStripe(
	"pk_live_51OkRe7KsvhRur5TZCDvfyucQzqav9u8uRaYQP6UmWVVaOV5x8lUvuwgg7p9qKo5JA9Q9PtgGA3ecZ14kWMQml8Hz00rTYG9LQA"
);

export const StripeForm = ({ value }: { value: string }) => {
	const [amount, setAmount] = useState(0);
	const [email, setEmail] = useState("");
	const [isNext, setIsNext] = useState(false);
	const [secret, setSecret] = useState("");

	const handleInputAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const numberValue = value ? parseFloat(value) : 0;
		setAmount(numberValue);
	};

	const handleInputEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setEmail(value);
	};

	const handlePayment = async () => {
		try {
			let currency = "usd";
			if (value === "€") {
				currency = "eur";
			}

			const response = await PaymentService.postCreatePaymentStripe(
				amount,
				currency,
				email
			);
			if (response.data.client_secret) {
				setSecret(response.data.client_secret);
				setIsNext(true);
			} else {
				setIsNext(false);
			}
		} catch (error) {
			console.error("Payment error:", error);
		}
	};

	const options: StripeElementsOptions = {
		clientSecret: secret,
		appearance: { theme: "night" },
	};

	return (
		<div>
			<p className={styles.refill__desc}>
				ВАЖНО! Оплата должна проходить строго через сайт и необходимо переводить
				ровно ту сумму, которую сгенерирует платежная система. Если вы
				скопируете номер кошелька и решите пополнить как-то иначе или позже —
				платеж зачислен не будет.
			</p>

			{!isNext ? (
				<>
					<div className={styles.input}>
						<p className={styles.input__title}>Enter email address</p>
						<div className={styles.input__holder}>
							<input
								className={styles.input__text}
								placeholder="Введите почту"
								type="email"
								value={email}
								onChange={handleInputEmailChange}
							/>
						</div>
					</div>
					<div className={styles.input}>
						<p className={styles.input__title}>
							Enter amount&nbsp;
							<span>
								(MIN: {value}0.60, MAX: {value}10,000)
							</span>
						</p>
						<div className={styles.input__holder}>
							<p className={styles.input__cost}>{value}</p>
							<input
								className={styles.input__text}
								placeholder="Введите сумму"
								type="number"
								value={amount}
								onChange={handleInputAmountChange}
							/>
						</div>
					</div>
					<button className={styles.refill__button} onClick={handlePayment}>
						Оплатить
					</button>
					<p className={styles.refill__text}>
						Для пополнения баланса вы будете перемещены на сайт платежной
						системы.
					</p>
					<p className={styles.refill__text}>
						Баланс на сайте пополняется моментально, но если этого не произошло
						в течение часа, напишите нам в Telegram @CryptoBoxSupport.
					</p>
				</>
			) : (
				<Elements options={options} stripe={stripePromise}>
					<StripeWidget />
				</Elements>
			)}
		</div>
	);
};
