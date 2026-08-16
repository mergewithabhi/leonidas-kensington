import ballotin from "@/assets/collection-ballotin.jpg";
import truffles from "@/assets/collection-truffles.jpg";
import pralines from "@/assets/collection-pralines.jpg";
import hamper from "@/assets/collection-hamper.jpg";
import occasionGifting from "@/assets/occasion-gifting.jpg";
import signature from "@/assets/signature-praline.jpg";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  collection: string;
  type: "Dark" | "Milk" | "White" | "Assorted";
  occasions: string[];
  dietary: string[];
  intensity: number;
  pieces: number;
  rating: number;
  reviews: number;
  badge?: string;
  notes: string[];
  description: string;
  ingredients: string;
  origin: string;
  texture: string;
};

export const products: Product[] = [
  {
    slug: "signature-ballotin-500g",
    name: "Signature Ballotin, 500g",
    tagline: "The house selection, hand-packed to order",
    price: 46,
    image: ballotin,
    collection: "Ballotins",
    type: "Assorted",
    occasions: ["Anniversary", "Thank You", "Wedding", "Corporate Gifts"],
    dietary: ["Gluten Free Options"],
    intensity: 3,
    pieces: 40,
    rating: 4.9,
    reviews: 412,
    badge: "Best Seller",
    notes: ["Praliné hazelnut", "Fresh cream ganache", "Belgian butter caramel"],
    description:
      "Our most loved ballotin. Forty pieces chosen from the full Leonidas repertoire — pralines, manons, gianduja and fresh cream ganaches — packed by hand in the boutique on the morning of dispatch.",
    ingredients: "100% pure cocoa butter, fresh Belgian cream, hazelnuts, almonds, no palm oil.",
    origin: "Made in Belgium",
    texture: "Silken ganache, crisp shell",
  },
  {
    slug: "dark-truffle-collection",
    name: "Dark Truffle Collection",
    tagline: "Seventy-two percent, dusted in cocoa",
    price: 32,
    image: truffles,
    collection: "Truffles",
    type: "Dark",
    occasions: ["Birthday", "Thank You", "Christmas"],
    dietary: ["Vegetarian", "Palm Oil Free"],
    intensity: 5,
    pieces: 24,
    rating: 4.8,
    reviews: 236,
    badge: "New",
    notes: ["Bitter cocoa", "Dark cherry", "Toasted grain"],
    description:
      "A deep, quiet collection for the dark chocolate purist. Ganache whipped with single-origin couverture, rolled by hand and finished in cocoa powder.",
    ingredients: "72% cocoa couverture, fresh cream, pure cocoa butter, no palm oil.",
    origin: "Made in Belgium",
    texture: "Melting, powdery finish",
  },
  {
    slug: "praline-assortment",
    name: "Praliné Assortment",
    tagline: "The original 1913 recipe, still hand-filled",
    price: 28,
    image: pralines,
    collection: "Pralines",
    type: "Assorted",
    occasions: ["Birthday", "Mother's Day", "Congratulations"],
    dietary: ["Vegetarian"],
    intensity: 2,
    pieces: 22,
    rating: 4.9,
    reviews: 519,
    badge: "Best Seller",
    notes: ["Roasted hazelnut", "Vanilla", "Caramelised sugar"],
    description:
      "The praliné that made the house. Hazelnuts and almonds caramelised, stone-ground and folded into pure cocoa butter chocolate.",
    ingredients: "Hazelnuts, almonds, 100% pure cocoa butter, sugar, no palm oil.",
    origin: "Made in Belgium",
    texture: "Smooth, nutty, generous",
  },
  {
    slug: "grand-luxury-hamper",
    name: "Grand Luxury Hamper",
    tagline: "Chocolate, biscuits and a bottle worth opening",
    price: 125,
    image: hamper,
    collection: "Gift Boxes",
    type: "Assorted",
    occasions: ["Wedding", "Corporate Gifts", "Christmas"],
    dietary: ["Contains Alcohol"],
    intensity: 3,
    pieces: 60,
    rating: 5,
    reviews: 88,
    badge: "Limited",
    notes: ["Champagne truffle", "Salted caramel", "Orange peel"],
    description:
      "A hand-woven hamper for the occasions that deserve ceremony. Presented with cream grosgrain ribbon and a handwritten card.",
    ingredients: "Assorted Belgian chocolates, biscuits, sparkling wine.",
    origin: "Made in Belgium, packed in the UK",
    texture: "Varied — a full tasting journey",
  },
  {
    slug: "manon-cafe-box",
    name: "Manon Café Box",
    tagline: "White chocolate, coffee cream, walnut",
    price: 24,
    image: occasionGifting,
    collection: "Manon",
    type: "White",
    occasions: ["Thank You", "Invitation Gifts"],
    dietary: ["Vegetarian", "Contains Nuts"],
    intensity: 1,
    pieces: 16,
    rating: 4.7,
    reviews: 141,
    notes: ["Coffee cream", "Walnut", "Vanilla"],
    description:
      "A Belgian classic: fresh coffee cream and a walnut, enrobed in white chocolate and finished with a fondant curl.",
    ingredients: "White chocolate, fresh cream, coffee, walnuts, no palm oil.",
    origin: "Made in Belgium",
    texture: "Soft, creamy, delicate",
  },
  {
    slug: "chocolate-of-the-month",
    name: "Chocolate of the Month",
    tagline: "A curated box, delivered fresh each month",
    price: 34,
    image: signature,
    collection: "Signature Collection",
    type: "Dark",
    occasions: ["Birthday", "Anniversary", "Congratulations"],
    dietary: ["Palm Oil Free"],
    intensity: 4,
    pieces: 20,
    rating: 4.9,
    reviews: 203,
    badge: "Subscription",
    notes: ["Rotating seasonal", "Single origin", "Chef's selection"],
    description:
      "Our chocolatier selects twenty pieces each month around a single theme — an origin, a season, a technique. Pause or cancel at any time.",
    ingredients: "Varies monthly. Always 100% pure cocoa butter and no palm oil.",
    origin: "Made in Belgium",
    texture: "Chef's choice",
  },
];

export const collections = [
  { name: "Pralines", href: "/shop", image: pralines, copy: "The 1913 original" },
  { name: "Truffles", href: "/shop", image: truffles, copy: "Dark, dusted, melting" },
  { name: "Ballotins", href: "/shop", image: ballotin, copy: "Packed by hand" },
  { name: "Luxury Hampers", href: "/shop", image: hamper, copy: "For grand occasions" },
];

export const occasions = [
  { name: "Birthday", copy: "Mark the year with something made by hand." },
  { name: "Anniversary", copy: "A quiet, elegant way to say it again." },
  { name: "Thank You", copy: "Gratitude, wrapped in cream ribbon." },
  { name: "Wedding", copy: "Favours and table gifts for the day." },
  { name: "Christmas", copy: "The Belgian table, set for winter." },
  { name: "Valentine", copy: "Fourteen pieces. One intention." },
  { name: "Mother's Day", copy: "For the person who taught you taste." },
  { name: "Father's Day", copy: "Dark, strong, unfussy." },
  { name: "Corporate Gifts", copy: "Thoughtful at any scale." },
  { name: "Congratulations", copy: "Because it deserves a moment." },
  { name: "Invitation Gifts", copy: "Never arrive empty-handed." },
  { name: "Just Because", copy: "The best reason there is." },
];

export const trustPoints = [
  "100% Pure Cocoa Butter",
  "No Palm Oil",
  "Belgian Chocolate Since 1913",
  "Sustainable Cocoa",
  "Fresh Weekly Deliveries",
  "Made in Belgium",
  "Luxury Ingredients",
];

export const faqs = [
  {
    q: "How fresh are the chocolates?",
    a: "Every order is packed by hand from stock delivered fresh from Belgium each week. Fresh cream chocolates are best enjoyed within three weeks of dispatch.",
  },
  {
    q: "When will my order arrive?",
    a: "Orders placed before 1pm Monday to Thursday are dispatched the same day on a next-day tracked service. Nominated-day delivery is available at checkout.",
  },
  {
    q: "Do you offer vegan chocolates?",
    a: "Yes. Our dark chocolate range is dairy-free and clearly marked. Filter by Vegan on any collection page to see the full selection.",
  },
  {
    q: "Where can I find allergen information?",
    a: "Full ingredient and allergen declarations appear on every product page and on the printed insert included with each box.",
  },
  {
    q: "How should I store them?",
    a: "Cool, dry and away from direct light, between 12°C and 18°C. Never refrigerate — condensation dulls the shine and blunts the flavour.",
  },
  {
    q: "Can you handle large corporate orders?",
    a: "We do, regularly. Branded ribbon, printed cards, bulk pricing and multi-address dispatch are all available. Request a quote and we'll respond within one working day.",
  },
  {
    q: "Can I include a gift message?",
    a: "Yes — add a handwritten card at checkout at no charge, along with optional gift wrapping in navy or cream.",
  },
  {
    q: "What is your returns policy?",
    a: "As a fresh food producer we cannot accept returns, but if anything arrives less than perfect we will replace or refund it immediately.",
  },
];

export const stores = [
  { city: "London", address: "Piccadilly, Mayfair W1J", hours: "Mon–Sat 9–19, Sun 11–17", phone: "020 7000 1913" },
  { city: "Manchester", address: "King Street, M2", hours: "Mon–Sat 9.30–18, Sun 11–16", phone: "0161 000 1913" },
  { city: "Edinburgh", address: "George Street, EH2", hours: "Mon–Sat 10–18, Sun 12–17", phone: "0131 000 1913" },
  { city: "Birmingham", address: "Colmore Row, B3", hours: "Mon–Sat 9–18, Sun closed", phone: "0121 000 1913" },
  { city: "Brighton", address: "The Lanes, BN1", hours: "Daily 10–19", phone: "01273 001913" },
  { city: "Leeds", address: "Victoria Quarter, LS1", hours: "Mon–Sat 10–18, Sun 11–17", phone: "0113 000 1913" },
];

export const reviews = [
  {
    name: "Eleanor W.",
    location: "London",
    stars: 5,
    text: "The ballotin arrived the next morning, immaculate. My mother said it was the finest chocolate she had eaten in years — and she is not generous with praise.",
  },
  {
    name: "James H.",
    location: "Manchester",
    stars: 5,
    text: "We sent two hundred boxes to clients before Christmas. Branded ribbon, handwritten cards, every address correct. Genuinely faultless.",
  },
  {
    name: "Priya N.",
    location: "Edinburgh",
    stars: 5,
    text: "The dark truffles are extraordinary. You can taste that there is nothing in them but chocolate, cream and care.",
  },
  {
    name: "Thomas R.",
    location: "Bath",
    stars: 5,
    text: "I have been ordering the Chocolate of the Month for a year. It still feels like a small event when the box lands.",
  },
];

export const journal = [
  {
    slug: "the-praline-of-1913",
    category: "Belgian Heritage",
    title: "The praliné of 1913, and why it never changed",
    excerpt:
      "A Greek-American confectioner, a Brussels shopfront and a recipe that outlived a century of fashion.",
    read: "6 min",
  },
  {
    slug: "pairing-chocolate-and-wine",
    category: "Pairing Ideas",
    title: "Pairing Belgian chocolate with wine, whisky and tea",
    excerpt: "Intensity, acidity and temperature — three rules that make almost any pairing work.",
    read: "4 min",
  },
  {
    slug: "corporate-gifting-guide",
    category: "Gift Guides",
    title: "The corporate gifting guide for a considered season",
    excerpt: "How to send two hundred gifts that each feel like one.",
    read: "7 min",
  },
  {
    slug: "inside-the-atelier",
    category: "Behind the Scenes",
    title: "Inside the atelier: a morning with the master chocolatier",
    excerpt: "Tempering at 31°C, and the sound a perfect shell makes when it breaks.",
    read: "5 min",
  },
];