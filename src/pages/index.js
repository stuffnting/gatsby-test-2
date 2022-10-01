import * as React from "react";
import Layout from "../components/layout";
import { SearchEngOpt } from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <StaticImage alt="A pooch sat on grass." src="../images/pooch.jpeg" />
    </Layout>
  );
};

export const Head = () => (
  <>
    <SearchEngOpt />
    <title>Home Page</title>
  </>
);

export default IndexPage;
