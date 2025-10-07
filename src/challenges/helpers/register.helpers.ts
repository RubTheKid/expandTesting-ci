import { expect, Page } from "@playwright/test";

export default class RegisterHelpers {
    async navigateToRegisterPage(page: Page) {
        await page.goto('/register');
        await expect(page).toHaveURL('/register');
    }

    async register(page: Page, username: string, password: string, confirmPassword: string) {
        await page.getByRole('textbox', { name: 'username' }).fill(username);
        await page.locator('#password').fill(password);
        await page.locator('#confirmPassword').fill(confirmPassword);
        await page.getByRole('button', { name: 'Register' }).click();
    }

    async expectRegisterSuccess(page: Page) {
        await expect(page).toHaveURL('/login');
        await expect(page.getByRole('alert')).toHaveText('Successfully registered, you can log in now.');
    }

    async expectRegisterError(page: Page, expectedMessage: string) {
        await expect(page.getByRole('alert')).toHaveText(expectedMessage);
    }

    async expectError(page: Page) {
        await page.waitForTimeout(1000);
        await expect(page).toHaveURL('/register');
    }

    async expectErrorContainsText(page: Page, partialText: string) {
        await expect(page.locator('.alert-danger')).toContainText(partialText);
    }

    async expectErrorByAttribute(page: Page) {
        await expect(page.locator('[role="alert"][class*="alert-danger"]')).toBeVisible();
    }
}