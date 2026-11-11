import Image from "next/image";
import Link from "next/link";
import { AUTHOR } from "../lib/seo";
import { formatDateFr, isoDate } from "../lib/dates";

/** Ligne « Par Simon · date » sous le titre d'un article ou d'une fiche. */
export default function Byline({ date, readTime }: { date: string; readTime?: string }) {
  return (
    <div className="byline">
      {/* alt vide : le nom est écrit juste à côté */}
      <Image className="byline-photo" src={AUTHOR.photoSmall} alt="" width={28} height={28} loading="lazy" />
      <span>
        Par <Link href={AUTHOR.page} className="lien">{AUTHOR.name}</Link>
        {" · "}
        <time dateTime={isoDate(date)}>{formatDateFr(date)}</time>
        {readTime ? <>{" · "}{readTime} de lecture</> : null}
      </span>
    </div>
  );
}
