
import  makeInstaller  from "./makeInstaller";
import componens from "./components";

import "@dyy-ui-plus/theme/index.css";


const installer = makeInstaller(componens);

export * from "../components";
export default installer;
