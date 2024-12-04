import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import  makeInstaller  from "./makeInstaller";
import componens from "./components";

import "@dyy-ui/theme/index.css";


library.add(fas);
const installer = makeInstaller(componens);

export * from "@dyy-ui/components";
export default installer;
