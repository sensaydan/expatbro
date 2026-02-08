export interface City {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  costOfLiving: string;
  internetSpeed: string;
  climate: string;
  safety: string;
  highlights: string[];
  neighborhoods: { name: string; vibe: string }[];
}

export interface Country {
  name: string;
  slug: string;
  emoji: string;
  tagline: string;
  description: string;
  visaInfo: string;
  languages: string[];
  currency: string;
  cities: City[];
}

export const countries: Country[] = [
  {
    name: "Mexico",
    slug: "mexico",
    emoji: "🇲🇽",
    tagline: "The Ultimate Base for North Americans",
    description: "Mexico is the easiest win for Americans looking to escape. Same timezone, quick flights home, incredible food, low cost of living, and a 180-day tourist visa that's trivially easy to renew. CDMX has become the digital nomad capital of the Americas for good reason.",
    visaInfo: "180-day tourist visa on arrival. Renewable with a border hop. Temporary resident visa available for 1-4 years if you can show income ($2,500/mo) or savings ($43k). Permanent residency after 4 years.",
    languages: ["Spanish", "Some English in expat areas"],
    currency: "Mexican Peso (MXN)",
    cities: [
      {
        name: "Mexico City",
        slug: "cdmx",
        tagline: "The Best City in the Americas",
        description: "CDMX is a world-class metropolis with the cost of living of a developing country. Incredible restaurants, museums, nightlife, and a massive expat community. If you can only pick one place to try, this is it.",
        costOfLiving: "$1,500 - $3,000/month",
        internetSpeed: "50-200 Mbps",
        climate: "Eternal spring (15-25°C year round)",
        safety: "Safe in good neighborhoods. Use common sense.",
        highlights: [
          "World-class food scene (from street tacos to fine dining)",
          "Roma/Condesa are walkable, beautiful neighborhoods", 
          "Massive cultural offerings — museums, galleries, music",
          "Easy flights to US/Canada",
          "Thriving tech and startup scene",
        ],
        neighborhoods: [
          { name: "Roma Norte", vibe: "Hip, walkable, great cafes and bars" },
          { name: "Condesa", vibe: "Leafy, upscale, young professionals" },
          { name: "Polanco", vibe: "Luxury, expensive, corporate" },
          { name: "Coyoacán", vibe: "Bohemian, artsy, more local" },
          { name: "Juárez", vibe: "Central, gay-friendly, gentrifying" },
        ],
      },
      {
        name: "Guadalajara",
        slug: "guadalajara",
        tagline: "Mexico's Tech Hub",
        description: "Mexico's second city and its Silicon Valley. More traditional than CDMX, great weather, lower costs, and a growing startup ecosystem. Perfect if you want Mexico without the chaos of the capital.",
        costOfLiving: "$1,200 - $2,500/month",
        internetSpeed: "50-150 Mbps",
        climate: "Warm and dry (20-30°C)",
        safety: "Generally safe. Avoid certain outskirts.",
        highlights: [
          "Lower costs than CDMX",
          "Growing tech scene — Oracle, Intel, HP offices",
          "Tequila country (day trip to distilleries)",
          "Beautiful historic center",
          "Beach access within 4 hours",
        ],
        neighborhoods: [
          { name: "Providencia", vibe: "Upscale, safe, walkable" },
          { name: "Americana", vibe: "Trendy, cafes, expat-friendly" },
          { name: "Chapultepec", vibe: "Nightlife, young crowd" },
        ],
      },
      {
        name: "Playa del Carmen",
        slug: "playa-del-carmen",
        tagline: "Beach Life, Expat Style",
        description: "Caribbean beaches with decent infrastructure. More developed than other beach towns, good for those who want ocean access without sacrificing convenience. Gets touristy — locals call it 'Gringolandia' for a reason.",
        costOfLiving: "$1,800 - $3,500/month",
        internetSpeed: "30-100 Mbps",
        climate: "Hot and humid (25-35°C)",
        safety: "Tourist areas safe. Some cartel presence in region.",
        highlights: [
          "Beautiful beaches",
          "Good restaurant and bar scene",
          "Easy access to Cancún airport",
          "Cenotes and Mayan ruins nearby",
          "Large international community",
        ],
        neighborhoods: [
          { name: "Centro", vibe: "Walking distance to beach, lively" },
          { name: "Playacar", vibe: "Gated, quiet, family-friendly" },
        ],
      },
      {
        name: "Oaxaca",
        slug: "oaxaca",
        tagline: "Culture & Mezcal",
        description: "For those who want authentic Mexico. Incredible indigenous culture, the best food in the country, mezcal everywhere, and a creative/artistic community. Slower pace, lower costs, higher authenticity.",
        costOfLiving: "$1,000 - $2,000/month",
        internetSpeed: "20-50 Mbps",
        climate: "Mild and dry (15-28°C)",
        safety: "Very safe. Chill vibe.",
        highlights: [
          "Best food in Mexico (mole, tlayudas, mezcal)",
          "Strong indigenous culture",
          "Artist and creative community",
          "Beautiful colonial architecture",
          "Monte Albán ruins",
        ],
        neighborhoods: [
          { name: "Centro Histórico", vibe: "Colonial, walkable, touristy" },
          { name: "Jalatlaco", vibe: "Quiet, local, charming" },
        ],
      },
    ],
  },
  {
    name: "Colombia",
    slug: "colombia",
    emoji: "🇨🇴",
    tagline: "The Hidden Gem of South America",
    description: "Colombia has transformed in the last 20 years. Perfect weather in Medellín, Caribbean vibes in Cartagena, and increasingly good digital nomad infrastructure. The people are famously friendly, and the cost of living is excellent.",
    visaInfo: "90-day tourist visa on arrival, extendable to 180 days. Digital Nomad Visa available (2 years) if you can show $3,000/mo income. Investor and retirement visas also options.",
    languages: ["Spanish", "Very little English outside Bogotá/Cartagena"],
    currency: "Colombian Peso (COP)",
    cities: [
      {
        name: "Medellín",
        slug: "medellin",
        tagline: "City of Eternal Spring",
        description: "Perfect weather 365 days a year. Once infamous, now a model of urban transformation. Huge digital nomad community, great nightlife, affordable living. The Pablo Escobar tours are tacky — skip them.",
        costOfLiving: "$1,200 - $2,500/month",
        internetSpeed: "50-200 Mbps",
        climate: "Perfect — 18-28°C year round",
        safety: "Safe in good areas. Avoid Comuna 13 at night.",
        highlights: [
          "Best climate on Earth",
          "Massive expat and nomad community",
          "Excellent nightlife scene",
          "Modern metro system",
          "Friendly, beautiful people",
        ],
        neighborhoods: [
          { name: "El Poblado", vibe: "Expat central, nightlife, safe" },
          { name: "Laureles", vibe: "More local, cheaper, still nice" },
          { name: "Envigado", vibe: "Residential, quiet, family-friendly" },
        ],
      },
      {
        name: "Bogotá",
        slug: "bogota",
        tagline: "The Underrated Capital",
        description: "People skip Bogotá for Medellín, which is a mistake. It's colder (2,600m altitude), but it's also more cosmopolitan, with better food, culture, and business opportunities. Less touristy, more real.",
        costOfLiving: "$1,300 - $2,800/month",
        internetSpeed: "50-150 Mbps",
        climate: "Cool and rainy (8-18°C)",
        safety: "Use caution. Some areas are sketchy.",
        highlights: [
          "Cultural capital — museums, theaters, galleries",
          "Best restaurant scene in Colombia",
          "Business and startup hub",
          "International airport",
          "Zona Rosa nightlife",
        ],
        neighborhoods: [
          { name: "Chapinero", vibe: "Hip, gay-friendly, cafes" },
          { name: "Zona Rosa", vibe: "Upscale, nightlife, business" },
          { name: "La Candelaria", vibe: "Historic, artsy, backpacker" },
        ],
      },
      {
        name: "Cartagena",
        slug: "cartagena",
        tagline: "Caribbean Colonial Beauty",
        description: "Stunning walled colonial city on the Caribbean. Hot as hell but gorgeous. More touristy and expensive than other Colombian cities. Great for a visit, harder as a long-term base.",
        costOfLiving: "$1,500 - $3,000/month",
        internetSpeed: "30-80 Mbps",
        climate: "Hot and humid (28-35°C)",
        safety: "Safe in tourist areas. Watch for petty theft.",
        highlights: [
          "UNESCO World Heritage old town",
          "Caribbean beaches and islands",
          "Colonial architecture",
          "Great seafood",
          "Romantic vibes",
        ],
        neighborhoods: [
          { name: "Old Town (Centro)", vibe: "Colonial, beautiful, pricey" },
          { name: "Getsemaní", vibe: "Artsy, nightlife, gentrifying" },
          { name: "Bocagrande", vibe: "High-rises, beach, hotels" },
        ],
      },
    ],
  },
  {
    name: "Venezuela",
    slug: "venezuela",
    emoji: "🇻🇪",
    tagline: "The Road Less Traveled",
    description: "Yes, Venezuela. The country everyone warns you about. Here's the truth: if you know what you're doing, it's incredibly cheap, stunningly beautiful, and the people are among the warmest you'll meet. Not for beginners.",
    visaInfo: "90-day tourist visa on arrival for most nationalities. Extensions possible. The country runs on USD — bring cash. Banking is complicated.",
    languages: ["Spanish", "Very little English"],
    currency: "Bolívar (worthless) / USD (what everyone uses)",
    cities: [
      {
        name: "Caracas",
        slug: "caracas",
        tagline: "The Capital — High Risk, High Reward",
        description: "Caracas is not for the faint-hearted. It's chaotic, can be dangerous, and infrastructure is hit-or-miss. But it's also where the culture is, where the best restaurants are, and where you'll find the most interesting people.",
        costOfLiving: "$800 - $2,000/month",
        internetSpeed: "Variable — 10-50 Mbps",
        climate: "Warm (20-30°C year round)",
        safety: "Exercise serious caution. Know the areas. Go with locals.",
        highlights: [
          "Incredibly cheap if you have USD",
          "Beautiful women (yes, really)",
          "Amazing arepas and cachapas",
          "Mountain backdrop",
          "Genuine cultural experience",
        ],
        neighborhoods: [
          { name: "Altamira", vibe: "Upscale, safest, expats" },
          { name: "Las Mercedes", vibe: "Dining, nightlife" },
          { name: "El Hatillo", vibe: "Quiet, village feel" },
        ],
      },
      {
        name: "Margarita Island",
        slug: "margarita",
        tagline: "Caribbean Paradise on the Cheap",
        description: "Venezuela's beach destination. White sand, warm water, and prices that will shock you (in a good way). Much safer than the mainland. The closest thing to a relaxed Caribbean vacation at developing-world prices.",
        costOfLiving: "$600 - $1,500/month",
        internetSpeed: "10-30 Mbps (spotty)",
        climate: "Hot and dry (28-35°C)",
        safety: "Safer than mainland. Still be aware.",
        highlights: [
          "Stunning Caribbean beaches",
          "Insanely cheap",
          "Kite surfing world-class",
          "Local Venezuelan vacation vibe",
          "Fresh seafood for nothing",
        ],
        neighborhoods: [
          { name: "Porlamar", vibe: "Main town, shops, restaurants" },
          { name: "Pampatar", vibe: "Colonial, quieter" },
          { name: "El Yaque", vibe: "Kite surfing hub" },
        ],
      },
    ],
  },
  {
    name: "Brazil",
    slug: "brazil",
    emoji: "🇧🇷",
    tagline: "The Giant of South America",
    description: "Brazil is massive — a continent unto itself. Portuguese (not Spanish) is essential. The culture is unique — more African influence, different rhythms, different food. If you crack the code, there's nowhere like it.",
    visaInfo: "90-day tourist visa on arrival for most. Digital Nomad Visa available (1 year) with $1,500/mo income proof. The bureaucracy is legendary — bring patience.",
    languages: ["Portuguese", "Very little English or Spanish"],
    currency: "Brazilian Real (BRL)",
    cities: [
      {
        name: "São Paulo",
        slug: "sao-paulo",
        tagline: "The Economic Powerhouse",
        description: "South America's New York. Massive, chaotic, expensive by Brazilian standards, but with world-class culture, food, and business opportunities. Not a vacation destination — a place to work and make things happen.",
        costOfLiving: "$1,800 - $4,000/month",
        internetSpeed: "100-300 Mbps",
        climate: "Mild (15-28°C)",
        safety: "Be careful. Street crime is real. Use Uber, not taxis.",
        highlights: [
          "Business and finance hub of LATAM",
          "Best restaurant scene in South America",
          "Incredible nightlife (underground to upscale)",
          "Major international airport",
          "Art and culture everywhere",
        ],
        neighborhoods: [
          { name: "Jardins", vibe: "Upscale, safe, expensive" },
          { name: "Vila Madalena", vibe: "Artsy, nightlife, young" },
          { name: "Pinheiros", vibe: "Hip, foodie, craft beer" },
        ],
      },
      {
        name: "Rio de Janeiro",
        slug: "rio",
        tagline: "The Cidade Maravilhosa",
        description: "The most beautiful city on Earth. Christ the Redeemer, Sugarloaf, Copacabana, Ipanema — the postcards don't lie. Also more dangerous than São Paulo if you're not careful. Worth it if you respect the game.",
        costOfLiving: "$1,500 - $3,500/month",
        internetSpeed: "50-150 Mbps",
        climate: "Hot and humid (22-35°C)",
        safety: "High crime. Know where to go and where not to. Never flash wealth.",
        highlights: [
          "Stunning natural beauty",
          "Beach culture and lifestyle",
          "Carnival (if you can handle it)",
          "Samba, bossa nova, pagode",
          "Carioca vibes",
        ],
        neighborhoods: [
          { name: "Ipanema", vibe: "Upscale beach, beautiful people" },
          { name: "Leblon", vibe: "Quieter, family-friendly, expensive" },
          { name: "Copacabana", vibe: "Classic, touristy, seedier at night" },
          { name: "Botafogo", vibe: "Up-and-coming, young, cheaper" },
        ],
      },
      {
        name: "Florianópolis",
        slug: "florianopolis",
        tagline: "Beach Life Meets Tech",
        description: "An island in southern Brazil with 42 beaches. Brazil's emerging tech hub. Better infrastructure, safer than Rio, beautiful nature. Colder in winter. Popular with Argentine and Brazilian tourists.",
        costOfLiving: "$1,300 - $2,800/month",
        internetSpeed: "50-100 Mbps",
        climate: "Subtropical (15-30°C, cold winters)",
        safety: "Safest major city in Brazil.",
        highlights: [
          "42 beaches on one island",
          "Growing tech startup scene",
          "Great seafood (oysters!)",
          "Surfing and outdoor lifestyle",
          "Safer than other Brazilian cities",
        ],
        neighborhoods: [
          { name: "Centro", vibe: "Urban, convenient, less scenic" },
          { name: "Lagoa da Conceição", vibe: "Bohemian, lake, nightlife" },
          { name: "Campeche", vibe: "Surf, chill, young crowd" },
        ],
      },
    ],
  },
];

export function getCountry(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getCity(countrySlug: string, citySlug: string): City | undefined {
  const country = getCountry(countrySlug);
  return country?.cities.find((c) => c.slug === citySlug);
}
