import { expect, Page } from "@playwright/test";

export default class LoginHelpers {
    async navigateToLoginPage(page: Page) {
        await page.goto('/login');
        await expect(page).toHaveURL('/login');
    }

    async getUsernameInput(page: Page) {
        return page.getByRole('textbox', { name: 'Username' });
    }

    async getPasswordInput(page: Page) {
        return page.getByRole('textbox', { name: 'Password' });
    }

    async getSubmitButton(page: Page) {
        return page.locator('button[type="submit"]');
    }

    async login(page: Page, username: string, password: string) {
        await (await this.getUsernameInput(page)).fill(username);
        await (await this.getPasswordInput(page)).fill(password);
        await (await this.getSubmitButton(page)).click();
    }

    async logout(page: Page) {
        await page.locator('a[href="/logout"]').click();
        await expect(page).toHaveURL('/login');
        await expect(page.getByRole('alert')).toHaveText('You logged out of the secure area!');
    }

    async expectLoginSuccess(page: Page) {
        await expect(page).toHaveURL('/secure');
        await expect(page.getByRole('alert')).toHaveText('You logged into a secure area!');
    }

    async expectLoginError(page: Page, expectedMessage: string) {
        await expect(page.getByRole('alert')).toHaveText(expectedMessage);
    }
}

