import { test, expect } from "@playwright/test";

test("Login Form Validation", { tag: ["@smoke"] }, async ({ page }) => {
  await page.goto("https://example.com/login");
  await page.fill("#username", "Bohdana");
  await page.fill("#password", "Test123");
  await page.click("#login-btn");

  await expect(page).toHaveURL("/dashboard/");

  const greeting = page.locator("//h1[text()='Welcome Bohdana']");
  await expect(greeting).toHaveText("Welcome Bohdana");
});
