import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { FormEvent } from "react";

export const StripeWidget = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!stripe || !elements) return;

		const cardElement = elements.getElement(CardElement);
		if (!cardElement) return;

		const { error, paymentIntent } = await stripe.confirmCardPayment(
			"your-client-secret",
			{
				payment_method: {
					card: cardElement,
				},
			}
		);

		if (error) {
			console.error(error);
		} else {
			console.log(paymentIntent);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement />
			<button disabled={!stripe} type="submit">
				Оплатити
			</button>
		</form>
	);
};
