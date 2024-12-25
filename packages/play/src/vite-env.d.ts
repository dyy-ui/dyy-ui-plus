/// <reference types="vite/client" />
/// <reference types="element-plus/global.d.ts" />
declare module "*.vue" {  

  import Vue from 'vue';  

  export default Vue;  

}

declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    LxSearchForm: typeof import('dyy-ui-plus')['LxSearchForm']
    LxTable: typeof import('dyy-ui-plus')['LxTable']
  }
}

export {}