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

export {};
