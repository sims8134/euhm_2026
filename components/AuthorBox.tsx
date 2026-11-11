import Image from "next/image";
import Link from "next/link";
import { AUTHOR } from "../lib/seo";

/** Encadré « Écrit par Simon » en fin d'article ou de fiche. */
export default function AuthorBox() {
  return (
    <aside className="author-box" aria-label={`À propos de l'auteur, ${AUTHOR.name}`}>
      <Image className="author-box-photo" src={AUTHOR.photoSmall} alt={AUTHOR.alt} width={64} height={64} loading="lazy" />
      <div>
        <p className="author-box-name">
          <strong>Écrit par {AUTHOR.name}</strong>
        </p>
        <p className="author-box-text">
          Je ne suis ni coach ni professionnel de santé. Tout ce que je partage ici a été testé
          par moi, sur plusieurs années.{" "}
          <Link href={AUTHOR.page} className="lien">En savoir plus sur la démarche</Link>.
        </p>
      </div>
    </aside>
  );
}
