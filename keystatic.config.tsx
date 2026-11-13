import { config, collection, fields } from "@keystatic/core";
const isVercel = process.env.VERCEL === "1";
export default config({
  storage: isVercel
    ? { kind: "github", repo: "patriciandacosta2001-tech/Fahamunews" }
    : { kind: "local" },
  collections: {
    articles: collection({
      label: "Articles",
      slugField: "title",
      path: "content/articles/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Headline" } }),
        summary: fields.text({ label: "Summary", multiline: true }),
        category: fields.select({ label: "Category", options: [
          { label: "World", value: "World" }, { label: "Technology", value: "Technology" },
          { label: "Culture", value: "Culture" }, { label: "Environment", value: "Environment" }
        ], defaultValue: "World" }),
        date: fields.date({ label: "Publication date" }),
        author: fields.text({ label: "Author" }),
        content: fields.markdoc({ label: "Article body" })
      }
    })
  }
});
