export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation?: string;
  meals?: string;
  image?: string;
}

export interface SafariPackage {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  days: number;
  nights: number;
  destinations: string[];
  heroImage: string;
  cardImage: string;
  highlight: string;
  description: string;
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  featured?: boolean;
}

export const safariPackages: SafariPackage[] = [
  {
    id: '2-day',
    slug: '2-days-lake-manyara-ngorongoro',
    title: '2 Days / 1 Night – Lake Manyara & Ngorongoro Crater',
    shortTitle: 'Lake Manyara & Ngorongoro',
    days: 2,
    nights: 1,
    destinations: ['Lake Manyara', 'Ngorongoro Crater'],
    heroImage: '/safari packages images/safari-2-days.jpg',
    cardImage: '/safari packages images/safari-2-days.jpg',
    highlight: 'The Big 5 in Africa\'s most stunning volcanic crater',
    description:
      'An intimate two-day journey through two of Tanzania\'s crown jewels. Witness elephant herds and flamingo-fringed shores at Lake Manyara, then descend into the Ngorongoro Crater — a 300 sq km natural amphitheatre home to approximately 30,000 animals.',
    itinerary: [
      {
        day: 1,
        title: 'Lake Manyara National Park – Full Day Game Drive',
        description:
          'Depart from Arusha (approx. 2 hours) to Lake Manyara National Park. Explore large elephant herds, baboons, and a remarkable number of bird species including pink flamingos drawn to the alkaline soda lake. Enjoy diverse habitats — groundwater forest, open grassland, and lakeshore. Overnight at Octagon Lodge.',
        accommodation: 'Octagon Lodge',
        meals: 'Lunch & Dinner',
        image: '/itineraries images/Itinirary image 1.JPG',
      },
      {
        day: 2,
        title: 'Ngorongoro Crater – Half Day Game Drive & Return to Arusha',
        description:
          'Descend into the Ngorongoro Crater (about 1 hour drive). Explore a unique, un-flooded volcanic caldera — 200 km across, 600 m deep, 300 sq km in area. Approximately 30,000 animals live on the crater floor including the Big 5. Depart back to Arusha in the afternoon (approx. 3–4 hours).',
        meals: 'Breakfast & Lunch',
        image: '/itineraries images/Itinirary image 2.JPG',
      },
    ],
    includes: [
      'Accommodation and full board meals',
      '2.5 L mineral water per person/day',
      'Transport & game drives in 4WD pop-up roof Land Cruiser',
      'Professional English-speaking driver guide',
      'Park entrance fees, concession fees & government taxes',
    ],
    excludes: [
      'International and local airfare & flights',
      'Personal items',
      'Gratuities for safari guide and camp staff',
      'Travel insurance, visa and passport fees',
      'Alcoholic and non-alcoholic beverages in lodges',
    ],
    featured: false,
  },
  {
    id: '3-day',
    slug: '3-days-tarangire-manyara-ngorongoro',
    title: '3 Days / 2 Nights – Tarangire, Lake Manyara & Ngorongoro',
    shortTitle: 'Tarangire, Manyara & Ngorongoro',
    days: 3,
    nights: 2,
    destinations: ['Tarangire', 'Lake Manyara', 'Ngorongoro Crater'],
    heroImage: '/safari packages images/safari-3-days.jpg',
    cardImage: '/safari packages images/safari-3-days.jpg',
    highlight: 'Elephants, baobabs, flamingos & the Big 5 in three iconic parks',
    description:
      'Three days covering three of Tanzania\'s most celebrated parks. Begin among Tarangire\'s giant elephants and ancient baobabs, move to Lake Manyara\'s birding paradise, and finish with a descent into the world-famous Ngorongoro Crater.',
    itinerary: [
      {
        day: 1,
        title: 'Tarangire National Park – Full Day Game Drive',
        description:
          'Depart Arusha for Tarangire National Park (2–3 hours). Encounter the highest concentration of elephants in Tanzania, diverse savanna landscape with massive baobab trees, and impressive birdlife. Overnight at Octagon Lodge.',
        accommodation: 'Octagon Lodge',
        meals: 'Lunch & Dinner',
        image: '/itineraries images/Itinirary image 3.JPG',
      },
      {
        day: 2,
        title: 'Lake Manyara National Park – Full Day Game Drive',
        description:
          'Drive to Lake Manyara National Park (approx. 2 hours). Explore large elephant herds, baboons, and a remarkable number of bird species including pink flamingos. Overnight at Octagon Lodge.',
        accommodation: 'Octagon Lodge',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 4.JPG',
      },
      {
        day: 3,
        title: 'Ngorongoro Crater – Half Day Game Drive & Return to Arusha',
        description:
          'Descend into the Ngorongoro Crater for a half-day game drive with approximately 30,000 animals including the Big 5. Depart back to Arusha in the afternoon.',
        meals: 'Breakfast & Lunch',
        image: '/itineraries images/Itinirary image 5.jpg',
      },
    ],
    includes: [
      'Accommodation and full board meals',
      '2.5 L mineral water per person/day',
      'Transport & game drives in 4WD pop-up roof Land Cruiser',
      'Professional English-speaking driver guide',
      'Park entrance fees, concession fees & government taxes',
    ],
    excludes: [
      'International and local airfare & flights',
      'Personal items',
      'Gratuities for safari guide and camp staff',
      'Travel insurance, visa and passport fees',
      'Alcoholic and non-alcoholic beverages in lodges',
    ],
    featured: false,
  },
  {
    id: '4-day',
    slug: '4-days-manyara-serengeti-ngorongoro',
    title: '4 Days / 3 Nights – Manyara, Central Serengeti & Ngorongoro',
    shortTitle: 'Manyara, Serengeti & Ngorongoro',
    days: 4,
    nights: 3,
    destinations: ['Lake Manyara', 'Central Serengeti', 'Ngorongoro Crater'],
    heroImage: '/safari packages images/safari-4-days.jpg',
    cardImage: '/safari packages images/safari-4-days.jpg',
    highlight: 'First glimpse of the iconic Serengeti plains',
    description:
      'Your first taste of the infinite Serengeti. This four-day circuit takes you from Lake Manyara\'s forests and birds to the quintessential acacia-studded savanna of Central Serengeti — home to big cats year-round — then ends with the astonishing Ngorongoro Crater.',
    itinerary: [
      {
        day: 1,
        title: 'Lake Manyara National Park – Full Day Game Drive',
        description:
          'Depart Arusha for Lake Manyara National Park (approx. 2 hours). Explore large elephant herds, baboons, diverse habitats including a soda lake and woodlands. Overnight at Octagon Lodge.',
        accommodation: 'Octagon Lodge',
        meals: 'Lunch & Dinner',
        image: '/itineraries images/Itinirary image 6.jpg',
      },
      {
        day: 2,
        title: 'Central Serengeti – Afternoon Game Drive',
        description:
          'Drive to Serengeti National Park (4–5 hours). Afternoon game drive through the most popular region of the reserve, with abundant wildlife and large numbers of big cats. Quintessential acacia-studded savanna. Overnight at Serengeti KatiKati Tented Camp.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 7.jpg',
      },
      {
        day: 3,
        title: 'Central Serengeti – Full Day Game Drive',
        description:
          'A full day exploring the enormous and beautiful Serengeti, searching for lions, cheetahs, leopards, elephants and the vast herds of wildebeest. Overnight at Serengeti KatiKati Tented Camp.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 8.jpg',
      },
      {
        day: 4,
        title: 'Ngorongoro Crater – Half Day Game Drive & Return to Arusha',
        description:
          'Descend into the Ngorongoro Crater for a half-day game drive. Approximately 30,000 animals on the crater floor including the Big 5. Return to Arusha in the afternoon.',
        meals: 'Breakfast & Lunch',
        image: '/itineraries images/Itinirary image 9.jpg',
      },
    ],
    includes: [
      'Accommodation and full board meals',
      '2.5 L mineral water per person/day',
      'Transport & game drives in 4WD pop-up roof Land Cruiser',
      'Professional English-speaking driver guide',
      'Park entrance fees, concession fees & government taxes',
    ],
    excludes: [
      'International and local airfare & flights',
      'Personal items',
      'Gratuities for safari guide and camp staff',
      'Travel insurance, visa and passport fees',
      'Alcoholic and non-alcoholic beverages in lodges',
    ],
    featured: true,
  },
  {
    id: '5-day',
    slug: '5-days-tarangire-serengeti-ngorongoro',
    title: '5 Days / 4 Nights – Tarangire, Southern & Central Serengeti, Ngorongoro',
    shortTitle: 'Tarangire, Serengeti & Ngorongoro',
    days: 5,
    nights: 4,
    destinations: ['Tarangire', 'Southern Serengeti', 'Central Serengeti', 'Ngorongoro'],
    heroImage: '/safari packages images/safari-5-days.jpg',
    cardImage: '/safari packages images/safari-5-days.jpg',
    highlight: 'Calving season wildebeest migration in Southern Serengeti',
    description:
      'Five days spanning two Serengeti ecosystems. Visit Tarangire\'s elephant country, then follow the Great Migration south — where December to March brings the calving season with wildebeest calves, abundant predators, and extraordinary game viewing.',
    itinerary: [
      {
        day: 1,
        title: 'Tarangire National Park – Full Day Game Drive',
        description:
          'Depart Arusha for Tarangire National Park (2–3 hours). Encounter the highest concentration of elephants in Tanzania, massive baobab trees and impressive birdlife. Overnight at Octagon Lodge.',
        accommodation: 'Octagon Lodge',
        meals: 'Lunch & Dinner',
        image: '/itineraries images/Itinirary image.jpg',
      },
      {
        day: 2,
        title: 'Southern Serengeti (Ndutu) – Afternoon Game Drive',
        description:
          'Drive to Southern Serengeti (4–5 hours). December–March: the Great Migration calving season. Abundant wildebeest, zebras, and resident predators including lions and cheetahs. Overnight at Ndutu Migration Camp.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 11.jpg',
      },
      {
        day: 3,
        title: 'Southern Serengeti – Full Day & Transfer to Central Serengeti',
        description:
          'Full day game drive in the southern Serengeti experiencing the migration until sunset. Later depart to Central Serengeti (approx. 2 hours). Overnight at Serengeti KatiKati Tented Camp.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 12.jpg',
      },
      {
        day: 4,
        title: 'Central Serengeti – Full Day Game Drive',
        description:
          'Full day exploring the central Serengeti — big cats, elephants, and vast herds of wildlife across the classic acacia savanna landscape. Overnight at Serengeti KatiKati Tented Camp.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 14.jpg',
      },
      {
        day: 5,
        title: 'Ngorongoro Crater – Half Day Game Drive & Return to Arusha',
        description:
          'Descend into the Ngorongoro Crater for a half-day game drive with the Big 5. Return to Arusha in the afternoon.',
        meals: 'Breakfast & Lunch',
        image: '/itineraries images/Itinirary image 15.jpg',
      },
    ],
    includes: [
      'Accommodation and full board meals',
      '2.5 L mineral water per person/day',
      'Transport & game drives in 4WD pop-up roof Land Cruiser',
      'Professional English-speaking driver guide',
      'Park entrance fees, concession fees & government taxes',
    ],
    excludes: [
      'International and local airfare & flights',
      'Personal items',
      'Gratuities for safari guide and camp staff',
      'Travel insurance, visa and passport fees',
      'Alcoholic and non-alcoholic beverages in lodges',
    ],
    featured: true,
  },
  {
    id: '8-day',
    slug: '8-days-manyara-serengeti-ngorongoro',
    title: '8 Days / 7 Nights – Lake Manyara, Central & Northern Serengeti, Ngorongoro',
    shortTitle: 'Manyara, Full Serengeti & Ngorongoro',
    days: 8,
    nights: 7,
    destinations: ['Lake Manyara', 'Central Serengeti', 'Northern Serengeti', 'Olduvai Gorge', 'Ngorongoro'],
    heroImage: '/safari packages images/safari-8-days.jpg',
    cardImage: '/safari packages images/safari-8-days.jpg',
    highlight: 'Witness the Great Migration river crossings in Northern Serengeti',
    description:
      'Eight unforgettable days tracing the full sweep of Tanzania\'s Northern Circuit. From Manyara\'s canopy walkway to the drama of the Mara River crossings in the north, plus a historic stop at Olduvai Gorge — the cradle of mankind — before the finale at Ngorongoro.',
    itinerary: [
      {
        day: 1,
        title: 'Lake Manyara – Full Day Game Drive & Canopy Walkway',
        description:
          'Drive to Lake Manyara (approx. 2 hours). Full day game drive exploring elephant herds, baboons and flamingos. Optional treetop canopy walkway through the forest. Overnight at Octagon Lodge.',
        accommodation: 'Octagon Lodge',
        meals: 'Lunch & Dinner',
        image: '/itineraries images/Itinirary image 1.JPG',
      },
      {
        day: 2,
        title: 'Central Serengeti – Afternoon Game Drive',
        description:
          'Drive to Serengeti National Park (4–5 hours). Afternoon game drive through central Serengeti. Overnight at Serengeti KatiKati Tented Camp.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 2.JPG',
      },
      {
        day: 3,
        title: 'Central Serengeti – Full Day Game Drive',
        description:
          'Full day exploring central Serengeti — lions, leopards, cheetahs, elephants and vast wildlife herds. Overnight at Serengeti KatiKati Tented Camp.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 3.JPG',
      },
      {
        day: 4,
        title: 'Northern Serengeti – Game Drive (Migration Experience)',
        description:
          'Drive north (3–4 hours) with en-route game drive. Follow the spectacular wildebeest migration crossing the Mara River to Masai Mara. Overnight at Mara KatiKati Tented Camp.',
        accommodation: 'Mara KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 4.JPG',
      },
      {
        day: 5,
        title: 'Northern Serengeti – Follow the Migration',
        description:
          'Full day game drive in Northern Serengeti experiencing the remarkable migration event until sunset. Overnight at Mara KatiKati Tented Camp.',
        accommodation: 'Mara KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 5.jpg',
      },
      {
        day: 6,
        title: 'Northern Serengeti Morning & Return to Central Serengeti',
        description:
          'Half day game drive in Northern Serengeti until noon. En-route game drive south back to Central Serengeti. Overnight at Serengeti KatiKati Tented Camp.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 6.jpg',
      },
      {
        day: 7,
        title: 'Olduvai Gorge – The Cradle of Mankind & Ngorongoro Crater Rim',
        description:
          'Drive to the legendary Olduvai Gorge (3–4 hours) — a UNESCO paleoanthropological site with rich fossil discoveries that shaped our understanding of early human evolution. Overnight on the crater rim at Ngorongoro Kuhama Camp.',
        accommodation: 'Ngorongoro Kuhama Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 7.jpg',
      },
      {
        day: 8,
        title: 'Ngorongoro Crater – Game Drive & Return to Arusha',
        description:
          'Descend into the Ngorongoro Crater for a full game drive. Approximately 30,000 animals including the Big 5. Return to Arusha in the afternoon.',
        meals: 'Breakfast & Lunch',
        image: '/itineraries images/Itinirary image 8.jpg',
      },
    ],
    includes: [
      'Accommodation and full board meals',
      '2.5 L mineral water per person/day',
      'Transport & game drives in 4WD pop-up roof Land Cruiser',
      'Professional English-speaking driver guide',
      'Park entrance fees, concession fees & government taxes',
    ],
    excludes: [
      'International and local airfare & flights',
      'Personal items',
      'Gratuities for safari guide and camp staff',
      'Travel insurance, visa and passport fees',
      'Alcoholic and non-alcoholic beverages in lodges',
    ],
    featured: true,
  },
  {
    id: '10-day',
    slug: '10-days-best-of-tanzania',
    title: '10 Days / 9 Nights – Best of Tanzania Northern Circuit Safari',
    shortTitle: 'Best of Tanzania',
    days: 10,
    nights: 9,
    destinations: ['Tarangire', 'Central Serengeti', 'Northern Serengeti', 'Olduvai Gorge', 'Ngorongoro', 'Lake Manyara'],
    heroImage: '/safari packages images/serengeti.jpg',
    cardImage: '/safari packages images/serengeti.jpg',
    highlight: 'The definitive Tanzania safari — every icon, every ecosystem',
    description:
      'The crown jewel of Emmy Safaris. Ten days covering every landmark of the Northern Circuit: Tarangire\'s elephants, the full Serengeti from central to northern migration country, the ancient Olduvai Gorge, the Big 5 crater of Ngorongoro, and the flamingo shores of Lake Manyara with an authentic Maasai cultural experience.',
    itinerary: [
      {
        day: 1,
        title: 'Tarangire National Park – Game Drive',
        description:
          'Depart Arusha (2–3 hours) to Tarangire. High concentration of elephants, baobab trees, rich birdlife. Overnight at Octagon Lodge.',
        accommodation: 'Octagon Lodge',
        meals: 'Lunch & Dinner',
        image: '/itineraries images/Itinirary image 1.JPG',
      },
      {
        day: 2,
        title: 'Central Serengeti – Afternoon Game Drive',
        description:
          'Drive to Serengeti (4–5 hours). Afternoon game drive in Central Serengeti. Overnight at Serengeti KatiKati Tented Camp.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 2.JPG',
      },
      {
        day: 3,
        title: 'Central Serengeti – Full Day Game Drive',
        description:
          'Full day game drive in Central Serengeti — lions, leopards, cheetahs and the classic savanna. Overnight at Serengeti KatiKati Tented Camp.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 3.JPG',
      },
      {
        day: 4,
        title: 'Northern Serengeti – Migration Experience',
        description:
          'Drive north (3–4 hours) following the Great Migration — wildebeest and zebras crossing the Mara River. Overnight at Mara KatiKati Tented Camp.',
        accommodation: 'Mara KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 4.JPG',
      },
      {
        day: 5,
        title: 'Northern Serengeti – Full Day Migration',
        description:
          'Full day exploring the remarkable migration event. Overnight at Mara KatiKati Tented Camp.',
        accommodation: 'Mara KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 5.jpg',
      },
      {
        day: 6,
        title: 'Northern Serengeti – Another Full Day with the Migration',
        description:
          'Another full day game drive following the migration. Overnight at Mara KatiKati Tented Camp.',
        accommodation: 'Mara KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 6.jpg',
      },
      {
        day: 7,
        title: 'Northern Serengeti Morning & Return to Central Serengeti',
        description:
          'Morning game drive until noon. En-route game drive back south to Central Serengeti. Overnight at Serengeti KatiKati Tented Camp.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 7.jpg',
      },
      {
        day: 8,
        title: 'Olduvai Gorge & Ngorongoro Crater Rim',
        description:
          'Visit the legendary Olduvai Gorge paleoanthropological site. Overnight on the crater rim at Ngorongoro Kuhama Camp.',
        accommodation: 'Ngorongoro Kuhama Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 8.jpg',
      },
      {
        day: 9,
        title: 'Ngorongoro Crater – Game Drive & Transfer to Karatu',
        description:
          'Descend into Ngorongoro Crater. The Big 5 in one of the world\'s most spectacular natural arenas. Transfer to Octagon Lodge, Karatu.',
        accommodation: 'Octagon Lodge',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 9.jpg',
      },
      {
        day: 10,
        title: 'Lake Manyara, Maasai Cultural Tour & Return to Arusha',
        description:
          'Game drive at Lake Manyara, then an authentic Maasai cultural experience — learn about customs, dress, and social structure. Depart back to Arusha in the afternoon.',
        meals: 'Breakfast & Lunch',
        image: '/itineraries images/Itinirary image 11.jpg',
      },
    ],
    includes: [
      'Accommodation and full board meals',
      '2.5 L mineral water per person/day',
      'Transport & game drives in 4WD pop-up roof Land Cruiser',
      'Professional English-speaking driver guide',
      'Park entrance fees, concession fees & government taxes',
    ],
    excludes: [
      'International and local airfare & flights',
      'Personal items',
      'Gratuities for safari guide and camp staff',
      'Travel insurance, visa and passport fees',
      'Alcoholic and non-alcoholic beverages in lodges',
    ],
    featured: true,
  },
];
