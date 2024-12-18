export const metadata = {
	title: "Crafted Next",
	description:
		"We specialize in building web and mobile solutions tailored to your business needs",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
