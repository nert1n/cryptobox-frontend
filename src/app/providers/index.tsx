import { TelegramUserProvider } from "@app/providers/telegramProvider";

import { IProviders } from "./providers.interface";

const Providers = ({ children }: IProviders) => {
	return <TelegramUserProvider>{children}</TelegramUserProvider>;
};

export default Providers;
