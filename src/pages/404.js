import React from "react";

import Layout from "../components/Layouts/MainLayout";
import Seo from "../components/Seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className={"container"}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
