/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'TechFemTeachFemTech',
  tagline: 'A guide by and for females that loves technology, or just want to get started!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: '/static/img/web-circle-circular-round_11-512.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'TechFemTeachFemTech',
      logo: {
        alt: 'My Site Logo',
        src: '/static/img/web-circle-circular-round_11-512.png',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'right'},
        {to: 'blog', label: 'Articles', position: 'right'},
        {
          href: 'https://github.com/giusyc/giusy-natalie',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'TechFemTeachFemTech',
        src: '/static/img/web-circle-circular-round_11-512.png',
        href: '/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} TechFemTeachFemTech, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
