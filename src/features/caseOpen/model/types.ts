interface ICoin {
	name: string;
	cost: number;
	image: string;
	count: number;
	color: string;
}

interface ICaseInfo {
	caseName: string;
	caseCost: number;
	coins: ICoin[];
}

export interface ICaseOpen {
	caseInfo: ICaseInfo;
}
