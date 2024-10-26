import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

interface TelegramUser {
	id: number;
	first_name?: string;
	last_name?: string;
	username?: string;
	language_code?: string;
	photo_url?: string;
}

const TelegramUserContext = createContext<TelegramUser | null>(null);

interface TelegramUserProviderProps {
	children: ReactNode;
}

export const TelegramUserProvider = ({
	children,
}: TelegramUserProviderProps) => {
	const [user, setUser] = useState<TelegramUser | null>(null);
	console.log(user);
	useEffect(() => {
		if (
			typeof window !== "undefined" &&
			window.Telegram?.WebApp?.initDataUnsafe?.user
		) {
			setUser(window.Telegram.WebApp.initDataUnsafe.user);
		}
	}, []);

	return (
		<TelegramUserContext.Provider value={user}>
			{children}
		</TelegramUserContext.Provider>
	);
};

export const useTelegramUser = () => useContext(TelegramUserContext);
