import React from "react"

import { Link } from "gatsby";
import { useSiteMetadata } from '../../hooks';

import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Page from '../../components/Page';

function WPTools(props) {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const metaDescription = siteSubtitle;
  const pageTitle = 'WordPress Tools';

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={pageTitle}>
        <div className='project-container'>
          <strong>Metabox Generator</strong>
          <p>A simple metabox generate.</p>
          <a href='https://johntendik.github.io/WordPress-MetaBox-Generator/' target='_blank'>View Project</a>
        </div>
      </Page>
    </Layout>
  );
}
export default WPTools