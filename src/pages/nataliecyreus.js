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

function About({name, text, imgUrl}) {
  return (
    <div className="container">
      <div className="row">
        <div className={classnames('col col--8', styles.feature)}>
          <h1>My story...</h1>
          <img src={imgUrl} />
          <h2>{name}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

function Natalie() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const about = "While studying media and communication at Sodertorn Univerity I got a short introduction to HTML and Wordpress. I loved my new skill of creating something out of nothing and spent my evenings learning. A couple of years later I moved to New York and decided to make a career as a developer. I took an online frontend course at Udacity. I learned basic HTML, CSS, and JavaScript. After finishing the course I got a job at American Express as a frontend developer. In April 2019 I moved back to Sweden and started a job at Sveriges Television as a system developer."
  const imgUrl = "https://scontent-arn2-1.cdninstagram.com/vp/fe95e87873515561d07ccc1978efa8f5/5E6C3CF8/t51.2885-19/s320x320/67524515_1050566435333937_1374925911710760960_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com";
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Natalie Cyreus web system developer">
      <main>
        <About name="Natalie Cyreus" text={about} imgUrl={imgUrl}/>
      </main>
    </Layout>
  );
}

export default Natalie;
