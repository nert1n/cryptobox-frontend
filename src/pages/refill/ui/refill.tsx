import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ChangeEvent, useState } from "react";

import UserService from "@shared/api/user.service.ts";
import { Title } from "@shared/ui/title";
import { StripeWidget } from "@widgets/stripeWidget";
import { YooMoneyWidget } from "@widgets/yooMoneyWidget";

import styles from "./refill.module.scss";

const stripePromise = loadStripe(
	"sk_test_51OkRe7KsvhRur5TZI1OezYZ1cfRffOeewWByGUPRz5sAGvjQBJY07B1iueIplIXK3VzJI27u5VDGMkqS1U7X7jia002CfMo36a"
);

export const Refill = () => {
	const [amount, setAmount] = useState(0);
	const [isYooMoney, setIsYooMoney] = useState(false);

	const handlePayment = async () => {
		try {
			const response = await UserService.postCreatePayment(amount);

			if (
				response.data.confirmation &&
				response.data.confirmation.confirmation_url
			) {
				setIsYooMoney(true);
			} else {
				setIsYooMoney(false);
			}
		} catch (error) {
			console.error("Payment error:", error);
		}
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const numberValue = value ? parseFloat(value) : 0;
		setAmount(numberValue);
	};

	return (
		<div className={styles.refill}>
			<Title>Пополнение баланса</Title>
			<div className={styles.refill__main}>
				<p className={styles.refill__title}>Пополнение баланса</p>
				<p className={styles.refill__desc}>
					ВАЖНО! Оплата должна проходить строго через сайт и необходимо
					переводить ровно ту сумму, которую сгенерирует платежная система. Если
					вы скопируете номер кошелька и решите пополнить как-то иначе или позже
					— платеж зачислен не будет.
				</p>
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
					Для пополнения баланса вы будете перемещены на сайт платежной системы.{" "}
				</p>
				<p className={styles.refill__text}>
					Баланс на сайте пополняется моментально, но если этого не произошло в
					течение часа, напишите нам в Telegram @CryptoDropSupport, указав
					данные платежа.
				</p>
			</div>
			<Elements stripe={stripePromise}>
				<StripeWidget />
			</Elements>
			{isYooMoney && <YooMoneyWidget amount={amount} />}
		</div>
	);
};
