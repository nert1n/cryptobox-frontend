import { Title } from "@shared/ui/title";

import styles from "./success.module.scss";

export const Success = () => {
	return (
		<div className={styles.success}>
			<Title>Пополнение баланса</Title>
			<div className={styles.success__holder}>
				<img alt="Success" src="/images/success.png" />
				<h1>Баланс успешно пополнен!</h1>
				<p>
					Если у вас возникли какие нибудь проблемы, обращайтесь в тех.
					поддержку!
				</p>
			</div>
		</div>
	);
};
