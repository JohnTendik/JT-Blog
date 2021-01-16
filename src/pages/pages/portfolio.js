import React from "react"

import { useSiteMetadata } from '../../hooks';

import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Page from '../../components/Page';
import PortfolioItem from '../../components/Portfolio/PortfolioItem';

function Portfolio(props) {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const metaDescription = siteSubtitle;
  const pageTitle = 'Portfolio';

  const portfolioItems = [
    {
      title: 'Lazy Go',
      desc: 'A simple yet very effective way to cheat in Pokemon Go. For the lazy.',
      img: 'https://johntendik.github.io/img/port3.png',
      link: '/pages/portfolio/lazygo',
    },
    {
      title: 'KWRC Website',
      desc: 'My very first officialy website, still runs to this day. Impressive.',
      img: 'https://johntendik.github.io/img/port1.png',
      link: '/pages/portfolio/kwrc',
    },
    {
      title: 'JTRT Responsive Tables',
      desc: 'An ambitious WordPress plugin idea that I only neglect at this point.',
      img: 'https://johntendik.github.io/img/port2.png',
      link: '/pages/portfolio/jtrt'
    },
    {
      title: 'PoGo Master Raider',
      desc: 'A simple raid group finder app for Pokemon Go. Less destructive than my other Pokemon go related app.',
      img: 'https://johntendik.github.io/img/port4.png',
      link: '/pages/portfolio/masterRaider'
    }
  ];

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={pageTitle}>
        <p>I try to stay somewhat active in the Open Source community and try to create some PRs for my favourite repos, however here are some of the things I've done all by myself like a big boy.</p>
        {portfolioItems.map((item) => (
          <PortfolioItem
            title={item.title}
            desc={item.desc}
            img={item.img}
            link={item.link}
          />
        ))}
      </Page>
    </Layout>
  );
}
export default Portfolio