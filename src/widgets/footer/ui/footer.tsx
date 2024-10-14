import styles from "./footer.module.scss";

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<img
				alt="Site logo"
				className={styles.footer__image}
				src="/images/logo.png"
			/>
			<p className={styles.footer__terms}>
				© 2024 CryptoDrop — ловите криптовалюту с неба{" "}
			</p>
			<div className={styles.footer__text}>
				<p>На нашем сайте вы можете открыть</p>
				<p>различные криптовалютные кейсы</p>
				<p>с высокой окупаемостью.</p>
			</div>
		</div>
	);
};
