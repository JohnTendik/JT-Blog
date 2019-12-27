import React from "react"

import { useSiteMetadata } from '../../../hooks';

import Layout from '../../../components/Layout';
import Sidebar from '../../../components/Sidebar';
import Page from '../../../components/Page';

function KWRCpage(props) {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const metaDescription = siteSubtitle;
  const pageTitle = 'KWRC Club Website';

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={pageTitle}>
        <h4>Driving for success!</h4>
        <small><em>My first official project</em></small>

        <p>My biggest passion in life (aside from coding of course) is driving. Sounds boring to a lot of people but to me its the most fun and exciting thing ever. Yes, you read that right. I really enjoy Motorsports, especially ones where the control of the car is the important part (drifting, rally, rally cross, etc), probably because I always feel like I can compete (and stand a chance) unlike any other sports.</p>

        <p>When I learned that in my city there was a local rally club I immedietely went to sign up as a member. Unfortunately this proved a bit difficult because their old website was, well, a little bit outdated. It was hard to find information or dates for events. The sign up process looked ancient and frankly being a developer I didn't really trust it.</p>

        <img src='https://johntendik.github.io/img/port1.png' />
        <small><em>Image above is the new website that I built. To see the legacy version <a href='http://legacy.kwrc.on.ca/' target='_blank'>click here</a></em></small>

        <p>I offered to rebuild their website in WordPress and the club organizers accepted my offer. This site was my very first WordPress theme. It was an introduction to the powers of WordPress. It still runs today, like 5 years later which is incredibly surprising to me.</p>

        <strong>Tools used:</strong>
        <ul>
          <li>HTML5 / CSS3</li>
          <li>PHP / MYSQL</li>
          <li>WordPress</li>
          <li>JavaScript</li>
          <li>SASS / SCSS</li>
          <li>Bootstrap</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>

        <a href='http://kwrc.on.ca' target='_blank'>View project</a>
      </Page>
    </Layout>
  );
}
export default KWRCpage