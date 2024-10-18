import axios from "axios";

import { BACKEND_URL } from "@shared/const/originUrl/backend-url.ts";

export default class AuthService {
	static async getAuthMe() {
		const res = await axios.get(`${BACKEND_URL}/auth/me`, {
			headers: {
				Authorization: localStorage.getItem("access") ?? "",
			},
			withCredentials: true,
		});
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async getAuthRefresh() {
		const res = await axios.get(`${BACKEND_URL}/auth/refresh`, {
			withCredentials: true,
		});
		return res.data;
	}
	static async postLogin(email: string, password: string) {
		const res = await axios.post(
			`${BACKEND_URL}/auth/login`,
			{ email, password },
			{
				withCredentials: true,
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postRegistration(
		email: string,
		password: string,
		username: string
	) {
		const res = await axios.post(`${BACKEND_URL}/auth/mail`, {
			email,
			password,
			username,
		});
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postValidation(searchParams: URLSearchParams) {
		const res = await axios.post(`${BACKEND_URL}/auth/validPage`, {
			params: { access: searchParams.get("access") },
		});
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postVerify(searchParams: URLSearchParams, code: number) {
		const res = await axios.post(
			`${BACKEND_URL}/auth/verify`,
			{ code: code },
			{
				params: { access: searchParams.get("access") },
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
	static async postSetNickname(
		searchParams: URLSearchParams,
		nickname: string
	) {
		const res = await axios.post(
			`${BACKEND_URL}/auth/nickname`,
			{ nickname },
			{
				params: { access: searchParams.get("access") },
			}
		);
		return { data: res.data, status: res.status, statusText: res.statusText };
	}
}
