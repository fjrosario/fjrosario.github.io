import assert from "node:assert/strict";
import test from "node:test";
import sitemap from "../src/app/sitemap";
import { myBio } from "../src/data/bio";

test("sitemap exposes the canonical homepage URL", () => {
  assert.deepEqual(sitemap(), [
    {
      url: myBio.url,
      changeFrequency: "monthly",
      priority: 1,
    },
  ]);
});
