import { IButton } from "@shared/ui/button/model/types.ts";

import styles from "./button.module.scss";

export const Button = ({ children, ...props }: IButton) => {
	return (
		<button className={styles.button} type={"button"} {...props}>
			{children}
		</button>
	);
};
