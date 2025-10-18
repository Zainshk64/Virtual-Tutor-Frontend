import React from "react";
import Layout from "../Layout/Layout";
import { Helmet } from "react-helmet";
import HomeBanner from "../components/HomeItems/HomeBanner";

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Virtual Tutor</title>
        <meta name="home" content="home page content" />
      </Helmet>
      <Layout>
        <div className="pt-20 space-y-20">
            <HomeBanner/>
            </div>
      </Layout>
    </>
  );
};
