import { test, expect } from "@playwright/test";
import {
  LOGIN_URL,
  PASSWORD,
  STOCKS_TO_ADD,
  USERNAME,
} from "./constants";

test("watchlist: add many stocks, logout, stocks still there", async ({
  page,
}) => {
  test.setTimeout(30 * 60 * 1000);

  await page.goto(LOGIN_URL);
  await page.locator("#username").fill(USERNAME);
  await page.locator("#password").fill(PASSWORD);
  await page.getByRole("button", { name: "Log in" }).click();

  for (let i = 0; i < STOCKS_TO_ADD; i++) {
    const symbol = `SYM${i}`;
    await page.locator("#quotesearchtextbox").fill(symbol);
    await page.keyboard.press("Enter");
    await page.getByRole("button", { name: /add to watchlist/i }).click();
  }

  const rows = page.locator("[data-watchlist-row]");
  await expect(rows).toHaveCount(STOCKS_TO_ADD);

  await page.getByRole("button", { name: /log out/i }).click();

  await page.goto(LOGIN_URL);
  await page.locator("#username").fill(USERNAME);
  await page.locator("#password").fill(PASSWORD);
  await page.getByRole("button", { name: "Log in" }).click();

  await expect(rows).toHaveCount(STOCKS_TO_ADD);
});


//  const numberOfStocks= 600;

//  await page.goto('url');
//  for (let i= 1; i<= numberOfStocks; i++) {
//   awaitp
//  }