import { useEffect, useState } from "react";

import { Cup } from "@entities/cup";
import { ReferralBlock } from "@entities/referralBlock";
import UserService from "@shared/api/user.service.ts";
import { Title } from "@shared/ui/title";

import styles from "./referral.module.scss";

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
		isGain: false,
	},
	{
		level: 3,
		count: 1000,
		percent: 7,
		isGain: false,
	},
	{
		level: 4,
		count: 2500,
		percent: 8,
		isGain: false,
	},
	{
		level: 5,
		count: 10000,
		percent: 10,
		isGain: false,
	},
];

const levelList = [
	{ title: "2.5%", desc: "От пополнения", data: "%" },
	{ title: "0", desc: "Текущих рефералов", data: "0" },
	{ title: "0.00$", desc: "Мой заработок от рефералов", data: "$" },
];

const refList = [
	{
		name: "Ваша реферальная ссылка",
		desc: "Делитесь своей ссылкой со всеми везде и получайте бонусы за каждое их пополнение.",
		inputPlaceholder: "Реферальная ссылка",
	},
];

const currentLevel = 1;

export const Referral = () => {
	const [referral, setReferral] = useState(null);

	const getReferral = async () => {
		try {
			const result = await UserService.postGetRef(6822709019);
			setReferral(result.data);
		} catch (e) {
			console.log(e);
		}
	};

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
