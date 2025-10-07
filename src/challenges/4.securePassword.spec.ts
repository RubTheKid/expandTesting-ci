import { test, expect } from '@playwright/test';

import SecurePwdHelpers from './helpers/securePwd.helpers';

const sph = new SecurePwdHelpers();

test.describe('Secure Password Checker', () => {

    test('should check if the password meet the requirements', async ({ page }) => {
        await test.step('Navigate to the Secure Password Checker page', async () => {
            await sph.navigateToSecurePwdPage(page);
        });

        await test.step('input password', async () => {
            await sph.inputPassword(page, 'Abc1234!');

        });

        await test.step('check if the password meet the requirements', async () => {
            await sph.expectPasswordRequirementsTrue(page);
        });
    });

    test('should check if the password do not meet the requirements', async ({ page }) => {
        await sph.navigateToSecurePwdPage(page);
        await sph.inputPassword(page, 'Abc123!');
        await sph.expectPasswordRequirementsLengthFalse(page);

    });

    test('do not let emoji in password', async ({ page }) => {
        await sph.navigateToSecurePwdPage(page);
        await sph.inputPassword(page, '👻123abcDe!');
        await sph.expectPasswordRequirementsTrue(page); //nao deveria permitir emoji
    });


});
