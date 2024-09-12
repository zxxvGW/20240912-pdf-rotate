import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Pdf Rotate",
	description: "Rotate PDFs in the browser",
}

if (typeof Promise.withResolvers === "undefined") {
	if (typeof window !== "undefined") {
		// @ts-expect-error This does not exist outside of polyfill which this is doing
		window.Promise.withResolvers = function () {
			let resolve, reject
			const promise = new Promise((res, rej) => {
				resolve = res
				reject = rej
			})
			return { promise, resolve, reject }
		}
	} else {
		// @ts-expect-error This does not exist outside of polyfill which this is doing
		global.Promise.withResolvers = function () {
			let resolve, reject
			const promise = new Promise((res, rej) => {
				resolve = res
				reject = rej
			})
			return { promise, resolve, reject }
		}
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
