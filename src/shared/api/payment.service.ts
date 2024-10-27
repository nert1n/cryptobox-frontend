import axios from "axios";

import { BACKEND_URL } from "@shared/const/originUrl/backend-url";

export default class PaymentService {
	static async postCreatePaymentYooMoney(amount: number) {
		const res = await axios.post(
			`${BACKEND_URL}/api/payments/createrubpayment`,
			{ amount: amount },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postCreatePaymentStripe(amount: number) {
		const res = await axios.post(
			`${BACKEND_URL}/api/payments/createstripepayment`,
			{ amount: amount, currency: "usd", userId: 6822709019 },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postSuccessPayment(paymentIntent: string, status: string) {
		const res = await axios.post(
			`${BACKEND_URL}/api/payments/updatestripepayment`,
			{ paymentIntent: paymentIntent, status: status },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
}
