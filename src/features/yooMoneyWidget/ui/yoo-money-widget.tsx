import { useEffect } from "react";

import { IYooMoneyWidget } from "@features/yooMoneyWidget/model/types.ts";

export const YooMoneyWidget = ({ amount }: IYooMoneyWidget) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://yookassa.ru/checkout-widget/v1/checkout-widget.js";
		script.async = true;

		script.onload = () => {
			const YooMoneyWidget = window.YooMoneyCheckoutWidget;
			if (YooMoneyWidget && YooMoneyWidget.Checkout) {
				const widget = YooMoneyWidget.Checkout({
					amount: {
						value: amount,
						currency: "RUB",
					},
					confirmation: {
						type: "redirect",
						return_url: "https://crypto-drop.netlify.app/refill/success",
					},
					capture: true,
					description: "Оплата заказа",
				});
				widget.render("#yoo-money-widget");
			} else {
				console.error("YooMoney не завантажено або Checkout недоступний");
			}
		};

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [amount]);

	return <div id="yoo-money-widget"></div>;
};
