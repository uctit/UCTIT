import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
			});

		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			// Styles fragment is rendered after the app and page rendering finish.
			styles: [
				...React.Children.toArray(initialProps.styles),
				sheets.getStyleElement()
			]
		};
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="Provide IT Services and Solutions" />
					<meta name="keywords" content='IT, IT solutions, IT services, digital marketing, marketing, web design, web development
					, reliable IT Solutions, reliable IT Services, affordable IT Solutions, affordable IT Services' />
					<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&display=swap" rel="stylesheet"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;