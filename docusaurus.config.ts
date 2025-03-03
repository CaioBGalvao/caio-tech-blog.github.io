import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'Dev Blog do Caio',
  tagline: 'O erro é só mais uma etapa',
  favicon: 'img/favicon.ico',

  url: 'https://caio-tech-blog.github.io',

  baseUrl: '/',

  organizationName: 'caio-tech-blog',
  projectName: 'caio-tech-blog.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Dev Blog do Caio',
      logo: {
        alt: 'Dev Blog Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Redes Sociais',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/caiobgalvao/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/CaioBGalvao',
            },
            {
              label: 'X',
              href: 'https://x.com/Caio_BGalvao',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
