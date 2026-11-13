import Link from "next/link";
export default function Footer() {
 return <footer className="footer"><div className="shell footer-inner"><span>© {new Date().getFullYear()} Fahamu News · Know the story. See the whole picture.</span><div><Link href="/about">About</Link><Link href="/keystatic">Editorial admin</Link></div></div></footer>;
}
