import { createReader } from "@keystatic/core/reader";
import config from "../keystatic.config";
export const reader = createReader(process.cwd(), config);
export async function getArticles() {
  const articles = await reader.collections.articles.all();
  return articles.sort((a,b) => (b.entry.date || "").localeCompare(a.entry.date || ""));
}
