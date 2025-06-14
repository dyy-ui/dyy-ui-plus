import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import UnoCSS from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'DYY-UI',
  description: 'A VitePress Site',
  base: '/dyy-ui-plus/',
  head: [['link', { rel: 'icon', href: '/dyy-ui-plus/favicon.ico' }]],
  vite: {
    plugins: [UnoCSS() as any, llmstxt()],
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始使用', link: '/' },
      { text: '组件', link: '/markdown' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [{ text: '快速开始', link: '/markdown' }],
      },
      {
        text: '基础组件',
        items: [
          { text: 'searchForm', link: '/components/searchForm' },
          { text: 'table', link: '/components/table' },
          { text: 'numberText', link: '/components/numberText' },
          { text: 'container', link: '/components/container' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/dyy-ui/dyy-ui-plus' }],
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
})
