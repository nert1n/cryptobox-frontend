import { useEffect, useRef } from "react";

import { useTelegramUser } from "@app/providers/telegramProvider";
import PaymentService from "@shared/api/payment.service.ts";

export default function PaymentForm({
	confToken,
	onComplete,
}: {
	confToken: number;
	onComplete: () => void;
}) {
	const paymentFormRef = useRef(true);
	const user = useTelegramUser();

	useEffect(() => {
		if (paymentFormRef.current) {
			const script = document.createElement("script");
			script.src = "https://yookassa.ru/checkout-widget/v1/checkout-widget.js";
			script.async = true;
			script.onload = initializeWidget;
			document.head.appendChild(script);
			paymentFormRef.current = false;
			return () => {
				document.head.removeChild(script);
			};
		}
	}, []);

	const initializeWidget = () => {
		const checkout = new window.YooMoneyCheckoutWidget({
			confirmation_token: confToken,
			error_callback: function (error: Error) {
				console.log(error);
			},
		});

		checkout.on("complete", () => {
			onComplete();
			checkout.destroy();
		});

		checkout.on("success", () => {
			PaymentService.postCapturePaymentYooMoney(
				confToken,
				user?.id ? `${user?.id}` : "",
				"success"
			);
			checkout.destroy();
		});

		checkout.on("fail", () => {
			PaymentService.postCapturePaymentYooMoney(
				confToken,
				user?.id ? `${user?.id}` : "",
				"failed"
			);
			checkout.destroy();
		});

		checkout.render("payment-form");
	};

	return (
		<div>
			<div id="payment-form" />
		</div>
	);
}
