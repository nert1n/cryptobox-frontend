import axios from "axios";

import { BACKEND_URL } from "@shared/const/originUrl/backend-url";

export default class CasesService {
	static async getCases() {
		const res = await axios.get(`${BACKEND_URL}/api/cases/getcasesamount`);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async getCaseData(name: string) {
		const res = await axios.post(
			`${BACKEND_URL}/api/cases/getcase`,
			{ tableName: name },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postGetOpenedCases(chatId: number) {
		const res = await axios.post(
			`${BACKEND_URL}/api/cases/getamountfromcase`,
			{ tableName: chatId },
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
}
