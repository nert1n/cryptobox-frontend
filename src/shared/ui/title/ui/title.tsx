import { ITitle } from "@shared/ui/title/model/types.ts";

import styles from "./title.module.scss";

export const Title = ({ children }: ITitle) => {
	return <div className={styles.title}>{children}</div>;
};
