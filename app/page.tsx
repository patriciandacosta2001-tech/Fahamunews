import Link from "next/link";
import ArticleCard from "../components/ArticleCard";
import { getArticles } from "../lib/articles";
export default async function Home() {
 const articles = await getArticles();
 return <div className="shell"><section className="hero"><div className="eyebrow"><span className="dot"/> CLEAR-EYED REPORTING · AFRICAN PERSPECTIVES</div><h1>Know the story.<br/><em>See the whole picture.</em></h1><p>Fahamu means “understand.” We bring context, curiosity, and African perspectives to the stories shaping our world. The articles below are fictional samples.</p><Link className="primary-link" href="/articles">Explore the stories <span>↗</span></Link></section>
 <section className="section"><div className="section-heading"><div><span className="eyebrow">THE EDITION</span><h2>Latest stories</h2></div><Link href="/articles">View all stories ↗</Link></div>
 {articles.length ? <><ArticleCard article={articles[0]} featured/><div className="story-grid">{articles.slice(1,3).map(a=><ArticleCard key={a.slug} article={a}/>)}</div></> : <p>No articles yet. Add one in the admin panel.</p>}</section>
 <section className="bottom-cta"><span className="eyebrow">OUR PURPOSE</span><h2>Good stories make us look closer.</h2><p>A clear, thoughtful publication built for reading and understanding.</p><Link href="/about">Get to know us ↗</Link></section></div>;
}
