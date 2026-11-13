import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import { reader } from "../../../lib/articles";
type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { return (await reader.collections.articles.list()).map(slug => ({ slug })); }
export async function generateMetadata({params}: Props): Promise<Metadata> {
 const {slug} = await params; const article = await reader.collections.articles.read(slug);
 return { title: article?.title ?? "Story not found", description: article?.summary ?? "" };
}
export default async function ArticlePage({params}: Props) {
 const {slug} = await params;
 const article = await reader.collections.articles.read(slug);
 if (!article) notFound();
 const {node} = await article.content();
 const body = Markdoc.renderers.react(Markdoc.transform(node), React);
 return <div className="shell"><article className="article-page"><Link href="/articles" className="back">← All stories</Link><div className="meta"><span>{article.category}</span><span>{article.date}</span></div><h1>{article.title}</h1><p className="article-deck">{article.summary}</p><div className="byline">By {article.author} <span>·</span> Fictional sample article</div><div className="article-rule"/><div className="prose">{body}</div><div className="article-end"><Link href="/articles">← Back to all stories</Link></div></article></div>;
}
