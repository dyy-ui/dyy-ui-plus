
import  makeInstaller  from "./makeInstaller";
import components from "./components";

import "@dyy-ui-plus/theme/index.css";


const installer = makeInstaller(components);

export * from "../components";
export * from "../hooks";
export default installer;
