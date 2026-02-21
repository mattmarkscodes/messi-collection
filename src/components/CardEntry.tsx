import type { Card } from "@/data/collection";
import ZoomableImage from "./ZoomableImage";

function placeholderUrl(label: string) {
  return `https://placehold.co/768x1280/png?text=${encodeURIComponent(label)}`;
}

function frontUrl(card: Card) {
  return card.image ?? placeholderUrl(`${card.title} (Front)`);
}

function backUrl(card: Card) {
  return card.imageBack ?? placeholderUrl(`${card.title} (Back)`);
}

export default function CardEntry({ card }: { card: Card }) {
  const isPsa10 = card.grade?.includes("PSA 10");

  return (
    <article className="cardRow">
      <div className="poster" aria-label={`Images for ${card.title}`}>
        <div className="posterGrid">
          <div className="posterFrame">
			  <ZoomableImage src={frontUrl(card)} alt={`${card.title} — Front`} />
			</div>
			<div className="posterFrame">
			  <ZoomableImage src={backUrl(card)} alt={`${card.title} — Back`} />
			</div>
        </div>
      </div>

      <div className="meta">
        <h3 className="cardTitle">{card.title}</h3>

        <div className="badges">
          <span className="badge">{card.tier}</span>
          {card.grade ? <span className="badge">{card.grade}</span> : null}
          {card.serial ? <span className="badge">Numbered: {card.serial}</span> : null}
          {card.psaPop ? (
            <span className="badge">
              {isPsa10 ? "PSA 10 Pop:" : "PSA Pop:"} {card.psaPop}
            </span>
          ) : null}
        </div>

        <p className="roleLine">
          <span className="roleLabel">Role: </span>
          {card.role}
        </p>

        <p className="why">{card.why}</p>
      </div>
    </article>
  );
}
