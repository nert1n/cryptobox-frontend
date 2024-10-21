import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ChangeEvent, useState } from "react";

import { StripeWidget } from "@features/stripeWidget";
import styles from "@pages/refill/ui/refill.module.scss";
import UserService from "@shared/api/user.service.ts";

const stripePromise = loadStripe(
	"pk_test_51OkRe7KsvhRur5TZI1OezYZ1cfRffOeewWByGUPRz5sAGvjQBJY07B1iueIplIXK3VzJI27u5VDGMkqS1U7X7jia002CfMo36a"
);

export const StripeForm = () => {
	const [amount, setAmount] = useState(0);
	const [isNext, setIsNext] = useState(false);
	const [secret, setSecret] = useState("");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const numberValue = value ? parseFloat(value) : 0;
		setAmount(numberValue);
	};

	const handlePayment = async () => {
		try {
			const response = await UserService.postCreatePaymentStripe(amount);
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

	const options = {
		clientSecret: secret,
	};

	return (
		<div>
			<p className={styles.refill__desc}>
				ВАЖНО! Оплата должна проходить строго через сайт и необходимо переводить
				ровно ту сумму, которую сгенерирует платежная система.
			</p>

			{!isNext ? (
				<>
					<div className={styles.input}>
						<p className={styles.input__title}>
							Enter amount&nbsp;
							<span>(MIN: $1.5, MAX: $10,000)</span>
						</p>
						<div className={styles.input__holder}>
							<p className={styles.input__cost}>$</p>
							<input
								className={styles.input__text}
								placeholder="Введите сумму"
								type="number"
								value={amount}
								onChange={handleInputChange}
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
						в течение часа, напишите нам в Telegram @CryptoDropSupport.
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
