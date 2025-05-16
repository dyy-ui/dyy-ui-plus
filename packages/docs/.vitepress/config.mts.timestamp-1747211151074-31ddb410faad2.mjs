// .vitepress/config.mts
import { defineConfig } from "file:///C:/dev/vue/dyy-ui/node_modules/.pnpm/vitepress@1.5.0/node_modules/vitepress/dist/node/index.js";
import llmstxt from "file:///C:/dev/vue/dyy-ui/node_modules/.pnpm/vitepress-plugin-llms@1.1.3/node_modules/vitepress-plugin-llms/dist/index.js";
import { containerPreview, componentPreview } from "file:///C:/dev/vue/dyy-ui/node_modules/.pnpm/@vitepress-demo-preview+plugin@1.2.3_vitepress@1.5.0/node_modules/@vitepress-demo-preview/plugin/dist/index.mjs";
import UnoCSS from "file:///C:/dev/vue/dyy-ui/node_modules/.pnpm/unocss@0.65.2_b4bxj6xnlr76lwkb6jsvrvoyda/node_modules/unocss/dist/vite.mjs";
var config_default = defineConfig({
  title: "DYY-UI",
  description: "A VitePress Site",
  base: "/dyy-ui-plus/",
  head: [
    ["link", { rel: "icon", href: "/dyy-ui-plus/favicon.ico" }]
  ],
  vite: {
    plugins: [
      UnoCSS(),
      llmstxt()
    ]
  },
  themeConfig: {
    search: {
      provider: "local"
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "\u5F00\u59CB\u4F7F\u7528", link: "/" },
      { text: "\u7EC4\u4EF6", link: "/markdown" }
    ],
    sidebar: [
      {
        text: "\u6307\u5357",
        items: [
          { text: "\u5FEB\u901F\u5F00\u59CB", link: "/markdown" }
        ]
      },
      {
        text: "\u57FA\u7840\u7EC4\u4EF6",
        items: [
          { text: "searchForm", link: "/components/searchForm" },
          { text: "table", link: "/components/table" },
          { text: "numberText", link: "/components/numberText" },
          { text: "container", link: "/components/container" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/dyy-ui/dyy-ui-plus" }
    ]
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcZGV2XFxcXHZ1ZVxcXFxkeXktdWlcXFxccGFja2FnZXNcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxkZXZcXFxcdnVlXFxcXGR5eS11aVxcXFxwYWNrYWdlc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovZGV2L3Z1ZS9keXktdWkvcGFja2FnZXMvZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXHJcbmltcG9ydCBsbG1zdHh0IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tbGxtcydcclxuaW1wb3J0IHsgY29udGFpbmVyUHJldmlldywgY29tcG9uZW50UHJldmlldyB9IGZyb20gJ0B2aXRlcHJlc3MtZGVtby1wcmV2aWV3L3BsdWdpbidcclxuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICB0aXRsZTogXCJEWVktVUlcIixcclxuICBkZXNjcmlwdGlvbjogXCJBIFZpdGVQcmVzcyBTaXRlXCIsXHJcbiAgYmFzZTogXCIvZHl5LXVpLXBsdXMvXCIsXHJcbiAgaGVhZDogW1xyXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9keXktdWktcGx1cy9mYXZpY29uLmljbycgfV0sXHJcbiAgXSxcclxuICB2aXRlOiB7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIFVub0NTUygpIGFzIGFueSAsXHJcbiAgICAgIGxsbXN0eHQoKVxyXG4gICAgXSxcclxuICB9LFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgcHJvdmlkZXI6ICdsb2NhbCdcclxuICAgIH0sXHJcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU1RjAwXHU1OUNCXHU0RjdGXHU3NTI4JywgbGluazogJy8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1N0VDNFx1NEVGNicsIGxpbms6ICcvbWFya2Rvd24nIH1cclxuICAgIF0sXHJcblxyXG4gICAgc2lkZWJhcjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1NjMwN1x1NTM1NycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NUZFQlx1OTAxRlx1NUYwMFx1NTlDQicsIGxpbms6ICcvbWFya2Rvd24nIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTU3RkFcdTc4NDBcdTdFQzRcdTRFRjZcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiBcInNlYXJjaEZvcm1cIiwgbGluazogXCIvY29tcG9uZW50cy9zZWFyY2hGb3JtXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJ0YWJsZVwiLCBsaW5rOiBcIi9jb21wb25lbnRzL3RhYmxlXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJudW1iZXJUZXh0XCIsIGxpbms6IFwiL2NvbXBvbmVudHMvbnVtYmVyVGV4dFwiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiY29udGFpbmVyXCIsIGxpbms6IFwiL2NvbXBvbmVudHMvY29udGFpbmVyXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuXHJcbiAgICBzb2NpYWxMaW5rczogW1xyXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2R5eS11aS9keXktdWktcGx1cycgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgbWFya2Rvd246IHtcclxuICAgIGNvbmZpZyhtZCkge1xyXG4gICAgICBtZC51c2UoY29udGFpbmVyUHJldmlldylcclxuICAgICAgbWQudXNlKGNvbXBvbmVudFByZXZpZXcpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1QsU0FBUyxvQkFBb0I7QUFDblYsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsa0JBQWtCLHdCQUF3QjtBQUNuRCxPQUFPLFlBQVk7QUFHbkIsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLElBQ0osQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sMkJBQTJCLENBQUM7QUFBQSxFQUM1RDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBO0FBQUEsSUFFQSxLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sNEJBQVEsTUFBTSxJQUFJO0FBQUEsTUFDMUIsRUFBRSxNQUFNLGdCQUFNLE1BQU0sWUFBWTtBQUFBLElBQ2xDO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLDRCQUFRLE1BQU0sWUFBWTtBQUFBLFFBQ3BDO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxjQUFjLE1BQU0seUJBQXlCO0FBQUEsVUFDckQsRUFBRSxNQUFNLFNBQVMsTUFBTSxvQkFBb0I7QUFBQSxVQUMzQyxFQUFFLE1BQU0sY0FBYyxNQUFNLHlCQUF5QjtBQUFBLFVBQ3JELEVBQUUsTUFBTSxhQUFhLE1BQU0sd0JBQXdCO0FBQUEsUUFDckQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBRUEsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSx3Q0FBd0M7QUFBQSxJQUNsRTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE9BQU8sSUFBSTtBQUNULFNBQUcsSUFBSSxnQkFBZ0I7QUFDdkIsU0FBRyxJQUFJLGdCQUFnQjtBQUFBLElBQ3pCO0FBQUEsRUFDRjtBQUVGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
