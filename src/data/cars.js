/**
 * @typedef {Object} Car
 * @property {string} id - unique slug
 * @property {string} name
 * @property {string} year
 * @property {string} shortDescription
 * @property {string} coverImage - URL/path of main image
 * @property {string[]} gallery
 * @property {string} content - Markdown-formatted full description
 * @property {Object} specs - Key technical specifications
 */

/** @type {Car[]} */
export const cars = [
  {
    id: 'alfa-romeo-duetto',
    name: 'Alfa Romeo Spider "Duetto"',
    year: '1966-1969',
    shortDescription: "Romanticismo puro, \"Dolce Vita\" e libertà. L'auto resa immortale dal film Il Laureato.",
    coverImage: '/src/assets/alfa-duetto.webp',
    gallery: [],
    content: "L'atmosfera che crea: Romanticismo puro, \"Dolce Vita\" e libertà. È l'auto resa immortale dal film Il Laureato. Perfetta per una coppia di sposi, evoca immagini di fughe d'amore lungo coste panoramiche e colline assolate. Il suo design sinuoso e inconfondibile la rende incredibilmente fotogenica.\n\nIdeale per: Matrimoni, fughe romantiche, tour panoramici per coppie.",
    specs: {
      engine: '1.6L Bialbero',
      power: '109 CV',
      seats: '2',
    }
  },
  {
    id: 'fiat-500',
    name: 'Fiat 500 D/F/L',
    year: '1960-1972',
    shortDescription: "Simpatia, allegria e un tocco di nostalgia chic. L'icona italiana amata da tutti.",
    coverImage: '/src/assets/fiat-500.jpg',
    gallery: [],
    content: "L'atmosfera che crea: Simpatia, allegria e un tocco di nostalgia chic. Il Cinquino è un'icona italiana amata da tutti. È l'auto che fa sorridere chiunque la veda passare. Nella sua semplicità è incredibilmente stilosa e perfetta per eventi con un'atmosfera più rilassata, vintage o country-chic.\n\nIdeale per: Matrimoni a tema vintage, shooting fotografici divertenti, eventi promozionali.",
    specs: {
      engine: '499cc Bicilindrico',
      power: '18 CV',
      seats: '4',
    }
  },
  {
    id: 'jaguar-e-type',
    name: 'Jaguar E-Type',
    year: '1961-1975',
    shortDescription: "Eleganza assoluta, lusso e classe senza tempo. Spesso definita l'auto più bella del mondo.",
    coverImage: '/src/assets/jaguar-e-type.jpg',
    gallery: [],
    content: "L'atmosfera che crea: Eleganza assoluta, lusso e classe senza tempo. Spesso definita l'auto più bella del mondo, la E-Type è una vera e propria scultura su ruote. Il suo cofano lunghissimo e le sue linee fluide comunicano un senso di prestigio e raffinatezza ineguagliabili. È una scelta di grande impatto.\n\nIdeale per: Eventi di lusso, matrimoni formali, clienti che desiderano il massimo dell'eleganza.",
    specs: {
      engine: '4.2L 6-cilindri in linea',
      power: '265 CV',
      seats: '2',
    }
  },
  {
    id: 'vw-maggiolino-cabriolet',
    name: 'Volkswagen Maggiolino Cabriolet',
    year: '1960-1979',
    shortDescription: "Spensieratezza, stile bohémien e un senso di avventura on the road.",
    coverImage: '/src/assets/vw-maggiolino.jpg',
    gallery: [],
    content: "L'atmosfera che crea: Spensieratezza, stile bohémien e un senso di avventura on the road. Come la 500, è un'icona pop, ma con un respiro più internazionale e un'aria da figli dei fiori. La versione cabriolet è perfetta per godersi il viaggio e per foto piene di gioia.\n\nIdeale per: Matrimoni a tema boho-chic o informali, addii al nubilato/celibato, tour estivi.",
    specs: {
      engine: '1.6L Boxer',
      power: '50 CV',
      seats: '4',
    }
  },
  {
    id: 'citroen-ds',
    name: 'Citroën DS Pallas',
    year: '1955-1975',
    shortDescription: "Avanguardia, design intellettuale e comfort regale. Soprannominata La Dea.",
    coverImage: '/src/assets/citroen-ds.png',
    gallery: [],
    content: "L'atmosfera che crea: Avanguardia, design intellettuale e comfort regale. Soprannominata La Dea (dal francese Déesse), la DS sembrava un'astronave al suo debutto. Ancora oggi, il suo stile è unico e ricercato. Con le sue famose sospensioni idropneumatiche, offre un comfort di marcia leggendario. È l'auto per chi vuole distinguersi con originalità e cultura.\n\nIdeale per: Eventi legati al mondo del design o dell'arte, matrimoni per coppie non convenzionali, produzioni cinematografiche.",
    specs: {
      engine: '2.1L 4-cilindri',
      power: '109 CV',
      seats: '5',
    }
  },
  {
    id: 'lancia-fulvia-coupe',
    name: 'Lancia Fulvia Coupé',
    year: '1965-1976',
    shortDescription: "Stile da gentleman driver, sportività discreta e classe italiana per intenditori.",
    coverImage: '/src/assets/lancia-fulvia.avif',
    gallery: [],
    content: "L'atmosfera che crea: Stile da gentleman driver, sportività discreta e classe italiana. Meno appariscente della E-Type e meno scontata dell'Alfa Spider, la Fulvia Coupé è un capolavoro di equilibrio e design. È l'auto per l'intenditore, per chi apprezza l'eleganza sobria e le belle meccaniche.\n\nIdeale per: L'arrivo dello sposo, eventi aziendali di classe, tour per appassionati di motori.",
    specs: {
      engine: '1.3L V4',
      power: '90 CV',
      seats: '2+2',
    }
  }
];