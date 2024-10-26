import axios from "axios";

import { BACKEND_URL } from "@shared/const/originUrl/backend-url";

export default class UserService {
	static async getStatsData() {
		const res = await axios.get(`${BACKEND_URL}/api/getstatsdata`, {
			withCredentials: true,
		});
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async getCases() {
		const res = await axios.get(`${BACKEND_URL}/api/getcases`, {
			withCredentials: true,
		});
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async getCaseData(name: string) {
		const res = await axios.post(
			`${BACKEND_URL}/api/getcase`,
			{ caseName: name },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postGetBalance(chatId: number) {
		const res = await axios.post(
			`${BACKEND_URL}/api/balance`,
			{ chatId: chatId },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postGetOpenedCases(chatId: number) {
		const res = await axios.post(
			`${BACKEND_URL}/api/opened`,
			{ chatId: chatId },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postOpenCase(chatId: number, caseName: string, count: number) {
		const res = await axios.post(
			`${BACKEND_URL}/api/opencase`,
			{ chatId: chatId, caseName: caseName, count: count },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postGetRef(chatId: number) {
		const res = await axios.post(
			`${BACKEND_URL}/api/ref/getref`,
			{ chatId: chatId },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
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
