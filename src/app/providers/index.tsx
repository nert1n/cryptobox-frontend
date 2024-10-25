import { TelegramUserIdProvider } from "@app/providers/telegramProvider";

import { IProviders } from "./providers.interface";

const Providers = ({ children }: IProviders) => {
	return <TelegramUserIdProvider>{children}</TelegramUserIdProvider>;
};

export default Providers;
