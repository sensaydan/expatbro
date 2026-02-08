// Blog topic templates for each category
// We'll generate ~500 posts by combining locations with topics

export const locations = [
  { country: "Mexico", cities: ["Mexico City", "Guadalajara", "Playa del Carmen", "Oaxaca", "Merida", "Puerto Vallarta", "San Miguel de Allende", "Queretaro", "Cancun", "Tulum"] },
  { country: "Colombia", cities: ["Medellin", "Bogota", "Cartagena", "Cali", "Barranquilla", "Santa Marta", "Bucaramanga"] },
  { country: "Venezuela", cities: ["Caracas", "Margarita Island", "Merida", "Valencia", "Maracaibo"] },
  { country: "Brazil", cities: ["Sao Paulo", "Rio de Janeiro", "Florianopolis", "Fortaleza", "Salvador", "Brasilia", "Curitiba", "Belo Horizonte", "Porto Alegre", "Recife"] },
];

export const topicTemplates = {
  "cost-of-living": [
    "Complete Cost of Living Guide for {city} in 2026",
    "How Much Does It Really Cost to Live in {city}?",
    "{city} Budget Breakdown: Monthly Expenses for Expats",
    "Cheap vs Expensive: What Your Money Gets You in {city}",
    "Is {city} Still Affordable? 2026 Reality Check",
    "Living Like a Local vs Expat in {city}: Cost Comparison",
    "Hidden Costs Nobody Tells You About Living in {city}",
    "{city} vs {altCity}: Which is More Affordable?",
    "How to Live on $1500/Month in {city}",
    "Luxury Living in {city}: What Does $4000/Month Get You?",
  ],
  "neighborhoods": [
    "Best Neighborhoods in {city} for Expats (2026 Guide)",
    "Where to Live in {city}: Neighborhood by Neighborhood",
    "The Best Area in {city} for Digital Nomads",
    "Safe Neighborhoods in {city}: An Honest Assessment",
    "{city} Neighborhoods to Avoid (And Why)",
    "Best Neighborhoods in {city} for Nightlife",
    "Family-Friendly Areas in {city}",
    "Up-and-Coming Neighborhoods in {city} (Before They Get Expensive)",
    "Best Neighborhoods in {city} for Walking and Biking",
    "Where Do Rich Locals Live in {city}?",
  ],
  "visas": [
    "Complete {country} Visa Guide for Americans (2026)",
    "How to Get a Digital Nomad Visa in {country}",
    "{country} Tourist Visa: Everything You Need to Know",
    "How to Extend Your Stay in {country} (Legal Options)",
    "Getting Residency in {country}: Step by Step",
    "{country} Retirement Visa Requirements",
    "Work Visa Options in {country}",
    "What Happens If You Overstay Your Visa in {country}",
    "{country} Border Run Guide: Is It Still Worth It?",
    "Investor Visa in {country}: Requirements and Process",
  ],
  "dating": [
    "Dating in {city}: What Expats Need to Know",
    "How to Meet People in {city} (Beyond Dating Apps)",
    "Dating Culture in {country}: Expectations and Etiquette",
    "Best Dating Apps in {city} That Actually Work",
    "The Reality of Dating as a Foreigner in {city}",
    "Where to Meet Quality Women in {city}",
    "Dating Red Flags to Watch Out for in {country}",
    "Language Barriers in Dating: {country} Edition",
    "Long-term Relationships with Locals in {country}",
    "The Passport Bro Scene in {city}: An Honest Take",
  ],
  "safety": [
    "Is {city} Safe? An Honest Assessment for 2026",
    "Safety Tips for Living in {city}",
    "Areas to Avoid in {city} (And What to Do If You End Up There)",
    "Crime in {city}: What the Statistics Don't Tell You",
    "How to Stay Safe in {city} at Night",
    "Scams Targeting Expats in {city}",
    "Safety Comparison: {city} vs Other {country} Cities",
    "Personal Safety Gear I Use Living in {city}",
    "What to Do If You're Robbed in {city}",
    "Women's Safety in {city}: What Female Expats Say",
  ],
  "food": [
    "Best Food in {city}: A Complete Guide",
    "Street Food in {city} You Have to Try",
    "Best Restaurants in {city} for Every Budget",
    "Where Locals Eat in {city} (Not Tourist Traps)",
    "Grocery Shopping in {city}: Where and What to Buy",
    "Best Coffee Shops in {city} for Remote Work",
    "Vegetarian and Vegan Options in {city}",
    "Food Delivery Apps in {city}: What Works Best",
    "Cooking at Home in {city}: Finding Ingredients",
    "{country} Food Culture: What to Know Before You Go",
  ],
  "nightlife": [
    "Nightlife Guide to {city}: Best Bars and Clubs",
    "Best Bars in {city} for Meeting People",
    "Underground Scene in {city}: Where Locals Party",
    "Rooftop Bars in {city} Worth Visiting",
    "Best Clubs in {city} (And How to Get In)",
    "Day Drinking in {city}: Best Spots",
    "Live Music Scene in {city}",
    "Craft Beer in {city}: Best Breweries and Bars",
    "Late Night Eats in {city}",
    "Is {city} Nightlife Overrated? Honest Review",
  ],
  "coworking": [
    "Best Coworking Spaces in {city} (2026 Update)",
    "Coworking vs Coffee Shops in {city}: Where to Work",
    "Internet Speed in {city}: What to Expect",
    "Remote Work Setup in {city}: Complete Guide",
    "Best Cafes for Working in {city}",
    "Coworking Prices in {city}: What You'll Pay",
    "Building a Network as a Remote Worker in {city}",
    "Tech Scene in {city}: Opportunities and Community",
    "Best Neighborhoods in {city} for Remote Workers",
    "Coworking Space Reviews: My Top Picks in {city}",
  ],
  "apartments": [
    "How to Find an Apartment in {city} (Step by Step)",
    "Apartment Rental Prices in {city} by Neighborhood",
    "Airbnb vs Long-term Rental in {city}",
    "Red Flags When Apartment Hunting in {city}",
    "Best Websites for Finding Apartments in {city}",
    "Furnished vs Unfurnished Rentals in {city}",
    "Negotiating Rent in {city}: What Works",
    "Rental Contracts in {country}: What to Look For",
    "Getting Your Deposit Back in {country}",
    "Best Buildings and Complexes in {city} for Expats",
  ],
  "banking": [
    "Opening a Bank Account in {country} as a Foreigner",
    "Best Banks in {country} for Expats",
    "How to Transfer Money to {country}",
    "Crypto in {country}: What You Need to Know",
    "Credit Cards That Work Well in {country}",
    "ATM Fees and Cash Withdrawal Tips in {country}",
    "Wise vs Traditional Banks for Living in {country}",
    "Managing Money Across Borders: {country} Edition",
    "Tax Implications of Living in {country}",
    "Emergency Money Access in {country}",
  ],
  "language": [
    "Learning {language} in {city}: Best Options",
    "How Much {language} Do You Need to Live in {city}?",
    "{language} Slang in {country} You Should Know",
    "Best {language} Schools in {city}",
    "{language} for Expats: Fastest Ways to Learn",
    "Can You Get By with English in {city}?",
    "Dating Without Speaking {language}: Is It Possible?",
    "Business {language} in {country}: Key Phrases",
    "Regional {language} Differences in {country}",
    "Language Exchange in {city}: How to Find Partners",
  ],
  "culture": [
    "Culture Shock in {country}: What to Expect",
    "Making Local Friends in {city}",
    "{country} Customs and Etiquette for Foreigners",
    "Holidays and Festivals in {country}",
    "Work-Life Balance in {country} vs USA",
    "What {country} People Think of Americans",
    "Dating Norms in {country} That Surprised Me",
    "Family Culture in {country}: What Expats Should Know",
    "Religion in {country} and How It Affects Daily Life",
    "Gender Roles in {country}: Expectations and Reality",
  ],
};

export const languages: Record<string, string> = {
  Mexico: "Spanish",
  Colombia: "Spanish",
  Venezuela: "Spanish",
  Brazil: "Portuguese",
};

// Generate all topic combinations
export function generateAllTopics(): Array<{
  title: string;
  country: string;
  city?: string;
  category: string;
  slug: string;
}> {
  const topics: Array<{
    title: string;
    country: string;
    city?: string;
    category: string;
    slug: string;
  }> = [];

  for (const location of locations) {
    const country = location.country;
    const language = languages[country];

    // Country-level topics (visas, banking, culture, language)
    for (const category of ["visas", "banking", "language", "culture"]) {
      const templates = topicTemplates[category as keyof typeof topicTemplates];
      for (const template of templates) {
        const title = template
          .replace(/{country}/g, country)
          .replace(/{language}/g, language);

        if (!title.includes("{city}")) {
          const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

          topics.push({
            title,
            country,
            category,
            slug,
          });
        }
      }
    }

    // City-level topics
    for (const city of location.cities) {
      for (const category of Object.keys(topicTemplates)) {
        const templates = topicTemplates[category as keyof typeof topicTemplates];
        for (const template of templates) {
          if (template.includes("{city}") || !["visas", "banking", "language", "culture"].includes(category)) {
            // Pick an alt city for comparison posts
            const altCity = location.cities.find((c) => c !== city) || location.cities[0];

            const title = template
              .replace(/{city}/g, city)
              .replace(/{country}/g, country)
              .replace(/{language}/g, language)
              .replace(/{altCity}/g, altCity);

            const slug = title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "");

            topics.push({
              title,
              country,
              city,
              category,
              slug,
            });
          }
        }
      }
    }
  }

  return topics;
}

// Get total count
const allTopics = generateAllTopics();
console.log(`Total topics generated: ${allTopics.length}`);

// Sample output
console.log("\nSample topics:");
for (let i = 0; i < 10; i++) {
  const idx = Math.floor(Math.random() * allTopics.length);
  console.log(`- ${allTopics[idx].title} (${allTopics[idx].category})`);
}
