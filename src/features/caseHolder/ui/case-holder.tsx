import { useEffect, useState } from "react";

import { Case } from "@entities/case";
import CasesService from "@shared/api/cases.service.ts";
import { CASES, CaseType } from "@shared/const/cases.ts";

import styles from "./case-holder.module.scss";

export const CaseHolder = () => {
	const [cases, setCases] = useState<CaseType[]>();

	const getCases = async () => {
		try {
			const result = await CasesService.getCases();
			console.log(result);
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
