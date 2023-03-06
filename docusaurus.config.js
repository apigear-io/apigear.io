// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The future of API driven workflows',
  tagline: 'Design your APIs and generate your SDKs with ease.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://apigear.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apigear-io', // Usually your GitHub org/user name.
  projectName: 'apigear-io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],



  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-D2X4N3X4K7',
          anonymizeIP: true,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ApiGear',
        logo: {
          alt: 'ApiGear Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            label: 'Docs',
            href: 'https://docs.apigear.io',
            position: 'left',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left'
          },
          {
            label: 'Discussions',
            href: 'https://github.com/orgs/apigear-io/discussions',
            position: 'right',
          },
          {
            href: 'https://github.com/apigear-io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Introduction',
                href: 'https://docs.apigear.io/intro',
              },
              {
                label: 'Getting Started',
                href: 'https://docs.apigear.io/start/first_steps',
              },
              {
                label: 'Installation',
                href: 'https://docs.apigear.io/start/install',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/orgs/apigear-io/discussions',
              },
              {
                label: 'Help',
                href: 'https://docs.apigear.io/community/help',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://www.apigear.io/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/apigear-io',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/apigear',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://www.apigear.io/imprint',
              },
              {
                label: 'Terms of Service',
                href: 'https://www.apigear.io/imprint',
              },
              {
                label: 'Imprint',
                href: 'https://www.apigear.io/imprint',
              },
              {
                label: 'Cookie Policy',
                href: 'https://www.apigear.io/imprint',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ApiGear by Epic Games Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

};

module.exports = config;
