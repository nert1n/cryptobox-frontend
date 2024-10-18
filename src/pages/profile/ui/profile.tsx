import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import UserService from "@shared/api/user.service.ts";
import { Title } from "@shared/ui/title";

import styles from "./profile.module.scss";

export const Profile = () => {
	const [referral, setReferral] = useState(null);

	const getReferral = async () => {
		try {
			const result = await UserService.postGetRef(6822709019);
			setReferral(result.data.ref);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getReferral();
	}, []);

	return (
		<div className={styles.profile}>
			<Title>Профиль</Title>
			<div className={styles.profile__main}>
				<div className={styles.profile__image}>
					<img alt="#" src="#" />
				</div>
				<p className={styles.profile__name}>NERT1N</p>
				<div className={styles.profile__holder}>
					<p className={styles.profile__balance}>
						Баланс:
						<span>$0</span>
					</p>
					<Link className={styles.profile__balance_plus} to={"/referral"}>
						<svg
							fill="none"
							height="12"
							viewBox="0 0 12 12"
							width="12"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0.900006 5.97238C0.898575 6.3085 1.15275 6.59075 1.48725 6.62436L1.4872 6.62486H1.49724H10.4475C10.8079 6.62486 11.1 6.33274 11.1 5.97238C11.1 5.61202 10.8079 5.31989 10.4475 5.31989H1.49724V5.31939L1.48725 5.32039C1.15275 5.35401 0.898575 5.63626 0.900006 5.97238ZM0.900006 5.97238C0.900007 5.97221 0.900007 5.97204 0.900008 5.97188L1.00001 5.97238L0.900008 5.97288C0.900007 5.97271 0.900007 5.97254 0.900006 5.97238Z"
								fill="white"
								stroke="#68A6FF"
								strokeWidth="0.2"></path>{" "}
							<path
								d="M5.97241 0.900006C5.63629 0.898575 5.35404 1.15275 5.32042 1.48725L5.31992 1.4872V1.49724V10.4475C5.31992 10.8079 5.61205 11.1 5.97241 11.1C6.33277 11.1 6.62489 10.8079 6.62489 10.4475V1.49724H6.6254L6.62439 1.48725C6.59078 1.15275 6.30853 0.898575 5.97241 0.900006ZM5.97241 0.900006C5.97257 0.900007 5.97274 0.900007 5.97291 0.900008L5.97241 1.00001L5.97191 0.900008C5.97207 0.900007 5.97224 0.900007 5.97241 0.900006Z"
								fill="white"
								stroke="#68A6FF"
								strokeWidth="0.2"></path>
						</svg>
					</Link>
				</div>
				<div className={styles.profile__cases}>
					<img alt="Case" src="/images/case.svg" />
					<div className={styles.profile__text}>
						<p>_</p>
						<p>КЕЙСОВ</p>
					</div>
				</div>
				<div className={styles.referral}>
					<p className={styles.referral__title}>Ваша реферальная ссылка</p>
					<p className={styles.referral__text}>
						Делитесь своей ссылкой со всеми везде и получайте бонусы за каждое
						их пополнение.
					</p>
					<input
						className={styles.referral__input}
						type="text"
						value={`${referral}`}
					/>
					<Link className={styles.referral__link} to={"/referral"}>
						Зарабатывать
					</Link>
				</div>
			</div>
		</div>
	);
};
