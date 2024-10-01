# Playwright - Project Trio

## Prerequisites
- Node.js
- Suggested IDE - Visual Studio Code

## Setup
From Visual Studio Code, open the folder that contains the project.
You may be prompted to install extensions specified in `.vscode/extensions.json`. These extensions can assist in your test development activities, so it's recommended to include them.

### Install Project Dependencies
`$ npm install`

### Running Tests
Execute the test target defined within `package.json`:
`$ npm run test`

Execute Playwright directly:
`$ npx playwright test`

Typically, the first time after setting up the project’s node modules and dependencies, you might need to install Playwright browsers. You will likely be prompted to complete this step.

`$ npx playwright install`

Once Playwright is fully set up, your tests should be ready to run.

Run a specific test file and browser (e.g., chrome, chromium, firefox, webkit). For more details, refer to the projects section in the Playwright configuration file.
`$ npx playwright test VerifyButtons.spec.js --project=chrome`

### Test Scripts
`package.json` includes multiple script targets under the "scripts" section—take a look.

### Page Objects
Constructed using the ES6 class model.

Implements a `PageManager` to create Page Objects used in test development.

Adding new Page Objects requires adding additional getter properties to the `PageManager` class to manage Page Object instantiation.

Try implementing fluent methods, allowing you to chain them consecutively. This approach may lead to more readable tests. Not sure if it’s feasible in JS—haven’t experimented myself—good luck!

### Tests Directory
Houses all test specification files. The naming pattern is `whateverprefix.spec.js`. A simple structure is outlined. Check the Playwright documentation for more advanced options:
- https://playwright.dev/docs/test-annotations
- https://playwright.dev/docs/writing-tests#using-test-hooks

### UI Mode
Supports exploring, running, and debugging tests with a time travel feature and watch mode:
- https://playwright.dev/docs/test-ui-mode

`$ npx playwright test PartnerPortalJob.spec.js --project=chrome --ui`

`$ npm run test:ui`

### Test Reports
After test completion, if any failures are detected, the report will be launched in your default browser:
` Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.`

If no errors are found, you may need to manually view the test results:

```bash
To view the last HTML report, run:
$ npx playwright show-report
```

---