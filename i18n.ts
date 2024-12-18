import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`./src/i18n/words/${locale}.json`)).default,
}));
