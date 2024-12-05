import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import DyyUI from "dyy-ui";
import ElementPlus from "element-plus";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";

import '@vitepress-demo-preview/component/dist/style.css'
import "element-plus/dist/index.css";
import "dyy-ui/dist/index.css";
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(ElementPlus)
    app.use(DyyUI);
  },
};
