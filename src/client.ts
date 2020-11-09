import * as sapper from "@sapper/app";
import "carbon-components-svelte/css/g10.css";
import { startI18nClient } from "services/i18n";

startI18nClient();

sapper.start({
  target: document.getElementById("sapper")
});
