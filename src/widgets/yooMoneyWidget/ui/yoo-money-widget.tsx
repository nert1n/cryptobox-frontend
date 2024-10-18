import { useEffect } from "react";

import { IYooMoneyWidget } from "@widgets/yooMoneyWidget/model/types.ts";

export const YooMoneyWidget = ({ amount }: IYooMoneyWidget) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://yoomoney.ru/javascripts/checkout.js";
		script.async = true;

		script.onload = () => {
			const widget = new window.YooMoney.Checkout({
				amount: {
					value: amount,
					currency: "RUB",
				},
				confirmation: {
					type: "redirect",
					return_url: "https://your-website.com/payment-success",
				},
				capture: true,
				description: "Оплата заказа",
			});

			widget.render("#yoo-money-widget");
		};

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [amount]);

	return <div id="yoo-money-widget"></div>;
};
