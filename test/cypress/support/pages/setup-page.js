exports.SetupPage = {
    url: Cypress.env("baseUrl") + "/uptimer/setup",
    usernameInput: '[data-cy="username-input"]',
    passWordInput: '[data-cy="password-input"]',
    passwordRepeatInput: '[data-cy="password-repeat-input"]',
    submitSetupForm: '[data-cy="submit-setup-form"]',
};
