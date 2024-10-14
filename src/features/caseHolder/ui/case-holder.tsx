import { Case } from "@entities/case";

import styles from "./case-holder.module.scss";

const CASES = [
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
	return (
		<div className={styles.holder}>
			{CASES.map(cases => (
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
