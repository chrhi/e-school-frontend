import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
	const messages = await import(`./src/i18n/words/${locale}.json`);
	return {
		messages: messages.default,
		timeZone: "UTC",
	};
});
