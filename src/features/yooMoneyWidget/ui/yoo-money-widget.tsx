import { useEffect } from "react";

import { IYooMoneyWidget } from "@features/yooMoneyWidget/model/types.ts";

export const YooMoneyWidget = ({ amount }: IYooMoneyWidget) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://yookassa.ru/checkout-widget/v1/checkout-widget.js";
		script.async = true;
		script.crossOrigin = "anonymous";

		script.onload = () => {
			setTimeout(() => {
				if (window.YooMoneyCheckoutWidget) {
					const widget = new window.YooMoneyCheckoutWidget.Checkout({
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
					console.error("YooMoney не завантажено");
				}
			}, 1000);
		};

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [amount]);

	return <div id="yoo-money-widget"></div>;
};
