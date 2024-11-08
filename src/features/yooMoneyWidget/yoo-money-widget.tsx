import { useEffect, useRef } from "react";

import PaymentService from "@shared/api/payment.service.ts";

export default function PaymentForm({
	confToken,
	onComplete,
	paymentId,
}: {
	confToken: number;
	paymentId: number;
	onComplete: () => void;
}) {
	const paymentFormRef = useRef(true);

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
			customization: {
				colors: {
					control_primary: "#2c9eff",
					background: "#363636",
				},
			},
			error_callback: function (error: Error) {
				console.log(error);
			},
		});

		checkout.on("complete", () => {
			onComplete();
			checkout.destroy();
		});

		checkout.on("success", () => {
			PaymentService.postCapturePaymentYooMoney(paymentId);
			checkout.destroy();
		});

		checkout.on("fail", () => {
			PaymentService.postCapturePaymentYooMoney(paymentId);
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
