import { boot } from "quasar/wrappers";
import { TroisJSVuePlugin } from "troisjs";

export default boot(({ app }) => {
  // Set TroisJSVuePlugin instance on app
  console.log('hello')
  app.use(TroisJSVuePlugin);
});

export { TroisJSVuePlugin };





