import axios from "axios";

import { BACKEND_URL } from "@shared/const/originUrl/backend-url";

export default class UserService {
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
	static async postCreatePayment(amount: number) {
		const res = await axios.post(
			`${BACKEND_URL}/api/payments/createrubpayment`,
			{ amount: amount },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
}
