export interface CaseType {
	id: number;
	cost: number;
	name: string;
	link: string;
}

export const CASES: CaseType[] = [
	{
		id: 1,
		cost: 7,
		name: "ETH ALL IN",
		link: "eth-all-in",
	},
	{
		id: 2,
		cost: 9,
		name: "BTC ALL IN",
		link: "btc-all-in",
	},
	{
		id: 3,
		cost: 10,
		name: "PAVEL DUROV",
		link: "pavel-durov",
	},
	{
		id: 4,
		cost: 15,
		name: "PTP",
		link: "p2p",
	},
	{
		id: 5,
		cost: 20,
		name: "CRYPTO EXCHANGE",
		link: "crypto-exchange",
	},
	{
		id: 6,
		cost: 19,
		name: "SOL VS LTC",
		link: "sol-vs-ltc",
	},
];
