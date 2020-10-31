import * as sapper from "@sapper/app";
import "carbon-components-svelte/css/g10.css";
import { startClient } from "./services/i18n.js";

startClient();

sapper.start({
  target: document.getElementById("sapper"),
});
