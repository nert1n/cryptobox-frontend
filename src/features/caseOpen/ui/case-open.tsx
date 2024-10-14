import { useState } from "react";

import { Coin } from "@entities/coin";
import { ICaseOpen } from "@features/caseOpen/model/types";
import { Title } from "@shared/ui/title";

import styles from "./case-open.module.scss";

const coins = [
	{ name: "ETH", cost: 128.46, image: "eth", count: 0.05, color: "blue" },
	{ name: "SOL", cost: 1.54, image: "sol", count: 0.01, color: "purple" },
];

export const CaseOpen = ({ caseName }: ICaseOpen) => {
	const [activeNumber, setActiveNumber] = useState(1);
	const cost = 14;

	const handleSelectNumber = (number: number) => {
		setActiveNumber(number);
	};

	return (
		<div className={styles.case}>
			<div className={styles.case__open}>
				<div className={styles.case__open_holder}>
					<img
						alt="Case"
						className={styles.case__open_image}
						src={`/images/cases/${caseName}.png`}
					/>
				</div>
				<p className={styles.case__open_cost}>$ {cost * activeNumber}.00</p>
			</div>
			<div className={styles.case__count}>
				<p className={styles.case__count_title}>Открыть раз</p>
				<div className={styles.case__count_holder}>
					<button
						className={`${styles.case__count_select} ${activeNumber === 1 ? styles.active : ""}`}
						type={"button"}
						onClick={() => handleSelectNumber(1)}>
						x1
					</button>
					<button
						className={`${styles.case__count_select} ${activeNumber === 2 ? styles.active : ""}`}
						type={"button"}
						onClick={() => handleSelectNumber(2)}>
						x2
					</button>
					<button
						className={`${styles.case__count_select} ${activeNumber === 3 ? styles.active : ""}`}
						type={"button"}
						onClick={() => handleSelectNumber(3)}>
						x3
					</button>
					<button
						className={`${styles.case__count_select} ${activeNumber === 4 ? styles.active : ""}`}
						type={"button"}
						onClick={() => handleSelectNumber(4)}>
						x4
					</button>
					<button
						className={`${styles.case__count_select} ${activeNumber === 5 ? styles.active : ""}`}
						type={"button"}
						onClick={() => handleSelectNumber(5)}>
						x5
					</button>
					<button
						className={`${styles.case__count_select} ${activeNumber === 10 ? styles.active : ""}`}
						type={"button"}
						onClick={() => handleSelectNumber(10)}>
						x10
					</button>
				</div>
			</div>
			<button className={`${styles.case__button} ${styles.case__button_first}`}>
				Открыть кейс
			</button>
			<button
				className={`${styles.case__button} ${styles.case__button_second}`}>
				Открыть быстро
			</button>
			<Title>Содержимое кейса</Title>
			<div className={styles.case__holder}>
				{coins.map(coin => (
					<Coin
						key={coin.name}
						coinColor={coin.color}
						coinCost={coin.cost}
						coinCount={coin.count}
						coinImage={coin.image}
						coinName={coin.name}
					/>
				))}
			</div>
		</div>
	);
};
