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

test("Validdate Checkbox", { tag: ["@regression"] }, async ({ page }) => {
  await page.goto("https://example.com/settings");

  const checkedCheckbox = page.locator("#terms");
  const saveBtn = page.getByRole("button", { name: "Save" });

  await checkedCheckbox.check();
  await expect(checkedCheckbox).toBeChecked();

  await saveBtn.click();
  await expect(saveBtn).toBeEnabled();

  const successMessage = page.locator("//div[text()='Saved Successfully']");
  await expect(successMessage).toHaveText("Saved Successfully");
});

//test merge conflict
