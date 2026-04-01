import lume from "lume/mod.ts";

const site = lume({
  src: "./src",
  dest: "_site",
  location: new URL("https://cooking-nimble.com"),
});

site.add("/reset.css");
site.add("/tokens.css");
site.add("/styles.css");

export default site;
