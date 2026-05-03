import { test, expect } from "@playwright/test";
import { LOGIN_URL, PASSWORD, USERNAME } from "./constants";

test("login Page", async ({ page }) => {
  await page.goto(LOGIN_URL);

  await page.locator("#username").fill(USERNAME);
  await page.locator("#password").fill(PASSWORD);
  await page.getByRole("button", { name: "Log in" }).click();

  await expect(page.getByText(/welcome/i)).toBeVisible();
});
