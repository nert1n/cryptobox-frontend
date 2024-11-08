import axios from "axios";

import { BACKEND_URL } from "@shared/const/originUrl/backend-url";

export default class PaymentService {
	static async postCreatePaymentYooMoney(amount: number, email: string) {
		const res = await axios.post(
			`${BACKEND_URL}/api/payments/createrubpayment`,
			{ amount: `${amount}`, email: email },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postCapturePaymentYooMoney(id: number) {
		const res = await axios.post(
			`${BACKEND_URL}/api/payments/capturerubpayment`,
			{ paymentId: id },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postCreatePaymentStripe(amount: number, email: string) {
		const res = await axios.post(
			`${BACKEND_URL}/api/payments/createstripepayment`,
			{
				amount: amount,
				currency: "usd",
				email: email,
				userId: 6822709019,
			},
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postSuccessPayment(paymentIntent: string) {
		const res = await axios.post(
			`${BACKEND_URL}/api/payments/updatestripepayment`,
			{ paymentId: paymentIntent, email: "dymufa@gmail.com" },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
}
