import { useEffect } from "react";

import { IYooMoneyWidget } from "@features/yooMoneyWidget/model/types.ts";

export const YooMoneyWidget = ({ amount }: IYooMoneyWidget) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://yoomoney.ru/javascripts/checkout.js";
		script.async = true;
		script.crossOrigin = "anonymous"; // додано для кросс-доменної підтримки

		script.onload = () => {
			setTimeout(() => {
				// додано відтермінування
				if (window.YooMoney) {
					const widget = new window.YooMoney.Checkout({
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
