const { defineConfig } = require('cypress')

module.exports = defineConfig({
	projectId: "buaqfo",
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/Specs/*.{cy,spec}.{js,ts}"
  },
})
