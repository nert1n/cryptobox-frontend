import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

const TelegramUserIdContext = createContext<number | null>(null);

interface TelegramUserIdProviderProps {
	children: ReactNode;
}

export const TelegramUserIdProvider = ({
	children,
}: TelegramUserIdProviderProps) => {
	const [userId, setUserId] = useState<number | null>(null);

	useEffect(() => {
		if (
			typeof window !== "undefined" &&
			window.Telegram?.WebApp?.initDataUnsafe?.user?.id
		) {
			setUserId(window.Telegram.WebApp.initDataUnsafe.user.id);
		}
	}, []);

	return (
		<TelegramUserIdContext.Provider value={userId}>
			{children}
		</TelegramUserIdContext.Provider>
	);
};

export const useTelegramUserId = () => useContext(TelegramUserIdContext);
