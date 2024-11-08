import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import PaymentService from "@shared/api/payment.service.ts";
import { Title } from "@shared/ui/title";

import styles from "./success.module.scss";

export const Success = () => {
	const router = useNavigate();
	const { search } = useLocation();

	const searchParams = new URLSearchParams(search);

	const paymentIntent = searchParams.get("payment_intent");
	const status = searchParams.get("redirect_status");

	useEffect(() => {
		const timer = setTimeout(() => {
			router("/");
		}, 5000);

		return () => clearTimeout(timer);
	}, [router]);

	useEffect(() => {
		if (paymentIntent && status === "succeeded") {
			try {
				const result = PaymentService.postSuccessPayment(paymentIntent);

				console.log(result);
			} catch (e) {
				console.log(e);
			}
		}
	}, []);

	return (
		<div className={styles.success}>
			<Title>Пополнение баланса</Title>
			<div className={styles.success__holder}>
				<img alt="Success" src="/images/success.png" />
				<h1>Баланс успешно пополнен!</h1>
				<p>
					Если у вас возникли какие нибудь проблемы, обращайтесь в тех.
					поддержку!
				</p>
			</div>
		</div>
	);
};
