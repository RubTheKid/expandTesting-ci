import { test, expect } from '@playwright/test'
import LoginHelpers from './helpers/login.helpers';
import { LOGIN_DATA } from './test-data/login.data';

const lh = new LoginHelpers();

test.describe('Login Page', () => {
    test('should login successfully', async({page}) =>{
        await lh.navigateToLoginPage(page);
        await lh.login(page, LOGIN_DATA.valid.username, LOGIN_DATA.valid.password);
        await lh.expectLoginSuccess(page);
        await lh.logout(page);
    });

    test('should not login due to invalid credentials', async({page}) =>{
        await lh.navigateToLoginPage(page);
        await lh.login(page, LOGIN_DATA.invalid.username, LOGIN_DATA.invalid.password);
        await lh.expectLoginError(page, 'Your username is invalid!');
    });

    test('should not login due to empty credentials', async({page}) =>{
        await lh.navigateToLoginPage(page);
        await lh.login(page, LOGIN_DATA.empty.username, LOGIN_DATA.empty.password);
        await lh.expectLoginError(page, 'Your username is invalid!');
    });

    test('should not login due to invalid password', async({page}) =>{
        await lh.navigateToLoginPage(page);
        await lh.login(page, LOGIN_DATA.valid.username, LOGIN_DATA.empty.password);
        await lh.expectLoginError(page, 'Your password is invalid!');
    });
})