import axios from "axios";

import { BACKEND_URL } from "@shared/const/originUrl/backend-url";

export default class UserService {
	static async postGetBalance(chatId: number) {
		const res = await axios.post(
			`${BACKEND_URL}/api/user/balance`,
			{ id: chatId },
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
}
