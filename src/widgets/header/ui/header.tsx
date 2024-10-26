import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useTelegramUser } from "@app/providers/telegramProvider";
import { BurgerMenu } from "@entities/burger-menu";
import UserService from "@shared/api/user.service.ts";

import styles from "./header.module.scss";

export const Header = () => {
	const [balance, setBalance] = useState(0);

	const user = useTelegramUser();

	const getBalance = async () => {
		try {
			const result = await UserService.postGetBalance(user?.id ? user.id : 0);

			setBalance(result.data.balance);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getBalance();
	}, []);

	return (
		<div className={styles.header}>
			<Link to={"/"}>
				<img
					alt="Logo mobile"
					className={styles.header__image}
					src="/images/logo-mobile.png"
				/>
			</Link>
			<div className={styles.header__holder}>
				<Link className={styles.header__button} to={"/user/1"}>
					<p>{user?.first_name}</p>
					<p>ID: {user?.id}</p>
				</Link>
				<Link className={styles.header__button_refill} to={"/refill"}>
					${balance}
				</Link>
			</div>
			<BurgerMenu />
		</div>
	);
};
