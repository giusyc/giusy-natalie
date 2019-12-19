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

function Giusy() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const about = <p>My love for computers and technology began when I was 13 years old after my mum’s friend gave me an old PC that was constantly breaking. If the PC broke it meant that I wouldn’t be able to access MSN messenger === teenage life over. I had to learn to fix it! At 16, my life took a different turn and I moved to Los Angeles to be a recording artist. I started working in the nightlife and food industry, eventually leading me to move to NYC. After spending a few years in NYC, I decided to go back to University. While studying Economics in Boston, a rather hilarious dating experience led me to start my company DateSpotz. I took a 2 day at Wordpress mastering class at Women’s Code Collective and combined with my knowledge of the restaurant industry, I was able to build a platform within a week. I took some SEO and organic marketing online classes to learn how to reach my target market and was able to have 100k different users visit the website in around 10 months. After spending a year in the founders’ circle, taking part in Rent the Runway’s Project Entrepreneur and attending Hive’s Global leadership program, I decided to come back to NYC to gain more corporate experience. I worked at Warby Parker in Sales and Product and then eventually joined Bloomberg LP in Global Technical Operations which reignited my love for technology. I have been learning to code using online classes, mostly focusing on Front End Development with some Python and C thrown in there, with the aim to move into an engineering role in 2020. 
      <br></br>
  In my spare time, you can find me cuddling my dogs, Teddy & Cruella, cooking or eating, reading a good book or racing with my sailing team on the Hudson River.</p>
  const imgUrl = ['static/img/2f116afe-cc9a-4253-aabd-b1d188d6301a.JPG'];
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Giusy Castiglione founder">
      <main>
        <About name="Giusy Castiglione" text={about} imgUrl={imgUrl}/>
        <Articles props={articles}/>
      </main>
    </Layout>
  );
}

export default Giusy;