import { registerApplication, start } from "single-spa";


registerApplication("nav",
  () => System.import("@example/nav"),
  (location) => location.pathname.startsWith("/main")
);

registerApplication(
  "login",
  () => System.import("@example/login"),
  (location) => !location.pathname.startsWith("/main")
);

registerApplication(
  "app",
  () => System.import("@example/app"),
  (location) => location.pathname.startsWith("/main/app")
);

/* 
  Enables production mode in angular as it can only be set once and be in one mode for the whole system.
  Angular apps no longer need to call enableProdMode() as It would produce an error.
*/
System.import("@angular/core").then(a => {
  a.enableProdMode();
  start({
    urlRerouteOnly: true,
  });
});
