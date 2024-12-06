import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import UnoCSS from 'unocss/vite'
import { presetUno } from 'unocss'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DYY-UI",
  description: "A VitePress Site",
  base: "/dyy-ui/",
  vite: {
    plugins: [
      UnoCSS({
        presets: [presetUno({
          important: '#app',
        })],
      })
    ] as any,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始使用', link: '/' },
      { text: '组件', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/markdown-examples' },
        ]
      },
      {
        text: "基础组件",
        collapsed: false,
        items: [
          { text: "SearchForm 按钮", link: "components/searchForm" },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }
})
