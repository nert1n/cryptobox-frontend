import { OpenBar } from "@entities/openBar";
import { Title } from "@shared/ui/title";

import styles from "./faq.module.scss";

const bars = [
	{
		title: "Как пополнить баланс на сайте?",
		description:
			"Для начала авторизуйтесь в свой аккаунт, нажав на кнопку в верхнем правом углу, после этого нажмите на кнопку с балансом в правом верхнем углу. Затем в открывшемся окне введите промокод (если он у Вас имеется), а также укажите сумму пополнения. Далее Вы будете перемещены на сайт, где необходимо выбрать удобный способ оплаты, затем после успешной оплаты деньги зачислятся на Ваш баланс сайта в течение 5 минут.",
	},
	{
		title: "Как вывести криптовалюту?",
		description:
			"Вам необходимо зайти к себе в профиль и выбрать криптовалюту, которую вы хотите вывести, а затем нажать на кнопку 'ЗАБРАТЬ'. После этого необходимо выбрать сеть, в которой вы хотите получить свой выигрыш, а также ввести адрес кошелька, на который должна поступить криптовалюта. Обратите внимание: вывести криптовалюту можно только в течение 24 часов после ее получения.",
	},
	{
		title: "Я не нашел ответа на вопрос. Что делать?",
		description:
			"Если Вы не нашли ответа на свой вопрос в данном разделе, или же есть какое-нибудь предложение по сайту, то напишите нам в Telegram @CryptoBox (https://t.me/CryptoBoxSupport).",
	},
];

export const Faq = () => {
	return (
		<div className={styles.faq}>
			<Title>FAQ</Title>
			<div>
				{bars.map(bar => (
					<OpenBar
						key={bar.title}
						description={bar.description}
						title={bar.title}
					/>
				))}
			</div>
		</div>
	);
};
