import { useEffect, useState } from "react";

import { useTelegramUserId } from "@app/providers/telegramProvider";
import { IReferralBlock } from "@entities/referralBlock/model/types.ts";
import UserService from "@shared/api/user.service.ts";

import styles from "./referral-block.module.scss";

export const ReferralBlock = ({
	desc,
	inputPlaceholder = "",
	title,
}: IReferralBlock) => {
	const [referral, setReferral] = useState(null);
	const userId = useTelegramUserId();

	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(`${referral}`);
		setCopied(true);
		setTimeout(() => setCopied(false), 1000);
	};

	const getReferral = async () => {
		if (userId) {
			try {
				const result = await UserService.postGetRef(userId);
				setReferral(result.data.ref);
			} catch (e) {
				console.log(e);
			}
		}
	};

	useEffect(() => {
		getReferral();
	}, []);

	return (
		<div className={styles.block}>
			<p className={styles.block__title}>{title}</p>
			<p className={styles.block__desc}>{desc}</p>
			<div className={styles.block__holder}>
				<input
					readOnly
					className={styles.block__input}
					placeholder={inputPlaceholder}
					type="text"
					value={copied ? "Реферальная ссылка скопирована!" : `${referral}`}
					onClick={() => handleCopy()}
				/>
			</div>
		</div>
	);
};
