export type Card = {
  title: string;
  grade?: string;
  tier: string;
  serial?: string;
  role: string;
  why: string;
  psaPop?: string;
  image?: string;
  imageBack?: string;
};

export type CollectionSection = {
  id: string;
  title: string;
  description: string;
  cards: Card[];
};

export const collection: CollectionSection[] = [
  {
    id: "emergence",
    title: "Emergence",
    description:
      "We commence with the era of emergence, a period that captures Messi before his inevitable rise to stardom. These cards document the moments when his talent is undeniable, yet his legacy remains a theoretical concept.\n" +
      "Emergence is characterized by his arrival: the raw energy of youth and the first tangible evidence of an unprecedented talent entering the sport.\n" +
      "Messi’s most sought-after and valuable cards belong to this era. Among them are his 2004-2005 Megacracks cards, including the universally recognized “true rookie” card, the #71bis. This card fetched an astonishing $960K in a PSA 10 grade in September 2025. Luckily, the Megacracks Barcelona team set is a bit more affordable, with the #35 profile, #62 Accion, and #89 Autografo cards.',
    cards: [
      {
        title: "2004-05 Panini Megacracks Barça Campeón #62",
        grade: "PSA 7",
        tier: "Tier 1 (Core Narrative Anchor)",
        role: "Foundational emergence",
        image: "/cards/1_04megacracks_accion.jpg",
        imageBack: "/cards/1_04megacracks_accionb.jpg",
        why:
          "This is the canonical Messi rookie card — culturally authentic, era-correct, and universally recognized as the beginning of the collectible Messi story. The PSA 7 is not a weakness here; it reinforces authenticity. Early Messi cards were handled, traded, loved — this grade signals period correctness, not compromise. Messi’s universally accepted rookie card.",
        psaPop: "554 (7+)",
      },
      {
        title: "2004-05 Panini Megacracks Barça Campeón #89",
        grade: "BGS 8",
        tier: "Tier 1 (Core Narrative Anchor)",
        role: "Emergence confirmed by intent",
        image: "/cards/1_04megacracks_auto.jpg",
        imageBack: "/cards/1_04megacracks_autob.jpg",
        why:
          "The on-card facsimile autograph transforms emergence into acknowledged promise — Messi not just appearing, but being formally documented by the club and the hobby. It’s also crucial that this is Barça-era, early-career, and restrained in design. Nothing here is celebratory yet — it’s quiet confidence.",
      },
    ],
  },
  {
    id: "ascent",
    title: "Ascent",
    description:
      "Ascent represents the phase where Messi stops being a phenomenon and becomes a central force. The promise of Emergence has resolved into responsibility: the club is no longer nurturing him — it is building around him. This section exists to capture transition, not dominance. The climb, not the summit.",
    cards: [
      {
        title: "2010-11 Panini FC Barcelona Stickers – “Autógrafo”",
        grade: "PSA 9",
        tier: "Tier 2 (Essential)",
        role: "Messi becomes the axis",
        image: "/cards/2_2010autografo.jpg",
        imageBack: "/cards/2_2010autografob.jpg",
        why:
          "2010–11 is the critical inflection point — Messi has won his first Ballon d’Or (2009), Barcelona has entered its golden era, and he is no longer one of many stars. Visually it is calm, focused, centered — this is not celebratory imagery. It’s ownership. The autograph (even as facsimile) is symbolic rather than transactional. A PSA 9 here is ideal. A 10 would push it visually toward dominance; a lower grade would undermine the authority this card needs to project.",
        psaPop: "537 (9+)",
      },
    ],
  },
  {
    id: "dominance",
    title: "Dominance",
    description:
      "Dominance represents the period where Messi is no longer proving anything — he is setting the terms of the sport. This is not potential, not ascent, not pursuit. This is the era where outcomes bend around him. Dominance is about accumulation, inevitability, and authority. The game is no longer asking questions of Messi; Messi is answering questions about football itself.",
    cards: [
      {
        title: "2012-13 Panini FC Barcelona Stickers –  “Titulómetro”",
        grade: "PSA 10",
        tier: "Tier 1.5 (Narrative Anchor)",
        role: "Statistical and institutional dominance",
        image: "/cards/3_2012titulometro.jpg",
        imageBack: "/cards/3_2012titulometrob.jpg",
        why:
          "2012–13 is the statistical apex of Messi’s Barcelona years — record-breaking goal totals and relentless silverware. This card visually depicts trophy-in-hand, scoreboard-style achievements running down the side — this is dominance quantified. Panini, La Liga framing, Barça crest — this is how dominance was documented at the time, not retroactively mythologized.",
        psaPop: "14",
      },
      {
        title: "2015-16 Topps UEFA Champions League Showcase #1",
        grade: "PSA 8",
        tier: "Tier 2 (Supporting)",
        role: "Aesthetic and compositional dominance",
        image: "/cards/3_2015uclshowcase.jpg",
        imageBack: "/cards/3_2015uclshowcaseb.jpg",
        why:
          "2015 sits at the mature end of dominance — after multiple Champions Leagues, Ballon d’Ors, and with Messi as unquestioned leader. Calm, composed, armband visible — no celebration, no motion blur. This is someone who expects to win. Where the Titulómetro card shouts with numbers, this card whispers with posture.",
        psaPop: "21 (8+)",
      },
    ],
  },
  {
    id: "international-pursuit",
    title: "International Pursuit",
    description:
      "This section names the long, unresolved chase — greatness already proven at club level, still searching for legitimacy on the world’s biggest stage. This section is about trying, carrying, returning, and enduring. The word pursuit matters because it implies motion without resolution.",
    cards: [
      {
        title: "2006 Panini FIFA World Cup Germany #47",
        grade: "PSA 8",
        tier: "Tier 1 (Core Narrative Anchor)",
        role: "Enters the world stage",
        image: "/cards/4_2006firstwc.jpg",
        imageBack: "/cards/4_2006firstwcb.jpg",
        why:
          "This card captures Messi’s World Cup debut—his first appearance in the tournament that would define his international legacy—marking the beginning of the long, uncertain pursuit that ultimately culminates in 2022, and serving as the irreplaceable starting point of the international arc in the collection.",
        psaPop: "1,275 (8+)",
      },
      {
        title: "2014 Panini Prizm World Cup – World Cup Stars Silver Prizm #1",
        grade: "PSA 8",
        tier: "Tier 2 (Essential)",
        role: "Expectation and burden",
        image: "/cards/4_2014wc1star.jpg",
        imageBack: "/cards/4_2014wc1starb.jpg",
        why:
          "This card represents Messi as the face of Argentina entering Brazil 2014 — the tournament where the weight was heaviest. “World Cup Stars” is aspirational branding, not celebratory — exactly right for this moment. The PSA 8 is correct: this is not about perfection, it’s about responsibility.",
        psaPop: "55 (8+)",
      },
      {
        title: "2018 Panini Prizm World Cup – Red/Blue Wave #1",
        grade: "PSA 10",
        tier: "Tier 1.5 (Narrative Anchor)",
        role: "Persistence without closure",
        image: "/cards/4_2018redblue.jpg",
        imageBack: "/cards/4_2018redblueb.jpg",
        why:
          "2018 is after 2014 disappointment, before 2022 redemption — the most psychologically important stretch. The Red/Blue Wave visually feels unsettled, fractured, unresolved — perfect symbolism. This card quietly says: he’s still here, still trying, still carrying it.",
        psaPop: "165",
      },
    ],
  },
  {
    id: "credence",
    title: "Credence",
    description:
      "Credence is not about achievement; it’s about belief that is no longer questioned. This section exists after doubt and before legacy. It answers the question: Who is allowed to speak with final authority? Credence is granted, not chased.",
    cards: [
      {
        title: "2021-22 Panini Obsidian Soccer - Electric Etch Yellow /10 #1",
        grade: "PSA/DNA Auto 10",
        tier: "Tier 1.5 (Essential)",
        serial: "08/10",
        role: "Authority acknowledging itself",
        image: "/cards/5_2021obsidianauto.jpg",
        imageBack: "/cards/5_2021obsidianautob.jpg",
        why:
          "The on-card after-market autograph is Messi personally asserting authorship. Argentina kit is international context without tournament framing — it’s about identity, not competition. Obsidian design language is monumental, architectural, declarative — this is not ephemeral cardboard. Auto 10 means the signature is clean, confident, unhurried. Serial numbered to /10 emphasizes it's rarity. This is not proof of greatness. This is authority acknowledging itself.",
        psaPop: "1",
      },
    ],
  },
  {
    id: "culmination",
    title: "Culmination",
    description:
      "Culmination is emotional resolution — the world finally catching up to what was always true.",
    cards: [
      {
        title: "2022 Panini Instant World Cup – Messi Finally Gets His Crown #118",
        grade: "PSA 9",
        tier: "Tier 2 (Essential)",
        role: "Legacy fulfilled",
        image: "/cards/6_2022wcqatar.jpg",
        imageBack: "/cards/6_2022wcqatarb.jpg",
        why:
          "The defining image of a legacy fulfilled, capturing triumph and celebration.",
        psaPop: "4,949 (9+)",
      },
      {
        title: "2023 Topps Argentina Fileteado – Champions #CH9",
        grade: "PSA 9",
        tier: "Tier 2 (Essential)",
        role: "National icon framing",
        image: "/cards/6_2023champions.jpg",
        imageBack: "/cards/6_2023championsb.jpg",
        why:
          "A culturally authentic Argentine aesthetic framing Messi as national icon and world champion.",
        psaPop: "45 (9+)",
      },
      {
        title: "2024 Panini Instant Copa América #43",
        grade: "PSA 10",
        tier: "Tier 2 (Essential)",
        role: "Confirmation, not discovery",
        image: "/cards/6_2024copa.jpg",
        imageBack: "/cards/6_2024copab.jpg",
        why:
          "Confirmation rather than discovery — proof that the World Cup victory was not singular or accidental.",
        psaPop: "1,440",
      },
    ],
  },
  {
    id: "reverence",
    title: "Reverence",
    description:
      "Reverence is not about achievement. It is not about dominance, validation, or completion. Reverence exists after the argument is already won. This section captures how the world responds to Messi once debate is over — when moments are commemorated not because they decide history, but because history has already decided.",
    cards: [
      {
        title: "2013 Icons Official Messi – Scoring His First Goal #R2",
        grade: "PSA 10",
        tier: "Tier 1.5 (Anchor)",
        role: "Hindsight sanctifies the beginning",
        image: "/cards/7_2013firstgoal.jpg",
        imageBack: "/cards/7_2013firstgoalb.jpg",
        why:
          "This is not an “Emergence” card — it is a looking-back card, created with hindsight, sanctifying the beginning once the career is underway. The group celebration, not Messi alone, reinforces reverence rather than heroics — this is remembrance, not discovery.",
        psaPop: "3",
      },
      {
        title: "2022-23 Futera PSG Headliners – Red /10 #PH32",
        grade: "PSA 8",
        tier: "Tier 2 (Essential)",
        serial: "02/10",
        role: "Milestone transcending clubs",
        image: "/cards/7_2022_700thgoal.jpg",
        imageBack: "/cards/7_2022_700thgoalb.jpg",
        why:
          "This is not about PSG excellence — it’s about recognition during transition, marking a milestone that transcends clubs. A ceremonial acknowledgment of Messi’s scale as a footballer, captured during a liminal era rather than a peak one.",
        psaPop: "2 (8+)",
      },
      {
        title: "2023 Leaf Web Exclusives — 1st Goal for Inter Miami",
        grade: "PSA 10",
        tier: "Tier 3 (Supporting)",
        role: "Arrival becomes event",
        image: "/cards/7_2023firstmiami.jpg",
        imageBack: "/cards/7_2023firstmiamib.jpg",
        why:
          "This is not about MLS quality; it’s about arrival — the sport bending around Messi, not the other way around. A reverent documentation of Messi’s gravitational effect, where a single goal becomes a cultural event.",
        psaPop: "172",
      },
      {
        title: "2024 Topps Now Argentina — Farewell",
        grade: "PSA 10",
        tier: "Tier 3 (Supporting)",
        role: "Mutual gratitude",
        image: "/cards/7_2024goodbyearg.jpg",
        imageBack: "/cards/7_2024goodbyeargb.jpg",
        why:
          "This is not about winning — it’s about acknowledgment flowing both directions between Messi and Argentina. A quiet, dignified image of mutual gratitude between icon and nation, after all debts were paid.",
        psaPop: "206",
      },
      {
        title: "2025 Topps Now MLS — Back-to-Back MVP",
        grade: "PSA 10",
        tier: "Tier 3 (Supporting)",
        role: "Modern epilogue",
        image: "/cards/7_2025mlsmvp.jpg",
        imageBack: "/cards/7_2025mlsmvpb.jpg",
        why:
          "This card commemorates Messi’s unprecedented back-to-back MLS MVPs, serving as a modern epilogue that honors sustained greatness and influence in his final competitive chapter without altering or competing with the foundational legacy established earlier in the collection.",
        psaPop: "1",
      },
    ],
  },
];

