/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Natalie Cyreus</>,
    imageUrl: 'https://scontent-arn2-1.cdninstagram.com/vp/fe95e87873515561d07ccc1978efa8f5/5E6C3CF8/t51.2885-19/s320x320/67524515_1050566435333937_1374925911710760960_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com',
    description: (
      <>
        System / web engineer @ Swedish Public Television (SVT)
      </>
    ),
    articleUrl: '/nataliecyreus',
  },
  {
    title: <>Giusy Castiglione</>,
    imageUrl: 'https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/20645314_10159300516305650_3379987777671577749_o.jpg?_nc_cat=107&_nc_ohc=_akJ0x4Rpq0AQnOijijnrFltKYyQFwSkxqiDARFtKL8SzC9qsUsges6SA&_nc_ht=scontent-arn2-1.xx&oh=766cd8a77a9f884c3ee31349d11b3ecc&oe=5E6A2343',
    description: (
      <>
      Global Technical Operations  @ Bloomberg & Founder @ Datespotz
      </>
    ),
    articleUrl: '',
  }
];

function Feature({imageUrl, title, description, articleUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3><a href={articleUrl}>{title}</a></h3>
      <p>{description}</p>
    </div>
  );
}

function H2({text}) {
  return (
    <div className="container">
      <div className="row">
        <div className={classnames('col col--12', styles.feature)}>
          <h2>{text}</h2>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('https://github.com/giusyc/giusy-natalie')}>
              View this website code on GitHub!
            </Link>
          </div>
        </div>
      </header>
      <main>
        <H2 text="Writers"/>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
