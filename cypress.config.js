const { defineConfig } = require('cypress')

module.exports = defineConfig({
	projectId: "iy8pni",
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/Specs/*.{cy,spec}.{js,ts}"
  },
    "env": {
        "username": "test0@hotmail.xyz",
        "password": "Testeur0@"
    }
})
