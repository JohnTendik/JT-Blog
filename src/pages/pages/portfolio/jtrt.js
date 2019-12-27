import React from "react"

import { useSiteMetadata } from '../../../hooks';

import Layout from '../../../components/Layout';
import Sidebar from '../../../components/Sidebar';
import Page from '../../../components/Page';

function JTRTpage(props) {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const metaDescription = siteSubtitle;
  const pageTitle = 'JTRT Responsive Tables';

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={pageTitle}>
        <h4>Turning the tables in my favour</h4>
        <small><em>Excel to HTML tables in a jiffy</em></small>

        <p>This project started off as a simple excel to HTML table converter. We needed a plugin that would take excel results and turn it into responsive tables to be displayed on the KWRC website.</p>

        <p>Originally the project was very simple. All it did was take excel file and display an HTML table. This worked great for KWRC and what they needed at the time. I decided to release this plugin into the WordPress plugin directory and it was one of the best decisions I've made.</p>

        <img src='https://johntendik.github.io/img/port2.png' />

        <p>Really quickly the plugin gained around 500 active users (now over 5000). To me this was a huge success and really inspired me to improve upon the plugin.</p>

        <p>I added a ton of new features, and made the plugin overall more easier to use. Thinking back to it now, had I continued to work on this plugin and improved it more I'm sure it would have gotten a lot more popular than it currently is. I haven't touched the plugin in over a year and I still get people messaging me about helping them use it. Unfortunately I no longer have the time or interest to continue to support this plugin.</p>

        <strong>Tools used:</strong>
        <ul>
          <li>HTML5 / CSS3</li>
          <li>PHP / MYSQL</li>
          <li>WordPress</li>
          <li>JavaScript</li>
          <li>SASS / SCSS</li>
          <li>Bootstrap</li>
          <li>Footables</li>
          <li>Papa Parse</li>
          <li>Handsontable</li>
          <li>Stack Overflow</li>
        </ul>

        <a href='https://en-ca.wordpress.org/plugins/jtrt-responsive-tables/' target='_blank'>View project</a>
      </Page>
    </Layout>
  );
}
export default JTRTpage