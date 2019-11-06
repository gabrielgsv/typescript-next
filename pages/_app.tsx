import React from "react";
import App from "next/app";
import Head from "next/head";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
type Props = {
  reduxStore: any;
};
class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <>
        <Head>
          <title>Todo list</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </Head>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withReduxStore(MyApp);
