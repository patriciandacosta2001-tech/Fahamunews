import type { Metadata } from "next";
import ArticleCard from "../../components/ArticleCard";
import { getArticles } from "../../lib/articles";
export const metadata: Metadata = { title: "All stories" };
export default async function ArticlesPage() {
 const articles = await getArticles();
 return <div className="shell page-space"><span className="eyebrow">THE ARCHIVE</span><h1 className="page-title">All stories<span className="accent">.</span></h1><p className="page-intro">Africa-focused reporting and explainers, with clearly labelled fictional samples from the original site demo.</p><div className="story-grid archive">{articles.map(a=><ArticleCard key={a.slug} article={a}/>)}</div></div>;
}
