import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { CaseOpen } from "@features/caseOpen";
import UserService from "@shared/api/user.service.ts";
import { Title } from "@shared/ui/title";

import styles from "./case.module.scss";

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

export const Case = () => {
	const [caseInfo, setCaseInfo] = useState<ICaseInfo>();
	const { pathname } = useLocation();

	const caseName = pathname.replace("/case/", "");

	const getCases = async () => {
		try {
			const result = await UserService.getCaseData(caseName);

			setCaseInfo(result.data.caseInfo);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getCases();
	}, []);

	return (
		<div className={styles.case}>
			{caseInfo ? (
				<>
					<Title>Кейс “{caseInfo.caseName}”</Title>
					<CaseOpen caseInfo={caseInfo} />
				</>
			) : (
				<Title>Кейса “{caseName}“ не существует!</Title>
			)}
		</div>
	);
};
