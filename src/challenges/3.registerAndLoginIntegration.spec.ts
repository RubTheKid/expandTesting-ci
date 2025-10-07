import { test } from '@playwright/test'
import { FakerHelpers } from './helpers/faker.helpers'
import RegisterHelpers from './helpers/register.helpers';
import LoginHelpers from './helpers/login.helpers';

const rh = new RegisterHelpers();
const lh = new LoginHelpers();

test.describe('Register and Login Integration', () => {
    test('should register and login successfully', async({page}) => {
        const username = FakerHelpers.generateUsername();
        const password = FakerHelpers.generatePassword();
        const confirmPassword = password;

        await test.step('Access Login page', async() => {
            await lh.navigateToLoginPage(page);
        });

        await test.step('Click on register link', async() => {
            await page.getByRole('link', { name: 'here' }).click();
        });

        await test.step('Access Register page', async() => {
            await rh.navigateToRegisterPage(page);
        });

        await test.step('Register new user', async() => {
            await rh.register(page, username, password, confirmPassword);
            await rh.expectRegisterSuccess(page);
        });

        await test.step('Login with registered user', async() => {
            await lh.navigateToLoginPage(page);
            await lh.login(page, username, password);
            await lh.expectLoginSuccess(page);
        });
    })
})