declare const PROD: boolean;
declare const DEV: boolean;
declare const TEST: boolean;
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}