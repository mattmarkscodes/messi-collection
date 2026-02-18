import type { CollectionSection } from "@/data/collection";
import CardEntry from "./CardEntry";

export default function Section({ section }: { section: CollectionSection }) {
  return (
    <section id={section.id} className="section">
      <div className="sectionBand">
        <div className="sectionHead">
          <h2 className="sectionTitle">{section.title}</h2>
          <p className="sectionDesc">{section.description}</p>
          <p className="sectionDesc">{section.description2}</p>
        </div>
      </div>

      <div className="cards">
        {section.cards.map((card) => (
          <CardEntry key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}


