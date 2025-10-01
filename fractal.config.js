"use strict";

const path = require("path");

const fractal = (module.exports = require("@frctl/fractal").create());

const mandelbrot = require("@frctl/mandelbrot");

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
  skin: "aqua",
  navigation: "split",
  lang: "fr",
  panels: ["notes", "info", "html"],
  labels: {
      search: {
          placeholder: 'Rechercher…',
      },
  },
  // any other theme configuration values here
});

// tell Fractal to use the configured theme by default
fractal.web.theme(myCustomisedTheme);
fractal.set("project.title", "Intranets Design System");
fractal.set("project.version", "v1.0");
fractal.set("project.author", "ROTY Jeremy");
fractal.set("project.email", "rotyjeremy@gmail.com");
fractal.set(
  "project.description",
  "Intranets Design System - Atom Philosophy."
);
fractal.set("project.status", "prototype");
fractal.set("project.start", "2025-03-18");
fractal.set("project.license", "Apache License 2.0");

fractal.components.set("path", path.join(__dirname, "components"));
fractal.components.set("ext", ".twig");
fractal.components.engine(require("@frctl/twig"));

fractal.components.set("resources", {
  scss: {
    label: "SCSS",
    match: ["**/*.scss"],
  },
});



fractal.web.set("static.path", path.join(__dirname, "intranets-design-system"));
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.web.set('builder.dest', path.join(__dirname, 'intranets-design-system/docs'));