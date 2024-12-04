import type { App, Plugin } from "vue";
import { each, get, set } from "lodash-es";


export default function makeInstaller(components: Plugin[]) {
  const install = (app: App) => {
    if (get(app, Symbol("INSTALLED_KEY"))) return;
    set(app, Symbol("INSTALLED_KEY"), true);

    each(components, (c) => {
      app.use(c);
    });

  };

  return install;
}
