import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "600"],
});

export function generateStaticParams() {
	return [{ locale: "en" }];
}

async function getMessages(locale: string) {
	try {
		const messages = (await import(`../../i18n/words/${locale}.json`)).default;
		return messages;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		notFound();
	}
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (locale !== "en") {
		notFound();
	}

	setRequestLocale(locale);

	const messages = await getMessages(locale);

	const fontClass = poppins.className;

	return (
		<html lang={locale}>
			<body className={fontClass}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<div className="w-full  min-h-screen h-fit">{children}</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
