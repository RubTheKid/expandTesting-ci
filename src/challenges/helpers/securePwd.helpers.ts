import { Page, expect } from "@playwright/test";


export default class SecurePwdHelpers {
    async navigateToSecurePwdPage(page: Page) {
        await page.goto('/secure-password-checker');
    }

    async inputPassword(page: Page, password: string) {
        const input = page.locator('input[name="password"]');
        await input.click();
        await input.pressSequentially(password, { delay: 10 });
    }

    async expectPasswordRequirementsTrue(page: Page) {
        await expect(page.locator('li.lowercase')).toHaveClass(/\bvalid\b/);
        await expect(page.locator('li.uppercase')).toHaveClass(/\bvalid\b/);
        await expect(page.locator('li.special')).toHaveClass(/\bvalid\b/);
        await expect(page.locator('li.length')).toHaveClass(/\bvalid\b/);
    }

    async expectPasswordRequirementsLengthFalse(page: Page) {
        await expect(page.locator('li.lowercase')).toHaveClass(/\bvalid\b/);
        await expect(page.locator('li.uppercase')).toHaveClass(/\bvalid\b/);
        await expect(page.locator('li.special')).toHaveClass(/\bvalid\b/);
        await expect(page.locator('li.length')).not.toHaveClass(/\bvalid\b/);
    }

    async expectPasswordRequirementsFalse(page: Page) {
        await expect(page.locator('li.lowercase')).not.toHaveClass(/\bvalid\b/);
        await expect(page.locator('li.uppercase')).not.toHaveClass(/\bvalid\b/);
        await expect(page.locator('li.special')).not.toHaveClass(/\bvalid\b/);
        await expect(page.locator('li.length')).not.toHaveClass(/\bvalid\b/);
    }
}
