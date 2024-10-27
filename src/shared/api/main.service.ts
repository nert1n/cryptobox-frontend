import axios from "axios";

import { BACKEND_URL } from "@shared/const/originUrl/backend-url";

export default class MainService {
	static async getStatsData() {
		const res = await axios.get(`${BACKEND_URL}/api/getstatsdata`, {
			withCredentials: true,
		});
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
}
