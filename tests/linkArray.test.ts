import assert from "node:assert/strict";
import test from "node:test";
import {
  externalLinkPath,
  getLinkByDirectory,
  getPrimaryDirectory,
  getRelativeExternalUrl,
  masterLinkArray,
} from "../src/data/linkArray";

test("each configured link has at least one unique redirect slug", () => {
  const slugs = masterLinkArray.flatMap((link) => link.directories);
  const duplicateSlugs = slugs.filter(
    (slug, index) => slugs.indexOf(slug) !== index
  );

  assert.equal(masterLinkArray.length > 0, true);
  assert.deepEqual(duplicateSlugs, []);

  for (const link of masterLinkArray) {
    assert.equal(link.directories.length > 0, true, link.title);
    assert.equal(getPrimaryDirectory(link), link.directories[0]);
  }
});

test("relative redirect URLs are generated under the external link path", () => {
  assert.equal(externalLinkPath, "out");
  assert.equal(getRelativeExternalUrl("github"), "/out/github");
  assert.equal(getRelativeExternalUrl("contact"), "/out/contact");
});

test("directory lookup resolves primary and alias slugs", () => {
  assert.equal(getLinkByDirectory("github")?.title, "GitHub");
  assert.equal(getLinkByDirectory("gh")?.title, "GitHub");
  assert.equal(getLinkByDirectory("contactme")?.title, "Contact");
  assert.equal(getLinkByDirectory("missing"), null);
});
