import { ChangeEvent, useState } from "react";

import { YooMoneyWidget } from "@features/yooMoneyWidget";
import styles from "@pages/refill/ui/refill.module.scss";
import PaymentService from "@shared/api/payment.service.ts";

export const YooMoneyForm = () => {
	const [amount, setAmount] = useState(0);
	const [isNext, setIsNext] = useState(false);

	const handlePayment = async () => {
		try {
			const response = await PaymentService.postCreatePaymentYooMoney(amount);

			if (
				response.data.confirmation &&
				response.data.confirmation.confirmation_url
			) {
				setIsNext(true);
			} else {
				setIsNext(false);
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
		<div>
			<p className={styles.refill__desc}>
				ВАЖНО! Оплата должна проходить строго через сайт и необходимо переводить
				ровно ту сумму, которую сгенерирует платежная система. Если вы
				скопируете номер кошелька и решите пополнить как-то иначе или позже —
				платеж зачислен не будет.
			</p>
			<div className={styles.input}>
				<p className={styles.input__title}>
					Enter amount&nbsp;
					<span>(MIN: ₽150, MAX: ₽1,000,000)</span>
				</p>
				<div className={styles.input__holder}>
					<p className={styles.input__cost}>₽</p>
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
				течение часа, напишите нам в Telegram @CryptoDropSupport, указав данные
				платежа.
			</p>
			{isNext && <YooMoneyWidget amount={amount} />}
		</div>
	);
};
