import { test } from '@playwright/test'
import { FakerHelpers } from './helpers/faker.helpers'
import RegisterHelpers from './helpers/register.helpers';

const rh = new RegisterHelpers();

test.describe('Register Page', () => {
    test('should register successfully', async ({ page }) => {
        await rh.navigateToRegisterPage(page);

        const username = FakerHelpers.generateUsername();
        const password = FakerHelpers.generatePassword();
        const confirmPassword = password;

        await rh.register(page, username, password, confirmPassword);
        await rh.expectRegisterSuccess(page);
    })

    test('should not register due to invalid confirm password', async ({ page }) => {
        await rh.navigateToRegisterPage(page);

        const username = FakerHelpers.generateUsername();
        const password = FakerHelpers.generatePassword();
        const confirmPassword = 'differentPassword';

        await rh.register(page, username, password, confirmPassword);
        await rh.expectError(page);
    })

    test('should not register due to empty password', async ({ page }) => {
        await rh.navigateToRegisterPage(page);

        const username = FakerHelpers.generateUsername();
        const password = '';
        const confirmPassword = '';

        await rh.register(page, username, password, confirmPassword);
        await rh.expectError(page);
    })

    test('should not register due to empty username', async ({ page }) => {
        await rh.navigateToRegisterPage(page);

        const username = '';
        const password = FakerHelpers.generatePassword();
        const confirmPassword = password;

        await rh.register(page, username, password, confirmPassword);
        await rh.expectError(page);
    })

    test('should not register due to invalid username', async ({ page }) => {
        await rh.navigateToRegisterPage(page);

        const username = 'UserTEST-123-';
        const password = FakerHelpers.generatePassword();
        const confirmPassword = password;

        await rh.register(page, username, password, confirmPassword);

        await rh.expectError(page);
    })
})