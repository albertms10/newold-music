import * as sapper from "@sapper/app";
import { startClient } from "./services/i18n.js";

startClient();

sapper.start({
  target: document.querySelector("#sapper"),
});
