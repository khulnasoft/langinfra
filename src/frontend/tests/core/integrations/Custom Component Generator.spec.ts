import { expect, test } from "@playwright/test";
import * as dotenv from "dotenv";
import path from "path";
import { addNewApiKeys } from "../../utils/add-new-api-keys";
import { adjustScreenView } from "../../utils/adjust-screen-view";
import { awaitBootstrapTest } from "../../utils/await-bootstrap-test";
import { getAllResponseMessage } from "../../utils/get-all-response-message";
import { initialGPTsetup } from "../../utils/initialGPTsetup";
import { removeOldApiKeys } from "../../utils/remove-old-api-keys";
import { selectGptModel } from "../../utils/select-gpt-model";
import { updateOldComponents } from "../../utils/update-old-components";
import { waitForOpenModalWithChatInput } from "../../utils/wait-for-open-modal";

test(
  "Custom Component Generator",
  { tag: ["@release", "@starter-project"] },
  async ({ page }) => {
    test.skip(
      !process?.env?.ANTHROPIC_API_KEY,
      "OPENAI_API_KEY required to run this test",
    );

    if (!process.env.CI) {
      dotenv.config({ path: path.resolve(__dirname, "../../.env") });
    }

    await page.goto("/");

    await awaitBootstrapTest(page);

    await page.getByTestId("side_nav_options_all-templates").click();
    await page.getByTestId("template-custom-component-generator").click();

    await page.waitForSelector('[data-testid="fit_view"]', {
      timeout: 100000,
    });

    await initialGPTsetup(page);

    const apiKeyInput = page.getByTestId(
      "popover-anchor-input-anthropic_api_key",
    );
    const isApiKeyInputVisible = await apiKeyInput.isVisible();

    if (isApiKeyInputVisible) {
      await apiKeyInput.fill(process.env.ANTHROPIC_API_KEY ?? "");
    }

    await page.getByTestId("button_run_chat output").click();
    await page.waitForSelector("text=built successfully", { timeout: 30000 });

    await page.getByText("built successfully").last().click({
      timeout: 15000,
    });

    await page.getByText("Playground", { exact: true }).last().click();
    await page
      .getByText("No input message provided.", { exact: true })
      .last()
      .isVisible();

    await waitForOpenModalWithChatInput(page);

    const textContents = await getAllResponseMessage(page);
    expect(textContents.length).toBeGreaterThan(100);
    expect(await page.getByTestId("chat-code-tab").isVisible()).toBe(true);
    expect(textContents).toContain("langinfra");
  },
);