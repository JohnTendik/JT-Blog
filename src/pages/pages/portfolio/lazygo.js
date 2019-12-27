import React from "react"

import { useSiteMetadata } from '../../../hooks';

import Layout from '../../../components/Layout';
import Sidebar from '../../../components/Sidebar';
import Page from '../../../components/Page';

function LazyGo(props) {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const metaDescription = siteSubtitle;
  const pageTitle = 'Lazy Pokemon Go';

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={pageTitle}>
        <h4>I was the king of Pokemon</h4>
        <small><em>For about 2 weeks until the developers removed support for jailbroken devices</em></small>

        <p>This was done as a school project. The timing couldn't be more perfect as we were tasked with creating a mobile application. I could have chosen something simple to do like a calculator project however creating cheats for games I enjoy is what I like doing..</p>

        <img src='https://johntendik.github.io/img/port3.png' />

        <p>I was the first person in my entire city to have reached level 20 and yes, I had all of the pokemon that was available at the time. This tool / bot / program was the best idea ever. I even programmed a feature that would auto walk around the block to hatch eggs. I would be sitting in class and 'walking' for miles in game. I hatched a lot of 10km eggs just by sitting. My bag was full from, couldn't even hold more pokeballs at the time.</p>

        <p>There was also another neat feature which was walking to the nearest gym. This was even lazier than having a joystick on the page. This was automated playing at this point. The last feature to add was auto gym battle but I never got around to finishing it. The developers of Pokemon Go outright removed support for any device that was rooted or jailbroken. This meant I couldn't even play the game <em>fairly</em> :D At this point though the damage was done.</p>

        <strong>Tools used:</strong>
        <ul>
          <li>Stack Overflow</li>
          <li>Google</li>
          <li>Java</li>
          <li>Android Studio</li>
          <li>Pokemon API</li>
          <li>Joystick View</li>
          <li>Google Login Services</li>
          <li>Google Maps</li>
          <li>Google Directions</li>
          <li>Root/Jailbreak</li>
        </ul>

        <a href='https://github.com/JohnTendik/LazyGo' target='_blank'>View project</a>
      </Page>
    </Layout>
  );
}
export default LazyGo