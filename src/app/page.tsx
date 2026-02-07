"use client";

import { collection } from "@/data/collection";
import { slowScrollTo } from "@/lib/slowScroll";

import Section from "@/components/Section";

export default function Page() {
  return (
    <main className="container">
		<header className="heroBand">
		  <div className="hero heroCentered">
			<h1 className="heroTitle">The Messi Card Collection</h1>

			<p className="subtitle">
			  This collection documents Lionel Messi’s full arc — emergence, ascendency,
			  dominance, international pursuit, credence, culmination, and reverence —
			  using culturally authentic, era-correct, and visually authoritative artifacts,
			  with restraint favored over volume.
			</p>

			<nav className="nav navCentered" aria-label="Sections">
			  {collection.map((s) => (
				<a
				  key={s.id}
				  href={`#${s.id}`}
				  className="pill"
				  onClick={(e) => {
					e.preventDefault();
					slowScrollTo(s.id);
				  }}
				>
				  {s.title}
				</a>
			  ))}
			</nav>

		  </div>
		</header>



      {collection.map((section) => (
        <Section key={section.id} section={section} />
      ))}

    </main>
  );
}
