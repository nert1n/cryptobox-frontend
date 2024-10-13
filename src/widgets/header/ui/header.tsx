import { Link } from "react-router-dom";

import { BurgerMenu } from "@entities/burger-menu";

import styles from "./header.module.scss";

export const Header = () => {
	return (
		<div className={styles.header}>
			<Link to={"/"}>
				<img
					alt="Logo mobile"
					className={styles.header__image}
					src="/logo-mobile.png"
				/>
			</Link>
			<Link className={styles.header__button} to={"sign-in"}>
				Войти
				<svg
					fill="none"
					height="10"
					viewBox="0 0 20 10"
					width="20"
					xmlns="http://www.w3.org/2000/svg">
					<path
						clipRule="evenodd"
						d="M19.0909 3.63679H9.0904H8.99949C8.53277 1.35036 6.41055 -0.211268 4.08879 0.0232777C1.76702 0.257824 0 2.21234 0 4.54592C0 6.87951 1.76702 8.83403 4.08879 9.06857C6.41055 9.30312 8.53277 7.74149 8.99949 5.45506H9.0904H13.6361V7.27332C13.6361 7.77542 14.0431 8.18246 14.5452 8.18246C15.0473 8.18246 15.4543 7.77542 15.4543 7.27332V5.45506H17.2726V6.36419C17.2726 6.86629 17.6796 7.27332 18.1817 7.27332C18.6838 7.27332 19.0909 6.86629 19.0909 6.36419V5.45506C19.593 5.45506 20 5.04803 20 4.54592C20 4.04382 19.593 3.63679 19.0909 3.63679ZM4.54478 7.27331C3.03848 7.27331 1.81738 6.05222 1.81738 4.54592C1.81738 3.03961 3.03848 1.81852 4.54478 1.81852C6.05108 1.81852 7.27218 3.03961 7.27218 4.54592C7.27218 5.26927 6.98483 5.96299 6.47334 6.47448C5.96185 6.98596 5.26813 7.27331 4.54478 7.27331Z"
						fill="white"
						fillRule="evenodd"></path>
				</svg>
			</Link>
			<BurgerMenu />
		</div>
	);
};
