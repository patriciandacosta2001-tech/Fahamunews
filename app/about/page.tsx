import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "About" };
export default function About() {
 return <div className="shell page-space about"><span className="eyebrow">WHO WE ARE</span><h1 className="page-title">A little more<br/>context<span className="accent">.</span></h1><p className="lead">Fahamu News is a publication for people who want to understand the forces shaping everyday life, across Africa and around the world.</p><div className="about-grid"><div><h2>Our approach</h2><p>We believe great reporting starts with curiosity and makes room for context. Our visual identity pairs the warmth of paper and ink with field sage and a confident press red.</p></div><div><h2>A note on accuracy</h2><p>New Africa coverage links to its source reporting and official records. The original three sample stories, their authors, places, events, and quotations are fictional and labelled as such.</p></div></div><Link className="primary-link" href="/articles">Browse stories ↗</Link></div>;
}
