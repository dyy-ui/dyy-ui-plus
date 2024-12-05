
import  makeInstaller  from "./makeInstaller";
import componens from "./components";

import "@dyy-ui/theme/index.css";


const installer = makeInstaller(componens);

export * from "@dyy-ui/components";
export default installer;
