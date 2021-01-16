import React from "react"

import { useSiteMetadata } from '../../../hooks';

import Layout from '../../../components/Layout';
import Sidebar from '../../../components/Sidebar';
import Page from '../../../components/Page';

function MasterRaiderPage(props) {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const metaDescription = siteSubtitle;
  const pageTitle = 'PoGo Master Raider';

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={pageTitle}>
        <h4>Master Raider</h4>
        <small><em>The name is a joke, but the app is for real</em></small>

        <p>I started this app during the holidays because I had some extra time on my hands. I spent a bunch of my free time raiding in Pokemon Go. It was fun, I'm the type of peron that enjoys collecting rare things, in this case, pokemon :P</p>

        <img src='https://johntendik.github.io/img/port4.png' />

        <p>The raiding community is amazing, the entire process is run by people like me who want to provide a way for remote raids. There are apps that, while they did work, it was the source of a lot of frusturations.</p>

        <p>Like the good old saying goes, something something build it yourself, so that is what I set out to do.</p>

        <p>I learned a ton, even did a bit of Java coding :'D that's a whole new achievement for me.</p>

        <p>I'm really happy with the way this app turned out and if it provides anyone benefit that is a blessing in itself :)</p>

        <strong>Tools used:</strong>
        <ul>
          <li>Stack Overflow</li>
          <li>Google</li>
          <li>Java</li>
          <li>Android Studio</li>
          <li>React Native</li>
          <li>Native Modules</li>
          <li>MongoDB</li>
          <li>Express Server</li>
          <li>Socket.io</li>
          <li>Postman</li>
        </ul>

        <a href='/pages/termsOfService'>Terms Of Service</a>
        <span> | </span>
        <a href='/pages/privacyPolicy'>Privacy Policy</a>
      </Page>
    </Layout>
  );
}
export default MasterRaiderPage