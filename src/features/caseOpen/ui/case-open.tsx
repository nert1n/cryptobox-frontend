import { useState } from "react";

import { useTelegramUser } from "@app/providers/telegramProvider";
import { Coin } from "@entities/coin";
import { ICaseOpen } from "@features/caseOpen/model/types";
import UserService from "@shared/api/user.service.ts";
import { Title } from "@shared/ui/title";

import styles from "./case-open.module.scss";

export const CaseOpen = ({ caseInfo }: ICaseOpen) => {
	const [activeNumber, setActiveNumber] = useState(1);

	const user = useTelegramUser();

	const handleSelectNumber = (number: number) => {
		setActiveNumber(number);
	};

	const openCase = async () => {
		try {
			const result = await UserService.postOpenCase(
				user?.id ? user.id : 0,
				caseInfo.caseName,
				activeNumber
			);

			if (result.data.success) {
				alert("Кейс открыт!");
			} else {
				alert("Недостаточно средств!");
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className={styles.case}>
			<div className={styles.case__open}>
				<div className={styles.case__open_holder}>
					<img
						alt="Case"
						className={styles.case__open_image}
						src={`/images/cases/${caseInfo}.png`}
					/>
				</div>
				<p className={styles.case__open_cost}>
					$ {caseInfo.caseCost * activeNumber}.00
				</p>
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
			<button
				className={`${styles.case__button} ${styles.case__button_first}`}
				onClick={() => openCase()}>
				Открыть кейс
			</button>
			<button
				className={`${styles.case__button} ${styles.case__button_second}`}
				onClick={() => openCase()}>
				Открыть быстро
			</button>
			<Title>Содержимое кейса</Title>
			<div className={styles.case__holder}>
				{caseInfo.coins.map(coin => (
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
