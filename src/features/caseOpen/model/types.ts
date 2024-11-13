export interface ICoin {
	name: string;
	id: number;
	amount: number;
	cost: number;
	network: string;
	color: string;
}

export interface ICaseInfo {
	coins: ICoin[];
}
