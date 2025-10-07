import { expect, Page } from "@playwright/test";

export default class TracaloriesHelpers {
    async navigateToTracaloriesPage(page: Page) {
        await page.goto('https://practice.expandtesting.com/tracalorie/');
        await expect(page).toHaveURL(/\/tracalorie\/$/);
    }

    async verifyHeaderAndKeyUIElements(page: Page) {
        await expect(page.locator('.nav-wrapper')).toContainText(/Tracalorie/i);
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Clear All' })).toBeVisible();
        await expect(page.locator('.card-content')).toBeVisible();
        await expect(page.getByRole('button', { name: /add meal/i })).toBeVisible();
        await expect(page.getByText(/Total Calories:/i)).toBeVisible();
    }

    async inputMealAndCaloriesData(page: Page, meal: string, calories: string) {
        await page.locator('#item-name').fill(meal);
        await page.locator('#item-calories').fill(calories);
        await page.locator('button:has-text("Add Meal")').click();
    }

    async verifyMealAndCaloriesData(page: Page, meal: string, calories: string) {
        await expect(page.locator('.collection')).toContainText(meal);
        await expect(page.locator('.collection')).toContainText(calories);
    }

    async verifyTotalCalories(page: Page, totalCalories: string) {
        await expect(page.getByText(/Total Calories:/i)).toHaveText(`Total Calories: ${totalCalories}`);
    }
    async verifyAllMealsAndCaloriesData(page: Page, meal: string, calories: string) {
        await expect(page.locator('.collection')).toContainText(meal);
        await expect(page.locator('.collection')).toContainText(calories);
    }
    async clearAll(page: Page) {
        await page.getByRole('link', { name: /clear all/i }).click();
    }

}