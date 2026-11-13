import Link from "next/link";
type Article = { slug: string; entry: { title: string; summary: string; category: string; date: string | null; author: string } };
export default function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
 const { entry, slug } = article;
 return <article className={featured ? "story featured" : "story"}>
   <div className={"story-art art-" + entry.category.toLowerCase()} aria-hidden="true"><span>{entry.category.slice(0,2).toUpperCase()}</span></div>
   <div className="story-copy"><div className="meta"><span>{entry.category}</span><span>{entry.date}</span></div>
   <h2><Link href={"/articles/" + slug}>{entry.title}</Link></h2>
   <p>{entry.summary}</p><Link className="read-more" href={"/articles/" + slug}>Read story <span aria-hidden="true">↗</span></Link></div>
 </article>;
}
