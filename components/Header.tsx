import Link from "next/link";
export default function Header() {
  return <header className="site-header"><div className="shell nav">
    <Link href="/" className="brand" aria-label="Fahamu News home"><span className="brand-mark">F</span><span className="brand-name"><strong>FAHAMU</strong><small>NEWS</small></span></Link>
    <nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/articles">Stories</Link><Link href="/about">About</Link><Link href="/keystatic">Admin ↗</Link></nav>
  </div></header>;
}
