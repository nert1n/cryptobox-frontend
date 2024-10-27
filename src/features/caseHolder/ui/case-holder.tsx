import { useEffect, useState } from "react";

import { Case } from "@entities/case";
import CasesService from "@shared/api/cases.service.ts";

import styles from "./case-holder.module.scss";

interface CaseType {
	id: number;
	cost: number;
	name: string;
	link: string;
}

const CASES: CaseType[] = [
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
		name: "POVEL DUREV",
		link: "povel-durev",
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

export const CaseHolder = () => {
	const [cases, setCases] = useState<CaseType[]>();

	const getCases = async () => {
		try {
			const result = await CasesService.getCases();

			setCases(result.data.cases);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getCases();
	}, []);

	return (
		<div className={styles.holder}>
			{cases
				? cases.map(cases => (
						<Case
							key={cases.id}
							cost={cases.cost}
							link={cases.link}
							name={cases.name}
						/>
					))
				: CASES.map(cases => (
						<Case
							key={cases.id}
							cost={cases.cost}
							link={cases.link}
							name={cases.name}
						/>
					))}
		</div>
	);
};
