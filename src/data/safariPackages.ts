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
    id: '5-day-wildebeest-calving',
    slug: '5-days-wildebeest-calving-safari',
    title: '5 Days / 4 Nights – Wildebeest Calving Safari',
    shortTitle: 'Wildebeest Calving Safari',
    days: 5,
    nights: 4,
    destinations: ['Ndutu', 'Ngorongoro Crater'],
    heroImage: '/The one wildbeast .jpg',
    cardImage: '/The one wildbeast .jpg',
    highlight: 'Witness the dramatic wildebeest calving season on the Ndutu plains',
    description:
      'Witness one of nature’s most dramatic events — the wildebeest calving season — on this 5-day safari in the Ndutu region of the Ngorongoro Conservation Area. Each year, hundreds of thousands of wildebeest give birth on the short-grass plains, attracting predators and offering unforgettable wildlife encounters. Combined with a visit to the Ngorongoro Crater, home to the Big Five, this itinerary delivers a front-row seat to the circle of life on the African savannah. Perfect for travelers with limited time who don’t want to miss this seasonal spectacle.',
    itinerary: [
      {
        day: 1,
        title: 'Arusha City – Ngorongoro Crater',
        description:
          'Depart from Arusha and drive to the Ngorongoro Conservation Area. Enjoy stunning views over the crater rim and settle into your lodge on the rim for the night.',
        accommodation: 'Ngorongoro Kuhama Camp',
        meals: 'Lunch & Dinner',
        image: '/itineraries images/Itinirary image 1.JPG',
      },
      {
        day: 2,
        title: 'Ngorongoro Crater – Ndutu',
        description:
          'Descend into the Ngorongoro Crater for a half-day game drive among the Big 5. After lunch, drive to the Ndutu area to position yourself for the calving season action.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 2.JPG',
      },
      {
        day: 3,
        title: 'Ndutu Ngorongoro – Full Day Game Drive',
        description:
          'Spend a full day exploring the Ndutu plains during calving season. Witness hundreds of thousands of wildebeest giving birth, attracting lions, cheetahs, and hyenas.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 3.JPG',
      },
      {
        day: 4,
        title: 'Ndutu Ngorongoro – Full Day Game Drive',
        description:
          'Another full day immersed in the calving season. Watch predator-prey interactions unfold across the short-grass plains as zebra and wildebeest herds move in search of fresh grazing.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 4.JPG',
      },
      {
        day: 5,
        title: 'Ndutu – Arusha Airport',
        description:
          'Enjoy a final morning game drive in Ndutu before driving back to Arusha Airport for your onward flight.',
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
    featured: true,
  },
  {
    id: '8-day-tanzania-migration',
    slug: '8-days-tanzania-migration-safari',
    title: '8 Days / 7 Nights – Tanzania Migration Safari',
    shortTitle: 'Tanzania Migration Safari',
    days: 8,
    nights: 7,
    destinations: ['Tarangire', 'Ngorongoro Crater', 'Ndutu', 'Serengeti'],
    heroImage: '/wildbeast packages.jpg',
    cardImage: '/wildbeast packages.jpg',
    highlight: 'Follow the Great Migration through Tarangire, Ngorongoro, Ndutu and Serengeti',
    description:
      'Witness one of nature’s greatest spectacles — the Great Migration — on this unforgettable Tanzanian adventure. Over 8 days, journey through Tarangire, Ngorongoro Crater, Ndutu, and the world-famous Serengeti, where wildebeest and zebra move in breathtaking numbers across the plains. Along the way, encounter elephants, lions, buffalo, cheetahs, and more, while staying in carefully selected safari camps that place you right at the heart of the action.',
    itinerary: [
      {
        day: 1,
        title: 'Kilimanjaro International Airport – Arusha',
        description:
          'Arrive at Kilimanjaro International Airport. Meet your safari guide and transfer to your hotel in Arusha for overnight.',
        accommodation: 'Octagon Lodge',
        meals: 'Dinner',
        image: '/itineraries images/Itinirary image 6.jpg',
      },
      {
        day: 2,
        title: 'Arusha – Tarangire National Park',
        description:
          'Drive to Tarangire National Park. Encounter the highest concentration of elephants in Tanzania, massive baobab trees and impressive birdlife. Overnight at Octagon Lodge.',
        accommodation: 'Octagon Lodge',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 7.jpg',
      },
      {
        day: 3,
        title: 'Tarangire – Ngorongoro',
        description:
          'Morning game drive in Tarangire, then drive to the Ngorongoro Conservation Area. Overnight on the crater rim with spectacular views.',
        accommodation: 'Ngorongoro Kuhama Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 8.jpg',
      },
      {
        day: 4,
        title: 'Ndutu Ngorongoro – Southern Serengeti',
        description:
          'Descend into Ngorongoro Crater for a half-day game drive, then drive to the Ndutu area in the Southern Serengeti to follow the migration.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 9.jpg',
      },
      {
        day: 5,
        title: 'Ndutu Area – Full Day Game Drive',
        description:
          'A full day exploring the Ndutu plains. Depending on the season, witness the calving season or the build-up of the great herds before they move north.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 11.jpg',
      },
      {
        day: 6,
        title: 'Ndutu – Central Serengeti',
        description:
          'Drive north into Central Serengeti with en-route game drives. Classic acacia-studded savanna and abundant big cats await.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 12.jpg',
      },
      {
        day: 7,
        title: 'Central Serengeti – Full Day Game Drive',
        description:
          'Full day game drive in Central Serengeti searching for lions, leopards, cheetahs, elephants and the vast herds of wildebeest.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 14.jpg',
      },
      {
        day: 8,
        title: 'Seronera Airstrip – Arusha',
        description:
          'Morning game drive in Serengeti, then transfer to Seronera Airstrip for your flight back to Arusha.',
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
    id: '6-day-tanzania-migration',
    slug: '6-days-tanzania-migration-safari',
    title: '6 Days / 5 Nights – Tanzania Migration Safari',
    shortTitle: 'Great Migration Safari',
    days: 6,
    nights: 5,
    destinations: ['Ngorongoro Crater', 'Ndutu', 'Serengeti'],
    heroImage: '/the wildebeast.jpg',
    cardImage: '/the wildebeast.jpg',
    highlight: 'Experience the wonder of the Great Migration in six unforgettable days',
    description:
      'Experience the wonder of the Great Migration in just six unforgettable days. Begin your adventure at the wildlife-rich Ngorongoro Crater, then head to Ndutu — the heart of the migration — where thousands of wildebeest and zebra gather and give birth on the open plains. Continue into the legendary Serengeti, where vast herds, roaming predators, and endless horizons create a true safari spectacle.',
    itinerary: [
      {
        day: 1,
        title: 'Arusha – Ngorongoro',
        description:
          'Depart Arusha and drive to the Ngorongoro Conservation Area. Overnight on the crater rim with panoramic views.',
        accommodation: 'Ngorongoro Kuhama Camp',
        meals: 'Lunch & Dinner',
        image: '/itineraries images/Itinirary image 1.JPG',
      },
      {
        day: 2,
        title: 'Ndutu Ngorongoro – Southern Serengeti',
        description:
          'Descend into Ngorongoro Crater for a game drive among the Big 5, then continue to the Ndutu area to witness the migration herds.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 2.JPG',
      },
      {
        day: 3,
        title: 'Ndutu Area – Full Day Game Drive',
        description:
          'Full day exploring the Ndutu plains. Watch wildebeest, zebra and the predators that follow them across the golden grasslands.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 3.JPG',
      },
      {
        day: 4,
        title: 'Ndutu – Central Serengeti',
        description:
          'Drive from Ndutu to Central Serengeti with game viewing en route. Arrive at your camp in the heart of big-cat territory.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 4.JPG',
      },
      {
        day: 5,
        title: 'Central Serengeti – Full Day Game Drive',
        description:
          'A full day in Central Serengeti. Search for lions, leopards, cheetahs and the great herds that define this iconic landscape.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 5.jpg',
      },
      {
        day: 6,
        title: 'Seronera Airstrip – Arusha',
        description:
          'Final morning game drive in Serengeti, then transfer to Seronera Airstrip for your flight back to Arusha.',
        meals: 'Breakfast & Lunch',
        image: '/itineraries images/Itinirary image 6.jpg',
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
    id: '5-day-serengeti-great-migration',
    slug: '5-days-serengeti-great-migration-safari',
    title: '5 Days / 4 Nights – Serengeti Great Migration Safari',
    shortTitle: 'Serengeti Great Migration Safari',
    days: 5,
    nights: 4,
    destinations: ['Ngorongoro Crater', 'Serengeti National Park', 'North Mara'],
    heroImage: '/wildbeast image.jpg',
    cardImage: '/wildbeast image.jpg',
    highlight: 'Follow the Great Migration through the iconic Serengeti plains',
    description:
      'Serengeti Great Migration has been listed as one of the Seven Natural Wonders of the World. Not only does it offer incredible views of the plains dotted with huge herds of wildebeest, zebra, and gazelle, but the rivers are often infested with large Nile crocodiles lying in wait. Some of the best safari opportunities in the world are found here. Visiting the right area in the right season will treat travellers to astonishing sightings of this natural phenomenon. These migratory herds also attract the attention of some of the continent’s most renowned predators.',
    itinerary: [
      {
        day: 1,
        title: 'Arusha – Ngorongoro Crater',
        description:
          'Depart Arusha and drive to Ngorongoro Crater. Overnight on the crater rim with breathtaking views of the caldera below.',
        accommodation: 'Ngorongoro Kuhama Camp',
        meals: 'Lunch & Dinner',
        image: '/itineraries images/Itinirary image 7.jpg',
      },
      {
        day: 2,
        title: 'Ngorongoro Crater – Serengeti National Park',
        description:
          'Descend into Ngorongoro Crater for a half-day game drive among the Big 5. After lunch, drive into the Serengeti with en-route game viewing.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 8.jpg',
      },
      {
        day: 3,
        title: 'Serengeti National Park – North Mara',
        description:
          'Drive north to the Kogatende area near the Mara River. Depending on the season, witness the dramatic river crossings as wildebeest brave the crocodile-infested waters.',
        accommodation: 'Mara KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 9.jpg',
      },
      {
        day: 4,
        title: 'Serengeti National Park – North Mara',
        description:
          'Another full day in Northern Serengeti. Follow the migration herds and watch for thrilling predator action along the riverbanks.',
        accommodation: 'Mara KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 11.jpg',
      },
      {
        day: 5,
        title: 'Kogatende Airstrip – Arusha – Kilimanjaro International Airport',
        description:
          'Morning game drive in Northern Serengeti, then transfer to Kogatende Airstrip for your flight to Arusha and connection to Kilimanjaro International Airport.',
        meals: 'Breakfast & Lunch',
        image: '/itineraries images/Itinirary image 12.jpg',
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
    id: '4-day-wildebeest-calving',
    slug: '4-days-wildebeest-calving-safari',
    title: '4 Days / 3 Nights – Wildebeest Calving Safari',
    shortTitle: '4-Day Wildebeest Calving',
    days: 4,
    nights: 3,
    destinations: ['Ndutu', 'Ngorongoro'],
    heroImage: '/safari packages images/safari opackage images 2.jpg',
    cardImage: '/safari packages images/safari opackage images 2.jpg',
    highlight: 'Short on time? Witness the calving season in just four action-packed days',
    description:
      'Short on time but eager to witness one of Africa’s greatest wildlife spectacles? This 4-day safari takes you straight to the heart of the wildebeest calving season in Ndutu, where thousands of newborn calves attract big cats and dramatic predator-prey encounters. With game drives across the open plains and a visit to the Ngorongoro Crater — home to an incredible density of wildlife — this itinerary delivers an action-packed safari in just a few days.',
    itinerary: [
      {
        day: 1,
        title: 'Arusha City – Ndutu',
        description:
          'Depart Arusha and drive directly to the Ndutu area. Afternoon game drive to witness the beginning of the calving season action.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Lunch & Dinner',
        image: '/itineraries images/Itinirary image 14.jpg',
      },
      {
        day: 2,
        title: 'Ndutu Ngorongoro – Full Day',
        description:
          'Full day game drive on the Ndutu plains. Watch thousands of wildebeest give birth while predators lurk nearby, creating unforgettable wildlife drama.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 15.jpg',
      },
      {
        day: 3,
        title: 'Ndutu Ngorongoro – Full Day',
        description:
          'Another full day immersed in the calving season. Explore the open grasslands and follow the herds as they move in search of fresh grazing.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 1.JPG',
      },
      {
        day: 4,
        title: 'Ndutu – Arusha Airport',
        description:
          'Enjoy a final sunrise game drive in Ndutu before driving back to Arusha Airport for your onward journey.',
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
    id: '5-day-wildebeest-migration-calving',
    slug: '5-days-wildebeest-migration-calving-safari',
    title: '5 Days / 4 Nights – Wildebeest Migration Calving Safari',
    shortTitle: 'Wildebeest Migration Calving Safari',
    days: 5,
    nights: 4,
    destinations: ['Lake Ndutu', 'Southern Serengeti', 'Central Serengeti', 'Ngorongoro Crater'],
    heroImage: '/safari packages images/cultural tours.jpg',
    cardImage: '/safari packages images/cultural tours.jpg',
    highlight: 'Follow the Great Migration calving season from December to April',
    description:
      'The Great Wildebeest Calving Migration Safari has been designed specifically to focus on following the Great Serengeti Wildebeest migration during calving from December to April. The areas to be covered are Lake Ndutu area, as well as the Southern and Central areas of Serengeti National Park where the majority of the wildebeest are usually found. A visit to the world famous Ngorongoro Crater is part of this safari as well. Predator action is at its peak with great sightings of cheetah, lion, hyena and leopard.',
    itinerary: [
      {
        day: 1,
        title: 'Arusha – Ndutu Area',
        description:
          'Depart Arusha and drive to the Ndutu area in the Ngorongoro Conservation Area. Afternoon game drive to witness the herds gathering on the plains.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Lunch & Dinner',
        image: '/itineraries images/Itinirary image 3.JPG',
      },
      {
        day: 2,
        title: 'Ndutu Area – Full Day Calving Season',
        description:
          'A full day on the Ndutu plains during calving season. Watch wildebeest give birth and predators take advantage of the vulnerable newborns.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 4.JPG',
      },
      {
        day: 3,
        title: 'Ndutu – Central Serengeti',
        description:
          'Drive from Ndutu into Central Serengeti with game viewing en route. Search for big cats and the vast herds that define this legendary ecosystem.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 5.jpg',
      },
      {
        day: 4,
        title: 'Central Serengeti – Ngorongoro Crater',
        description:
          'Morning game drive in Central Serengeti, then drive to the Ngorongoro Crater rim for overnight with stunning crater views.',
        accommodation: 'Ngorongoro Kuhama Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 6.jpg',
      },
      {
        day: 5,
        title: 'Ngorongoro Crater – Arusha',
        description:
          'Descend into Ngorongoro Crater for a morning game drive among the Big 5. After lunch, drive back to Arusha.',
        meals: 'Breakfast & Lunch',
        image: '/itineraries images/Itinirary image 7.jpg',
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
    id: '7-day-tanzania-migration',
    slug: '7-days-tanzania-migration-safari',
    title: '7 Days / 6 Nights – Tanzania Migration Safari',
    shortTitle: '7-Day Tanzania Migration Safari',
    days: 7,
    nights: 6,
    destinations: ['Tarangire', 'Ngorongoro', 'Ndutu', 'Serengeti'],
    heroImage: '/safari packages images/rhino-ngorongoro.jpg',
    cardImage: '/safari packages images/rhino-ngorongoro.jpg',
    highlight: 'A front-row seat to the Great Migration in one perfect week',
    description:
      'Discover the magic of the Great Migration on this 7-day adventure through Tanzania’s most iconic landscapes. From the elephant-filled plains of Tarangire to the wildlife-rich Ngorongoro Crater, and onward to the Ndutu area where wildebeest give birth during the migration, every day brings unforgettable encounters. Your journey continues into the vast Serengeti, home to breathtaking wildlife action and endless savannah horizons.',
    itinerary: [
      {
        day: 1,
        title: 'Arusha – Tarangire',
        description:
          'Depart Arusha and drive to Tarangire National Park. Famous for its elephant herds and ancient baobab trees. Overnight near the park.',
        accommodation: 'Octagon Lodge',
        meals: 'Lunch & Dinner',
        image: '/itineraries images/Itinirary image 8.jpg',
      },
      {
        day: 2,
        title: 'Tarangire – Ngorongoro',
        description:
          'Morning game drive in Tarangire, then drive to the Ngorongoro Conservation Area. Overnight on the crater rim.',
        accommodation: 'Ngorongoro Kuhama Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 9.jpg',
      },
      {
        day: 3,
        title: 'Ndutu Ngorongoro – Southern Serengeti',
        description:
          'Descend into Ngorongoro Crater for a game drive, then continue to the Ndutu area to witness the migration herds on the short-grass plains.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 11.jpg',
      },
      {
        day: 4,
        title: 'Ndutu Area – Full Day Game Drive',
        description:
          'Full day exploring the Ndutu plains. Experience the calving season or the build-up of the herds, with predators never far behind.',
        accommodation: 'Ndutu Migration Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 12.jpg',
      },
      {
        day: 5,
        title: 'Ndutu – Central Serengeti',
        description:
          'Drive north to Central Serengeti with en-route game drives. Classic savanna landscapes and excellent big-cat sightings await.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 14.jpg',
      },
      {
        day: 6,
        title: 'Central Serengeti – Full Day Game Drive',
        description:
          'A full day in Central Serengeti. Track lions, leopards, cheetahs and the massive wildebeest herds across the endless plains.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 15.jpg',
      },
      {
        day: 7,
        title: 'Seronera Airstrip – Arusha',
        description:
          'Final morning game drive, then transfer to Seronera Airstrip for your flight back to Arusha.',
        meals: 'Breakfast & Lunch',
        image: '/itineraries images/Itinirary image 1.JPG',
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
  },
  {
    id: '9-day-bush-to-beach',
    slug: '9-days-wildlife-safari-zanzibar-beach-holiday',
    title: '9 Days / 8 Nights – Wildlife Safari & Zanzibar Beach Holiday',
    shortTitle: 'Bush to Beach Safari & Zanzibar',
    days: 9,
    nights: 8,
    destinations: ['Tarangire', 'Serengeti', 'Ngorongoro', 'Zanzibar'],
    heroImage: '/safari packages images/selous-lion.jpg',
    cardImage: '/safari packages images/selous-lion.jpg',
    highlight: 'The ultimate Tanzania adventure — wildlife safari followed by Zanzibar beach bliss',
    description:
      'Experience the best of both worlds on this unforgettable 9-day journey. Begin with thrilling wildlife safaris in Tarangire, Serengeti, and Ngorongoro Crater, where Africa’s most iconic animals roam free. Then unwind on the pristine white-sand beaches of Zanzibar, exploring spice plantations, historic Stone Town, and the turquoise waters of the Indian Ocean.',
    itinerary: [
      {
        day: 1,
        title: 'Kilimanjaro International Airport – Arusha',
        description:
          'Arrive at Kilimanjaro International Airport and transfer to your lodge in Arusha. Relax and prepare for your safari adventure.',
        accommodation: 'Octagon Lodge',
        meals: 'Dinner',
        image: '/itineraries images/Itinirary image 2.JPG',
      },
      {
        day: 2,
        title: 'Arusha – Tarangire National Park',
        description:
          'Drive to Tarangire National Park. Explore elephant country, ancient baobabs, and diverse birdlife on afternoon and evening game drives.',
        accommodation: 'Octagon Lodge',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 3.JPG',
      },
      {
        day: 3,
        title: 'Tarangire – Serengeti Central',
        description:
          'After a morning game drive in Tarangire, drive to Central Serengeti with picnic lunch and en-route game viewing.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 4.JPG',
      },
      {
        day: 4,
        title: 'Serengeti Central – Full Day',
        description:
          'A full day exploring Central Serengeti. Search for lions, leopards, cheetahs, elephants and the vast herds of wildebeest and zebra.',
        accommodation: 'Serengeti KatiKati Tented Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 5.jpg',
      },
      {
        day: 5,
        title: 'Serengeti Central – Ngorongoro Crater',
        description:
          'Morning game drive in Serengeti, then drive to the Ngorongoro Crater rim for overnight with spectacular views.',
        accommodation: 'Ngorongoro Kuhama Camp',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 6.jpg',
      },
      {
        day: 6,
        title: 'Ngorongoro Crater – Zanzibar',
        description:
          'Descend into Ngorongoro Crater for a morning game drive among the Big 5. After lunch, transfer to Arusha Airport for your flight to Zanzibar.',
        accommodation: 'Zanzibar Beach Resort',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 7.jpg',
      },
      {
        day: 7,
        title: 'Zanzibar Beach',
        description:
          'Relax on the white sands of Zanzibar. Swim in the turquoise Indian Ocean, enjoy fresh seafood, and unwind at your beach resort.',
        accommodation: 'Zanzibar Beach Resort',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 8.jpg',
      },
      {
        day: 8,
        title: 'Zanzibar Beach / Spice Tour / Stone Town',
        description:
          'Optional spice plantation tour and visit to historic Stone Town. Discover Zanzibar’s rich cultural heritage, aromatic spices, and bustling markets.',
        accommodation: 'Zanzibar Beach Resort',
        meals: 'Breakfast, Lunch & Dinner',
        image: '/itineraries images/Itinirary image 9.jpg',
      },
      {
        day: 9,
        title: 'Zanzibar Airport – Departure',
        description:
          'Enjoy a final morning on the beach before transferring to Zanzibar Airport for your international departure.',
        meals: 'Breakfast',
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
    featured: false,
  }
];
