import { useEffect, useState } from "react";

import { useTelegramUser } from "@app/providers/telegramProvider";
import { Cup } from "@entities/cup";
import { ReferralBlock } from "@entities/referralBlock";
import UserService from "@shared/api/user.service.ts";
import { Title } from "@shared/ui/title";

import styles from "./referral.module.scss";

const refList = [
	{
		name: "Ваша реферальная ссылка",
		desc: "Делитесь своей ссылкой со всеми везде и получайте бонусы за каждое их пополнение.",
		inputPlaceholder: "Реферальная ссылка",
	},
];

export const Referral = () => {
	const [referral, setReferral] = useState("");
	const [originCount, setOriginCount] = useState(0);
	const [currentLevel, setCurrentLevel] = useState(1);
	const user = useTelegramUser();

	const levelList = [
		{ title: "2.5%", desc: "От пополнения", data: "%" },
		{
			title: `${originCount}}`,
			desc: "Текущих рефералов",
			data: { originCount },
		},
		{ title: "0.00$", desc: "Мой заработок от рефералов", data: "$" },
	];

	const referrals = [
		{
			level: 1,
			count: 0,
			percent: 2.5,
			isGain: true,
		},
		{
			level: 2,
			count: 300,
			percent: 3,
			isGain: currentLevel >= 2,
		},
		{
			level: 3,
			count: 1000,
			percent: 7,
			isGain: currentLevel >= 3,
		},
		{
			level: 4,
			count: 2500,
			percent: 8,
			isGain: currentLevel >= 4,
		},
		{
			level: 5,
			count: 10000,
			percent: 10,
			isGain: currentLevel >= 5,
		},
	];

	const getReferral = async () => {
		try {
			const result = await UserService.postGetRef(user?.id ? user.id : 0);
			setOriginCount(result.data.originCount);
			setReferral(result.data.ref);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		if (originCount >= 10000) {
			setCurrentLevel(5);
		} else if (originCount >= 2500) {
			setCurrentLevel(4);
		} else if (originCount >= 1000) {
			setCurrentLevel(3);
		} else if (originCount >= 300) {
			setCurrentLevel(2);
		} else {
			setCurrentLevel(1);
		}
	}, [originCount]);

	useEffect(() => {
		getReferral();
	}, []);

	return (
		<div className={styles.referral}>
			<Title>Реферальная система</Title>
			<div className={styles.referral__level}>
				<div className={styles.referral__level_image}></div>
				<div className={styles.referral__level_holder}>
					<span className={styles.referral__level_current}>{currentLevel}</span>
					<p className={styles.referral__level_name}>Уровень</p>
				</div>
			</div>
			<p className={styles.referral__level_text}>
				Достигнув этого уровня, вы получаете:{" "}
			</p>
			<ul className={styles.referral__list}>
				{levelList.map(listLevel => (
					<li key={listLevel.title} className={styles.referral__list_item}>
						<p
							className={styles.referral__list_title}
							data-span={listLevel.data}>
							{listLevel.title}
						</p>
						<p className={styles.referral__list_desc}>{listLevel.desc}</p>
					</li>
				))}
			</ul>
			<div className={styles.referral__achivment}>
				{referrals.map(referrals => (
					<Cup
						key={referrals.level}
						countReferals={referrals.count}
						isGain={referrals.isGain}
						level={referrals.level}
						procentReplenishment={referrals.percent}
					/>
				))}
			</div>
			<div>
				{refList.map(block => (
					<ReferralBlock
						key={block.name}
						desc={block.desc}
						input={`${referral}`}
						inputPlaceholder={block.inputPlaceholder}
						title={block.name}
					/>
				))}
			</div>
		</div>
	);
};
