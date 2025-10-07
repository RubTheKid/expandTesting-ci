import { test, expect } from '@playwright/test';
import TracaloriesHelpers from './helpers/tracalories.helpers';

const th = new TracaloriesHelpers();

test.describe('Tracalories Tests', () => {
    test('should navigate to the tracalories page', async ({ page }) => {
        await test.step('navigate to the tracalories page', async () => {
            await th.navigateToTracaloriesPage(page);
            await th.verifyHeaderAndKeyUIElements(page);
        });

        await test.step('input meal and calories data', async () => {
            await th.inputMealAndCaloriesData(page, 'Test Meal', '100');
            await th.verifyMealAndCaloriesData(page, 'Test Meal', '100');
        })
    });

    test('should input several meals and calories data', async ({ page }) => {
        await test.step('navigate to the tracalories page', async () => {
            await th.navigateToTracaloriesPage(page);
            await th.verifyHeaderAndKeyUIElements(page);
        });

        await test.step('input meal and calories data', async () => {
            await th.clearAll(page);
            for (let i = 0; i < 100; i++) {
                await th.inputMealAndCaloriesData(page, `Test Meal ${i}`, `${i * 100}`);
                await th.verifyMealAndCaloriesData(page, `Test Meal ${i}`, `${i * 100}`);
            }
        })

    })

});
