import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { useTelegramUser } from "@app/providers/telegramProvider";
import { Coin } from "@entities/coin";
import { ICoin } from "@features/caseOpen/model/types.ts";
import CasesService from "@shared/api/cases.service.ts";
import { CASES } from "@shared/const/cases.ts";
import { Title } from "@shared/ui/title";

import styles from "./case-open.module.scss";

export const CaseOpen = () => {
	const [activeNumber, setActiveNumber] = useState(1);
	const [coins, setCoins] = useState<ICoin[] | undefined>();

	const user = useTelegramUser();
	const { pathname } = useLocation();

	const caseName = pathname.replace("/case/", "");
	const caseNameApi = caseName.replace(/-/g, "_");

	const getCostByLink = (link: string): number | undefined => {
		const foundCase = CASES.find(caseItem => caseItem.link === link);
		return foundCase ? foundCase.cost : undefined;
	};

	const handleSelectNumber = (number: number) => {
		setActiveNumber(number);
	};

	const getCases = async () => {
		try {
			const result = await CasesService.getCaseData(caseNameApi);
			setCoins(result.data.response);
		} catch (e) {
			console.log(e);
		}
	};

	const openCase = async () => {
		try {
			const result = await CasesService.postOpenCase(
				user?.id ? user.id : 0,
				caseNameApi,
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

	useEffect(() => {
		getCases();
	}, []);

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
				<p className={styles.case__open_cost}>
					${" "}
					{getCostByLink(caseName)
						? getCostByLink(caseName)! * activeNumber
						: 0}
					.00
				</p>
			</div>
			<div className={styles.case__count}>
				<p className={styles.case__count_title}>Открыть раз</p>
				<div className={styles.case__count_holder}>
					{[1, 2, 3, 4, 5, 10].map(number => (
						<button
							key={number}
							className={`${styles.case__count_select} ${activeNumber === number ? styles.active : ""}`}
							type="button"
							onClick={() => handleSelectNumber(number)}>
							x{number}
						</button>
					))}
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
				{coins &&
					coins.map(coin => (
						<Coin
							key={coin.name}
							coinColor={coin.color}
							coinCost={coin.cost}
							coinCount={coin.amount}
							coinImage={coin.name.toLowerCase()}
							coinName={coin.name}
						/>
					))}
			</div>
		</div>
	);
};
