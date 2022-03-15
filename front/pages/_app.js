import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

const Store = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>store</title>
      </Head>
      <Component />
    </>
  );
};

Store.propTypes = {
  Component: PropTypes.elementType.isRequire,
};

export default wrapper.withRedux(Store);
