const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: 
  {
      baseUrl: "https://apidev.btr.kodelabs.com",

  },
  


  //e2e: {
  //  setupNodeEvents(on, config) {
  //    // implement node event listeners here
  //  },
 // },
});
