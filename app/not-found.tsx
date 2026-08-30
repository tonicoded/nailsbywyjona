import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowLeftIcon } from "@/components/icons";

export default function NotFound() {
  return <main><SiteHeader /><section className="not-found section-shell"><span>404</span><p className="eyebrow centered"><i /> Oeps, deze pagina bestaat niet</p><h1>Deze nagel is<br /><em>net even anders.</em></h1><p>De pagina die je zoekt is misschien verplaatst. Vanaf de homepage helpen we je graag weer verder.</p><Link href="/" className="button button-dark"><ArrowLeftIcon /> Terug naar home</Link></section><SiteFooter /></main>;
}
