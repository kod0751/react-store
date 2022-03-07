import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const profile = () => {
  return (
    <>
      <Head>
        <title>Store | 내 프로필</title>
      </Head>
      <AppLayout>프로필 페이지</AppLayout>
    </>
  );
};

export default profile;
