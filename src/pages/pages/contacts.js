import React from "react"

import { useSiteMetadata } from '../../hooks';

import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Page from '../../components/Page';


function Contacts(props) {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const metaDescription = siteSubtitle;
  const pageTitle = 'Contact JT';

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={pageTitle}>
        <p>Coming soonish</p>
      </Page>
    </Layout>
  );
}
export default Contacts