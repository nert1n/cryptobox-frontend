/// <reference types="vite/client" />
declare global {
	interface Window {
		YooMoney: {
			Checkout: new (options: {
				amount: {
					value: number;
					currency: string;
				};
				confirmation: {
					type: string;
					return_url: string;
				};
				capture: boolean;
				description: string;
			}) => {
				render: (selector: string) => void;
			};
		};
	}
}

interface ImportMetaEnv {
	readonly VITE_BACKEND_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

export {};

interface TelegramWebAppUser {
	id: number;
}

interface TelegramWebApp {
	initDataUnsafe?: {
		user?: TelegramWebAppUser;
	};
}

declare global {
	interface Window {
		Telegram?: {
			WebApp?: TelegramWebApp;
		};
	}
}
