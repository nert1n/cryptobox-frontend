import { useState } from "react";

import { Coin } from "@entities/coin";
import { ICoin } from "@entities/coin/model/types.ts";
import { Title } from "@shared/ui/title";
import { StripeForm } from "@widgets/stripeForm";
import { YooMoneyForm } from "@widgets/yooMoneyForm";

import styles from "./refill.module.scss";

const coins = [
	{
		coinColor: "white",
		coinCost: 32,
		coinCount: 0.012,
		coinImage: "ton",
		coinName: "TON",
	},
	{
		coinColor: "white",
		coinCost: 23,
		coinCount: 0.0324,
		coinImage: "bnb",
		coinName: "BNB",
	},
	{
		coinColor: "white",
		coinCost: 532,
		coinCount: 0.07243234,
		coinImage: "btc",
		coinName: "BTC",
	},
];

const networks = ["TON", "BNB"];

export const Refill = () => {
	const [currency, setCurrency] = useState(1);
	const [isModalSelectOpen, setIsModalSelectOpen] = useState(false);
	const [isModalNetworkOpen, setIsModalNetworkOpen] = useState(false);
	const [paymentMethodCard, setPaymentMethodCard] = useState(1);
	const [selectedNetwork, setSelectedNetwork] = useState("");
	const [coinsSelected, setCoinsSelected] = useState<ICoin[]>([]);

	const deleteOneSelectedCoin = (coinName: string) => {
		console.log(coinName);
	};

	const handleOpenSelectModal = () => {
		setIsModalSelectOpen(prev => !prev);
	};

	const handleOpenNetworkModal = () => {
		setIsModalNetworkOpen(prev => !prev);
	};

	return (
		<div className={styles.refill}>
			<Title>Пополнение баланса</Title>
			<div className={styles.refill__main}>
				<p className={styles.refill__title}>Пополнение баланса</p>
				<div className={styles.refill__holder}>
					<button
						className={`${styles.refill__select} ${paymentMethodCard === 1 ? styles.active : ""}`}
						type={"button"}
						onClick={() => setPaymentMethodCard(1)}>
						Card
					</button>
					<button
						className={`${styles.refill__select} ${paymentMethodCard === 2 ? styles.active : ""}`}
						type={"button"}
						onClick={() => setPaymentMethodCard(2)}>
						Crypto
					</button>
				</div>
				{paymentMethodCard === 1 && (
					<div className={styles.refill__holder}>
						<button
							className={`${styles.refill__select} ${currency === 1 ? styles.active : ""}`}
							type={"button"}
							onClick={() => setCurrency(1)}>
							₽ - Rubbles
						</button>
						<button
							className={`${styles.refill__select} ${currency === 2 ? styles.active : ""}`}
							type={"button"}
							onClick={() => setCurrency(2)}>
							$ - Dollars
						</button>
						<button
							className={`${styles.refill__select} ${currency === 3 ? styles.active : ""}`}
							type={"button"}
							onClick={() => setCurrency(3)}>
							€ - Euro
						</button>
					</div>
				)}
				{paymentMethodCard === 2 && (
					<div className={styles.crypto}>
						<div className={styles.crypto__holder}>
							<p className={styles.crypto__holder_title}>
								1. Выберите криптовалюту которую вы хотите вывести:
							</p>
							<div className={styles.crypto__holder_info}>
								{coinsSelected.map((coin, id) => (
									<div
										key={coin.coinCost | id}
										className={styles.crypto__holder_data}>
										<Coin
											coinColor={coin.coinColor}
											coinCost={coin.coinCost}
											coinCount={coin.coinCount}
											coinImage={coin.coinImage}
											coinName={coin.coinName}
										/>
										<button
											onClick={() => deleteOneSelectedCoin(coin.coinName)}>
											Удалить
										</button>
									</div>
								))}
								<button
									className={styles.crypto__holder_button}
									type={"button"}
									onClick={() => handleOpenSelectModal()}>
									+
								</button>
								{isModalSelectOpen && (
									<button
										className={styles.select}
										onClick={() => handleOpenSelectModal()}>
										<div className={styles.select__holder}>
											{coins.map((coin, id) => (
												<button
													key={coin.coinCost | id}
													onClick={() =>
														setCoinsSelected(prev => [...prev, coin])
													}>
													<Coin
														coinColor={coin.coinColor}
														coinCost={coin.coinCost}
														coinCount={coin.coinCount}
														coinImage={coin.coinImage}
														coinName={coin.coinName}
													/>
												</button>
											))}
										</div>
									</button>
								)}
							</div>
						</div>
						<div className={styles.crypto__holder}>
							<p className={styles.crypto__holder_title}>
								2. Информация о выводе:
							</p>
							<div className={styles.crypto__info}>
								<div className={styles.crypto__info_data}>
									<p>Сумма вывода: $5</p>
									<p>Комиссия сети: $0.5</p>
								</div>
								<div className={styles.crypto__info_cost}>
									<p>Сумма к получению</p>
									<p>$3.5</p>
								</div>
								<div className={styles.crypto__info_text}>
									<input
										className={styles.crypto__info_checkbox}
										type="checkbox"
									/>
									<p>
										Конвертировать всё в USDT&nbsp;
										<span>(более выгодно)</span>
									</p>
								</div>
								<button
									className={styles.crypto__info_modal}
									onClick={() => handleOpenNetworkModal()}>
									Сеть {selectedNetwork}
									<span
										className={`${isModalNetworkOpen ? styles.active : ""}`}>
										&gt;
									</span>
									{isModalNetworkOpen && (
										<div className={styles.modal}>
											{networks.map((network, id) => (
												<button
													key={(id + 1) | id}
													onClick={() => setSelectedNetwork(network)}>
													{network}
												</button>
											))}
										</div>
									)}
								</button>
								<div className={styles.crypto__info_text}>
									<input
										className={styles.crypto__info_checkbox}
										type="checkbox"
									/>
									<p>
										Я подтверждаю, что адрес правильный и относится к той же
										сети.
									</p>
								</div>
								<button className={styles.crypto__info_button}>Вывести</button>
							</div>
						</div>
					</div>
				)}
				{paymentMethodCard === 1 && currency === 1 && <YooMoneyForm />}
				{paymentMethodCard === 1 && currency === 2 && (
					<StripeForm value={"$"} />
				)}
				{paymentMethodCard === 1 && currency === 3 && (
					<StripeForm value={"€"} />
				)}
			</div>
		</div>
	);
};
