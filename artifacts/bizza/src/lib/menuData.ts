export interface MenuItem {
  id: string;
  category: string;
  categoryId: string;
  name: string;
  price: number;
}

export const categories = [
  { id: "plats", title: "Les Plats Principaux", subtitle: "الأطباق الرئيسية" },
  { id: "entrees", title: "Entrées du Monde", subtitle: "المقبلات" },
  { id: "soupes", title: "Soupes", subtitle: "الشوربات" },
  { id: "poissons", title: "Escale Poisson", subtitle: "محطة الأسماك" },
];

export const menuItems: MenuItem[] = [
  { id: "e1", categoryId: "entrees", category: "Entrées du Monde", name: "Crème de Potiron", price: 400 },
  { id: "e2", categoryId: "entrees", category: "Entrées du Monde", name: "Bisque de Crevette", price: 500 },
  { id: "e3", categoryId: "entrees", category: "Entrées du Monde", name: "Bourek Crevette (2 Pièces)", price: 550 },
  { id: "e4", categoryId: "entrees", category: "Entrées du Monde", name: "Vitello Tonné", price: 1150 },
  { id: "e5", categoryId: "entrees", category: "Entrées du Monde", name: "Ceviché Daurade / Avocat", price: 1800 },
  { id: "e6", categoryId: "entrees", category: "Entrées du Monde", name: "Tartare Avocat au Saumon", price: 1900 },

  { id: "s1", categoryId: "soupes", category: "Soupes", name: "Soupe de Poisson", price: 600 },

  { id: "p1", categoryId: "poissons", category: "Escale Poisson", name: "Daurade en Portefeuille", price: 1600 },
  { id: "p2", categoryId: "poissons", category: "Escale Poisson", name: "Paget à la Plancha", price: 1600 },
  { id: "p3", categoryId: "poissons", category: "Escale Poisson", name: "Spaghetti aux Crevettes", price: 1600 },
  { id: "p4", categoryId: "poissons", category: "Escale Poisson", name: "Sepia en Sauce", price: 1800 },
  { id: "p5", categoryId: "poissons", category: "Escale Poisson", name: "Saumon à la Plancha", price: 2200 },
  { id: "p6", categoryId: "poissons", category: "Escale Poisson", name: "Espadon à la Palermitaine", price: 2400 },
  { id: "p7", categoryId: "poissons", category: "Escale Poisson", name: "Espadon à la Braise", price: 2400 },
  { id: "p8", categoryId: "poissons", category: "Escale Poisson", name: "Saumon Sauce Dieppoise", price: 2400 },
  { id: "p9", categoryId: "poissons", category: "Escale Poisson", name: "Crevette à la Provençale", price: 2400 },
  { id: "p10", categoryId: "poissons", category: "Escale Poisson", name: "Crevette à la Braise", price: 2400 },
  { id: "p11", categoryId: "poissons", category: "Escale Poisson", name: "Crevette Sautée à l'Ail", price: 2400 },

  { id: "m1", categoryId: "plats", category: "Les Plats Principaux", name: "Aadja Mergaz", price: 1100 },
  { id: "m2", categoryId: "plats", category: "Les Plats Principaux", name: "Côte d'Agneau Merguez", price: 1100 },
  { id: "m3", categoryId: "plats", category: "Les Plats Principaux", name: "Tavuk Sis", price: 1200 },
  { id: "m4", categoryId: "plats", category: "Les Plats Principaux", name: "Köfte Tavuk Sis", price: 1200 },
  { id: "m5", categoryId: "plats", category: "Les Plats Principaux", name: "Wok de Bœuf", price: 1400 },
  { id: "m6", categoryId: "plats", category: "Les Plats Principaux", name: "Poulet au Citron Confit", price: 1400 },
  { id: "m7", categoryId: "plats", category: "Les Plats Principaux", name: "Poulet Tikka Massala", price: 1600 },
  { id: "m8", categoryId: "plats", category: "Les Plats Principaux", name: "Dina Sis Kebab", price: 1600 },
  { id: "m9", categoryId: "plats", category: "Les Plats Principaux", name: "Kuzu Sis Kebab", price: 1600 },
  { id: "m10", categoryId: "plats", category: "Les Plats Principaux", name: "Fettuccine au Saumon", price: 1600 },
  { id: "m11", categoryId: "plats", category: "Les Plats Principaux", name: "Lapin à l'Espagnole", price: 1800 },
  { id: "m12", categoryId: "plats", category: "Les Plats Principaux", name: "Tadjine Zuzu", price: 2000 },
  { id: "m13", categoryId: "plats", category: "Les Plats Principaux", name: "Tadjine Poisson", price: 2400 },
  { id: "m14", categoryId: "plats", category: "Les Plats Principaux", name: "Bœuf Stroganov", price: 2400 },
  { id: "m15", categoryId: "plats", category: "Les Plats Principaux", name: "Blanquette de Bœuf", price: 2400 },
  { id: "m16", categoryId: "plats", category: "Les Plats Principaux", name: "Méchoui Maison", price: 2500 },
  { id: "m17", categoryId: "plats", category: "Les Plats Principaux", name: "Juge d'Agneau Farcie", price: 2800 },
];

export function formatPrice(price: number): string {
  return `${price.toLocaleString("fr-DZ")} DA`;
}
