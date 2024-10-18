import { ChangeEvent, useState } from "react";

import UserService from "@shared/api/user.service.ts";
import { Title } from "@shared/ui/title";
import { YooMoneyWidget } from "@widgets/yooMoneyWidget";

import styles from "./refill.module.scss";

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
				<h2>Оплата через YooMoney</h2>
				<input
					placeholder="Введите сумму"
					type="number"
					value={amount}
					onChange={handleInputChange}
				/>
				<button onClick={handlePayment}>Оплатить</button>
			</div>
			{isYooMoney && <YooMoneyWidget amount={amount} />}
		</div>
	);
};
