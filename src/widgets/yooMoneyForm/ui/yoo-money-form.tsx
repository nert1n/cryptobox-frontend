import { ChangeEvent, useState } from "react";

import PaymentForm from "@features/yooMoneyWidget/yoo-money-widget.tsx";
import styles from "@pages/refill/ui/refill.module.scss";
import PaymentService from "@shared/api/payment.service.ts";

export const YooMoneyForm = () => {
	const [amount, setAmount] = useState(0);
	const [email, setEmail] = useState("");
	const [isNext, setIsNext] = useState(false);
	const [confirmationToken, setConfirmationToken] = useState(0);
	const [paymentId, setPaymentId] = useState(0);

	const handlePayment = async () => {
		try {
			const response = await PaymentService.postCreatePaymentYooMoney(
				amount,
				email
			);

			if (
				response.data.confirmation &&
				response.data.confirmation.confirmation_token
			) {
				setConfirmationToken(response.data.confirmation.confirmation_token);
				setPaymentId(response.data.id);
				setIsNext(true);
			} else {
				setIsNext(false);
			}
		} catch (error) {
			console.error("Payment error:", error);
		}
	};

	const handleInputAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const numberValue = value ? parseFloat(value) : 0;
		setAmount(numberValue);
	};

	const handleInputEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setEmail(value);
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
							<span>(MIN: ₽150, MAX: ₽1,000,000)</span>
						</p>
						<div className={styles.input__holder}>
							<p className={styles.input__cost}>₽</p>
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
						в течение часа, напишите нам в Telegram @CryptoDropSupport, указав
						данные платежа.
					</p>
				</>
			) : (
				<PaymentForm
					confToken={confirmationToken}
					paymentId={paymentId}
					onComplete={() => alert("Payment accepted")}
				/>
			)}
		</div>
	);
};
