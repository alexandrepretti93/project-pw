const { env } = process;

module.exports = {
    BASE_URL: env.BASE_URL || 'https://www.microapp.io/pt',
    USER_NAME: env.USER_NAME || 'Alexandre Test',
    runHeadless: false,
    browser: env.BROWSER || 'chrome', // chrome, firefox, webkit
};
