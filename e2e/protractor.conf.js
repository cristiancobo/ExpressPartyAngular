// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// Sirve para mostrar el reporte de jasmine
const { SpecReporter } = require("jasmine-spec-reporter");
const { by } = require("protractor");
var HtmlReporter = require("protractor-beautiful-reporter");

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  //Maximo tiempo para un test
  allScriptsTimeout: 11000,
  specs: ["./src/**/*.e2e-spec.ts"],
  capabilities: {
    browserName: "chrome",
  },
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
      console.log("Testing");
    },
  },
  onPrepare() {

    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"),
    });
    jasmine
      .getEnv()
      // @ts-ignore
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(
      // @ts-ignore
      new HtmlReporter({
        baseDirectory: "tmp/screenshots",
      }).getJasmine2Reporter()
    );
  },
};
