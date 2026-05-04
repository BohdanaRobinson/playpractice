/**
 * Login Page - page object
 * URL: /login
 */
import BasePage from "../Base.page";

export default class LoginPage extends BasePage {
  async waitUntilPageIsLoaded() {
    await this.waitForElement("//h2[text()='Login']");
  }

  async inputUsername(username: string): Promise<void> {
    await this.page.fill("#username", username);
  }

  async inputPassword(password: string): Promise<void> {
    await this.page.fill("#password", password);
  }
}
