import { expect, test } from "@playwright/test";

const assertNoForbiddenRules = async (page) => {
  const forbiddenRules = ["float", "width", "height"];
  const rules = await page.evaluate(() => {
    return Array.from(document.styleSheets)
      .map((sheet) => {
        try {
          return (
            Array.from(sheet.cssRules)
              // @ts-ignore
              .filter((rule) => rule.style)
              // @ts-ignore
              .filter(
                (rule) =>
                  rule.selectorText !== "main" &&
                  rule.selectorText !== ".circle"
              )
              // @ts-ignore
              .map((rule) => [...rule.style])
          );
        } catch (e) {
          // security exception. I suppose you can cheat by adding `float: right` in an external
          // sheet but fine you earned it
          return [];
        }
      })
      .flat(2);
  });

  const forbiddenRulesFound = [
    ...new Set(rules.filter((rule: string) => forbiddenRules.includes(rule))),
  ];

  expect(
    forbiddenRulesFound,
    `Forbidden CSS rules found: ${forbiddenRulesFound.join(", ")}`
  ).toHaveLength(0);
};

test(
  "Task 2a: Layout works horizontally",
  {
    annotation: {
      type: "points",
      description: "1",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/a.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2a: Layout works vertically",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/a.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 720, height: 1280 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2a: Layout works in a square",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/a.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 720, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);

test(
  "Task 2b: Layout works horizontally",
  {
    annotation: {
      type: "points",
      description: "1",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/b.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2b: Layout works vertically",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/b.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 720, height: 1280 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2b: Layout works in a square",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/b.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 720, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);

test(
  "Task 2c: Layout works horizontally",
  {
    annotation: {
      type: "points",
      description: "1",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/c.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2c: Layout works vertically",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/c.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 720, height: 1280 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2c: Layout works in a square",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/c.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 720, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);

test(
  "Task 2d: Layout works horizontally",
  {
    annotation: {
      type: "points",
      description: "1",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/d.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2d: Layout works vertically",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/d.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 720, height: 1280 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2d: Layout works in a square",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/d.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 720, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);

test(
  "Task 2e: Layout works horizontally",
  {
    annotation: {
      type: "points",
      description: "1",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/e.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2e: Layout works vertically",
  {
    annotation: {
      type: "points",
      description: "1",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/e.html");

    await assertNoForbiddenRules(page);

    await page.setViewportSize({ width: 720, height: 1280 });
    await expect(page).toHaveScreenshot();
  }
);
