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
          <br/>
          {imgUrl && imgUrl.length && (
            <div className="container">
              <div className="row">
                {imgUrl.map((props, idx) => (
                  <img src={props} key={idx}/>
                ))}
              </div>
            </div>
        )}
          <h2>{name}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

const articles = [
  {
    title: 'What is the Internet?',
    articleUrl: '/blog/what-is-the-internet', 
  },
  {
    title: 'Intro to Web Development',
    articleUrl: '/blog/intro-web', 
  }
]

function Articles({title, articleUrl}) {
  return (
    <div className="container">
      <div className="row">
        <div className={classnames('col col--8', styles.feature)}>
          {articles && articles.length && (
            <div className="container">
              <div className="row">
                <h3>Articles</h3>
                <br />
                <ul>
                  {articles.map(({...props}, idx) => (
                    <li key={idx}>
                      <a href={props.articleUrl}>
                        {props.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        )}
        </div>
      </div>
    </div>
  );
}

function Natalie() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const about = "While studying media and communication at Sodertorn Univerity I got a short introduction to HTML and Wordpress. I loved my new skill of creating something out of nothing and spent my evenings learning. A couple of years later I moved to New York and decided to make a career as a developer. I took an online frontend course at Udacity. I learned basic HTML, CSS, and JavaScript. After finishing the course I got a job at American Express as a frontend developer. In April 2019 I moved back to Sweden and started a job at Sveriges Television as a system developer."
  const imgUrl = ["https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/p960x960/48359194_10156225631418235_2643232034847195136_o.jpg?_nc_cat=102&_nc_ohc=cCTKIBPcHSUAQmvuC8Arc3_02Sp85mhKShrpWp-tlJ5N4DPrRgbpYRXvA&_nc_ht=scontent-arn2-1.xx&oh=fb93a5e0c74e1c868cc580a766c2d9f1&oe=5E7EAE6B"];
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Natalie Cyreus web system developer">
      <main>
        <About name="Natalie Cyreus" text={about} imgUrl={imgUrl}/>
        <Articles props={articles}/>
      </main>
    </Layout>
  );
}

export default Natalie;
