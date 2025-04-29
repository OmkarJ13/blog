import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://omkarj.com',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Omkar Joshi',
      openGraph: {
        home: {
          title: 'Omkar Joshi',
        },
        blog: {
          title: 'Blog',
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: 'OmkarJ13/blog',
        repositoryId: 'R_kgDOOd-f7A',
        category: 'General',
        categoryId: 'DIC_kwDOOd-f7M4Cpmep',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
});