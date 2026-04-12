export interface ClimbDay {
  day: number;
  title: string;
  from?: string;
  to?: string;
  altitude?: string;
  trekTime?: string;
  zone?: string;
  description: string;
  image?: string;
}

export interface KilimanjaroRoute {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  days: string;
  duration: string;
  difficulty: string;
  type: string;
  successRate: string;
  heroImage: string;
  cardImage: string;
  mapImage?: string;
  highlight: string;
  description: string;
  itinerary: ClimbDay[];
  featured?: boolean;
}

export const kilimanjaroRoutes: KilimanjaroRoute[] = [
  {
    id: 'lemosho',
    slug: 'lemosho-route',
    name: 'Lemosho Route',
    shortName: 'Lemosho',
    days: '7–8 Days',
    duration: '7 or 8 days',
    difficulty: 'Demanding',
    type: 'Camping',
    successRate: '90%',
    heroImage: '/Kilimanjaro images/kilimanjaro-arms-open.jpg',
    cardImage: '/Kilimanjaro images/kilimanjaro-arms-open.jpg',
    mapImage: '/Kilimanjaro images/lemosho-route-map.jpg',
    highlight: 'The most scenic and remote route with superior acclimatisation',
    description:
      'The Lemosho Route is widely considered the most beautiful approach to Kilimanjaro\'s summit. Beginning on the remote western slopes, it traverses pristine rainforest, open moorland and dramatic volcanic ridges before joining the Southern Circuit to Uhuru Peak. The extra days allow excellent acclimatisation and outstanding wildlife encounters.',
    itinerary: [
      {
        day: 1,
        title: 'Londorossi Gate → Mti Mkubwa Camp',
        from: 'Londorossi Gate (2,000m)',
        to: 'Mti Mkubwa Camp (2,800m)',
        altitude: '2,800m',
        trekTime: '4 hours',
        zone: 'Rainforest',
        description:
          'After gate formalities at Londorossi, drive to Lemosho Glades (2,200m). Trek steeply through lush rainforest to camp in a beautiful forest clearing dominated by a giant tree — Mti Mkubwa (Big Tree).',
        image: '/Kilimanjaro images/machame-gate.avif',
      },
      {
        day: 2,
        title: 'Mti Mkubwa → Shira One Camp',
        from: 'Mti Mkubwa (2,800m)',
        to: 'Shira One Camp (3,500m)',
        altitude: '3,500m',
        trekTime: '6 hours',
        zone: 'Alpine Moorland',
        description:
          'Emerge onto beautiful moorland above the forest. Detour northwards around the Shira ridge through rugged moorland with panoramic views. Drop down onto the vast Shira plateau and camp by a stream at Shira One.',
        image: '/Kilimanjaro images/shira-1-camp.jpg',
      },
      {
        day: 3,
        title: 'Shira One → Shira Two Camp',
        from: 'Shira One (3,500m)',
        to: 'Shira Two Camp (3,840m)',
        altitude: '3,840m',
        trekTime: '5 hours',
        zone: 'Alpine Moorland',
        description:
          'Cross the Shira plateau via Cone Place, a distinctive volcanic feature. Open views across the plateau with Kibo cone dominating the horizon. Arrive at Shira Two camp, the gateway to the upper mountain.',
        image: '/Kilimanjaro images/shira-2-camp.jpg',
      },
      {
        day: 4,
        title: 'Shira Two → Lava Tower → Barranco Camp',
        from: 'Shira Two (3,840m)',
        to: 'Barranco Camp (3,960m)',
        altitude: '3,960m / high point 4,630m',
        trekTime: '7 hours',
        zone: 'Alpine Desert',
        description:
          'Crucial acclimatisation day: ascend to the Lava Tower at 4,630m for lunch before descending to Barranco Camp. The "climb high, sleep low" approach is key to summit success. Spectacular views of the Southern Icefields.',
        image: '/Kilimanjaro images/barranco-camp.jpg',
      },
      {
        day: 5,
        title: 'Barranco → Karanga Camp',
        from: 'Barranco (3,960m)',
        to: 'Karanga Camp (4,035m)',
        altitude: '4,035m',
        trekTime: '4 hours',
        zone: 'Alpine Desert',
        description:
          'The famous Barranco Wall — an exciting, hands-on scramble up a 300m cliff face rewarded with sensational views. Continue across ridges to Karanga camp, perched above a dramatic valley.',
        image: '/Kilimanjaro images/karanga-camp.jpg',
      },
      {
        day: 6,
        title: 'Karanga → Barafu High Camp',
        from: 'Karanga (4,035m)',
        to: 'Barafu Camp (4,640m)',
        altitude: '4,640m',
        trekTime: '4 hours',
        zone: 'Alpine Desert',
        description:
          'Short but steep ascent to Barafu — the summit launch camp. Rest, eat, and prepare your kit for the midnight summit attempt. Sleep from late afternoon ahead of the final push.',
        image: '/Kilimanjaro images/shira-camp.jpg',
      },
      {
        day: 7,
        title: 'Summit Night → Uhuru Peak → Mweka Camp',
        from: 'Barafu (4,640m)',
        to: 'Mweka Camp (3,100m)',
        altitude: 'Uhuru Peak: 5,895m',
        trekTime: '12–14 hours total',
        zone: 'Arctic / Ice Cap',
        description:
          'Midnight departure — a demanding 6–8 hour climb through cold, darkness and thin air to reach Stella Point on the crater rim, then the final push to UHURU PEAK (5,895m) — the Roof of Africa. After celebrating, descend steeply to Mweka Camp.',
        image: '/Kilimanjaro images/uhuru-peak-sign.jpg',
      },
      {
        day: 8,
        title: 'Mweka Camp → Mweka Gate & Transfer to Moshi',
        from: 'Mweka Camp (3,100m)',
        to: 'Mweka Gate (1,640m)',
        altitude: '1,640m',
        trekTime: '3 hours',
        zone: 'Rainforest',
        description:
          'Final descent through the rainforest to Mweka Gate. Collect your summit certificate, tip the crew, and transfer to your hotel in Moshi for a well-earned rest.',
        image: '/Kilimanjaro images/mweka-camp.webp',
      },
    ],
    featured: true,
  },
  {
    id: 'machame',
    slug: 'machame-route',
    name: 'Machame Route',
    shortName: 'Machame',
    days: '6–7 Days',
    duration: '6 or 7 days',
    difficulty: 'Demanding',
    type: 'Camping',
    successRate: '85%',
    heroImage: '/Kilimanjaro images/kilimanjaro-sunset-hiker.jpg',
    cardImage: '/Kilimanjaro images/kilimanjaro-sunset-hiker.jpg',
    mapImage: '/Kilimanjaro images/machame-route-map.jpg',
    highlight: 'The most popular route — dramatic scenery and great acclimatisation',
    description:
      'Known as the "Whiskey Route," Machame is Kilimanjaro\'s most popular and arguably most dramatic path. Ascending through dense rainforest and up the steep Shira Ridge, it traverses the spectacular Southern Circuit with the Barranco Wall and Karanga Valley before the final push to Uhuru Peak.',
    itinerary: [
      {
        day: 1,
        title: 'Machame Gate → Machame Hut Camp',
        from: 'Machame Gate (1,800m)',
        to: 'Machame Camp (2,980m)',
        altitude: '2,980m',
        trekTime: '5–7 hours',
        zone: 'Rainforest',
        description:
          'Trek through a magnificent moss-draped rainforest from Machame Gate. Steep climbing through dense vegetation rewards you with arrival at Machame Camp — a clearing in the forest with views to Kibo.',
        image: '/Kilimanjaro images/machame-gate.avif',
      },
      {
        day: 2,
        title: 'Machame Camp → Shira Camp',
        from: 'Machame (2,980m)',
        to: 'Shira Camp (3,840m)',
        altitude: '3,840m',
        trekTime: '5–7 hours',
        zone: 'Heath & Moorland',
        description:
          'Exit the forest into heath and moorland. A steep climb through giant heather and later moorland leads to the Shira plateau and camp — with extraordinary views of Kibo and the surrounding valleys.',
        image: '/Kilimanjaro images/shira-camp.jpg',
      },
      {
        day: 3,
        title: 'Shira Camp → Lava Tower → Barranco Camp',
        from: 'Shira (3,840m)',
        to: 'Barranco Camp (3,960m)',
        altitude: '3,960m / high point 4,630m',
        trekTime: '6–8 hours',
        zone: 'Alpine Desert',
        description:
          'The key acclimatisation day: ascend to the dramatic Lava Tower (4,630m) before descending to Barranco. A long but crucial day for summit success.',
        image: '/Kilimanjaro images/barranco-camp.webp',
      },
      {
        day: 4,
        title: 'Barranco Wall → Karanga Camp',
        from: 'Barranco (3,960m)',
        to: 'Karanga Camp (4,035m)',
        altitude: '4,035m',
        trekTime: '4–5 hours',
        zone: 'Alpine Desert',
        description:
          'Scramble up the famous Barranco Wall — the most exciting section of the Machame Route. Technical but safe with sure footing required. Reach Karanga camp in the afternoon.',
        image: '/Kilimanjaro images/karanga-camp.jpg',
      },
      {
        day: 5,
        title: 'Karanga Camp → Barafu High Camp',
        from: 'Karanga (4,035m)',
        to: 'Barafu Camp (4,640m)',
        altitude: '4,640m',
        trekTime: '4–5 hours',
        zone: 'Alpine Desert',
        description:
          'Ascend steeply to Barafu, the summit camp. Rest and prepare for midnight summit attempt.',
        image: '/Kilimanjaro images/machame-hut-camps.jpg',
      },
      {
        day: 6,
        title: 'Summit Night → Uhuru Peak → Mweka Camp',
        from: 'Barafu (4,640m)',
        to: 'Mweka Camp (3,100m)',
        altitude: 'Uhuru Peak: 5,895m',
        trekTime: '12–14 hours total',
        zone: 'Arctic Summit',
        description:
          'Midnight summit push to Uhuru Peak — the Roof of Africa at 5,895m. Descend to Mweka Camp for overnight.',
        image: '/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg',
      },
      {
        day: 7,
        title: 'Mweka Camp → Mweka Gate & Departure',
        from: 'Mweka Camp (3,100m)',
        to: 'Mweka Gate (1,640m)',
        altitude: '1,640m',
        trekTime: '3–4 hours',
        zone: 'Rainforest',
        description:
          'Final descent through rainforest to Mweka Gate. Collect summit certificate and transfer to Moshi.',
        image: '/Kilimanjaro images/mweka-camp.webp',
      },
    ],
    featured: true,
  },
  {
    id: 'marangu',
    slug: 'marangu-route',
    name: 'Marangu Route',
    shortName: 'Marangu',
    days: '5–6 Days',
    duration: '5 or 6 days',
    difficulty: 'Moderate',
    type: 'Hut Camping',
    successRate: '65%',
    heroImage: '/Kilimanjaro images/horombo-huts.jpg',
    cardImage: '/Kilimanjaro images/horombo-huts.jpg',
    mapImage: '/Kilimanjaro images/marangu-route-map.jpg',
    highlight: 'The classic "Coca-Cola" route with comfortable hut accommodation',
    description:
      'The original and most accessible Kilimanjaro route, known as the "Coca-Cola Route" for its relative ease. Marangu is the only route offering hut dormitory accommodation, making it ideal for those who prefer shelter over tents. The gradual ascent through stunning ecological zones remains a classic climb.',
    itinerary: [
      {
        day: 1,
        title: 'Marangu Gate → Mandara Hut',
        from: 'Marangu Gate (1,860m)',
        to: 'Mandara Hut (2,720m)',
        altitude: '2,720m',
        trekTime: '3–4 hours',
        zone: 'Rainforest',
        description:
          'Trek through beautiful montane forest from Marangu Gate to the A-frame huts at Mandara. A pleasant, well-maintained trail.',
        image: '/Kilimanjaro images/machame-gate.avif',
      },
      {
        day: 2,
        title: 'Mandara Hut → Horombo Hut',
        from: 'Mandara Hut (2,720m)',
        to: 'Horombo Hut (3,720m)',
        altitude: '3,720m',
        trekTime: '5–6 hours',
        zone: 'Heath & Moorland',
        description:
          'Exit the forest into open moorland dotted with giant groundsels and lobelias. Sweeping views back to the plains and first views of Kibo summit.',
        image: '/Kilimanjaro images/horombo-hut.jpg',
      },
      {
        day: 3,
        title: 'Acclimatisation Day at Horombo',
        from: 'Horombo (3,720m)',
        to: 'Horombo (3,720m)',
        altitude: '3,720m',
        trekTime: 'Day hike optional',
        zone: 'Alpine Moorland',
        description:
          'A rest day for acclimatisation. Optional hike towards Mawenzi peak or Zebra Rock. Crucial for summit success on the following days.',
        image: '/Kilimanjaro images/kilimanjaro-day-hike.jpg',
      },
      {
        day: 4,
        title: 'Horombo Hut → Kibo Hut',
        from: 'Horombo (3,720m)',
        to: 'Kibo Hut (4,720m)',
        altitude: '4,720m',
        trekTime: '5–6 hours',
        zone: 'Alpine Desert',
        description:
          'Cross the "Saddle" — the high plateau between Mawenzi and Kibo peaks — to reach Kibo Hut. Rest for the summit attempt tonight.',
        image: '/Kilimanjaro images/kilimanjaro-porters-sunrise.jpg',
      },
      {
        day: 5,
        title: 'Summit Night → Uhuru Peak → Horombo Hut',
        from: 'Kibo Hut (4,720m)',
        to: 'Horombo Hut (3,720m)',
        altitude: 'Uhuru Peak: 5,895m',
        trekTime: '13–16 hours total',
        zone: 'Arctic Summit',
        description:
          'Midnight summit push via Gillman\'s Point and Stella Point to Uhuru Peak (5,895m). Descend all the way to Horombo Hut for overnight.',
        image: '/Kilimanjaro images/uhuru-peak.webp',
      },
      {
        day: 6,
        title: 'Horombo Hut → Marangu Gate & Departure',
        from: 'Horombo (3,720m)',
        to: 'Marangu Gate (1,860m)',
        altitude: '1,860m',
        trekTime: '5–6 hours',
        zone: 'Rainforest',
        description:
          'Final descent through moorland and rainforest to Marangu Gate. Collect your summit certificate.',
        image: '/Kilimanjaro images/horombo-huts.jpg',
      },
    ],
    featured: false,
  },
  {
    id: 'rongai-5',
    slug: 'rongai-route-5-day',
    name: 'Rongai Route (5 Day)',
    shortName: 'Rongai 5-Day',
    days: '5 Days',
    duration: '5 days',
    difficulty: 'Moderate',
    type: 'Camping',
    successRate: '70%',
    heroImage: '/Kilimanjaro images/rongai-gate-sign.jpg',
    cardImage: '/Kilimanjaro images/rongai-gate-sign.jpg',
    mapImage: '/Kilimanjaro images/rongai-route-map.jpg',
    highlight: 'The only northern approach — remote, quiet, and dry',
    description:
      'The Rongai Route approaches Kilimanjaro from the north near the Kenyan border — offering a completely different landscape of open moorland and semi-arid terrain. The most remote and least crowded route, it descends via the Marangu route on the southern side.',
    itinerary: [
      {
        day: 1,
        title: 'Rongai Gate → First Cave Camp',
        from: 'Rongai Gate (1,950m)',
        to: 'First Cave Camp (2,600m)',
        altitude: '2,600m',
        trekTime: '3–4 hours',
        zone: 'Montane Forest',
        description:
          'Drive from Moshi to the remote Rongai Gate near the Kenyan border (3 hours). Trek through montane forest and open moorland to First Cave campsite.',
        image: '/Kilimanjaro images/second-cave.jpg',
      },
      {
        day: 2,
        title: 'First Cave → Second Cave Camp',
        from: 'First Cave (2,600m)',
        to: 'Second Cave Camp (3,450m)',
        altitude: '3,450m',
        trekTime: '4–5 hours',
        zone: 'Heath & Moorland',
        description:
          'A varied day through open moorland and heathland. Views of Kibo and the Eastern Icefields. Camp at Second Cave.',
        image: '/Kilimanjaro images/second-cave.jpg',
      },
      {
        day: 3,
        title: 'Second Cave → Kikelewa → Mawenzi Tarn',
        from: 'Second Cave (3,450m)',
        to: 'Mawenzi Tarn Camp (4,310m)',
        altitude: '4,310m',
        trekTime: '5–7 hours',
        zone: 'Alpine Desert',
        description:
          'Ascend to Kikelewa Cave then continue steeply to the dramatic Mawenzi Tarn — a glacial lake beneath the jagged Mawenzi peak. Spectacular, remote scenery.',
        image: '/Kilimanjaro images/simba-camp.jpg',
      },
      {
        day: 4,
        title: 'Mawenzi Tarn → Kibo Hut',
        from: 'Mawenzi Tarn (4,310m)',
        to: 'Kibo Hut (4,720m)',
        altitude: '4,720m',
        trekTime: '4–5 hours',
        zone: 'Alpine Desert',
        description:
          'Cross the Saddle plateau to Kibo Hut. Rest and prepare for the midnight summit attempt.',
        image: '/Kilimanjaro images/kilimanjaro-porters-sunrise.jpg',
      },
      {
        day: 5,
        title: 'Summit → Uhuru Peak → Descent to Horombo → Marangu Gate',
        from: 'Kibo Hut (4,720m)',
        to: 'Marangu Gate (1,860m)',
        altitude: 'Uhuru Peak: 5,895m',
        trekTime: '14–17 hours total',
        zone: 'Arctic → Rainforest',
        description:
          'Midnight summit push. Reach Uhuru Peak, then descend all the way via Horombo to Marangu Gate. Collect your certificate.',
        image: '/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg',
      },
    ],
    featured: false,
  },
  {
    id: 'rongai-6',
    slug: 'rongai-route-6-7-day',
    name: 'Rongai Route (6–7 Day)',
    shortName: 'Rongai 6–7 Day',
    days: '6–7 Days',
    duration: '6 or 7 days',
    difficulty: 'Moderate',
    type: 'Camping',
    successRate: '80%',
    heroImage: '/Kilimanjaro images/kilimanjaro-aerial-crater.jpg',
    cardImage: '/Kilimanjaro images/kilimanjaro-aerial-crater.jpg',
    mapImage: '/Kilimanjaro images/rongai-route-map.jpg',
    highlight: 'Extended Rongai with superior acclimatisation and higher success rate',
    description:
      'The extended Rongai route adds extra acclimatisation days for a significantly higher summit success rate. The remote northern approach, open moorland landscapes, and extra time at altitude make this an excellent choice for well-prepared climbers who want a quieter route.',
    itinerary: [
      {
        day: 1,
        title: 'Rongai Gate → First Cave Camp',
        altitude: '2,600m',
        trekTime: '3–4 hours',
        zone: 'Montane Forest',
        description: 'Trek from Rongai Gate through montane forest to First Cave Camp.',
        image: '/Kilimanjaro images/rongai-gate-sign.jpg',
      },
      {
        day: 2,
        title: 'First Cave → Kikelewa Cave',
        altitude: '3,630m',
        trekTime: '5–6 hours',
        zone: 'Moorland',
        description: 'Extended moorland trek with excellent acclimatisation walking to Kikelewa Cave.',
        image: '/Kilimanjaro images/second-cave.jpg',
      },
      {
        day: 3,
        title: 'Kikelewa Cave → Mawenzi Tarn',
        altitude: '4,310m',
        trekTime: '4–5 hours',
        zone: 'Alpine Desert',
        description: 'Spectacular ascent to the glacial Mawenzi Tarn beneath the jagged Mawenzi peak.',
        image: '/Kilimanjaro images/simba-camp.jpg',
      },
      {
        day: 4,
        title: 'Acclimatisation at Mawenzi Tarn',
        altitude: '4,310m',
        trekTime: 'Half day hike',
        zone: 'Alpine Desert',
        description: 'Rest and acclimatisation day at Mawenzi Tarn with optional hiking to higher elevations.',
        image: '/Kilimanjaro images/kilimanjaro-day-hike.jpg',
      },
      {
        day: 5,
        title: 'Mawenzi Tarn → Kibo Hut',
        altitude: '4,720m',
        trekTime: '4–5 hours',
        zone: 'Alpine Desert',
        description: 'Cross the Saddle to Kibo Hut. Prepare for the midnight summit attempt.',
        image: '/Kilimanjaro images/kilimanjaro-porters-sunrise.jpg',
      },
      {
        day: 6,
        title: 'Summit Night → Uhuru Peak → Horombo Hut',
        altitude: 'Uhuru Peak: 5,895m',
        trekTime: '13–16 hours total',
        zone: 'Arctic Summit',
        description: 'Midnight summit push to Uhuru Peak (5,895m). Descend to Horombo Hut.',
        image: '/Kilimanjaro images/uhuru-peak-sign.jpg',
      },
      {
        day: 7,
        title: 'Horombo Hut → Marangu Gate & Departure',
        altitude: '1,860m',
        trekTime: '5–6 hours',
        zone: 'Rainforest',
        description: 'Final descent to Marangu Gate. Collect summit certificate.',
        image: '/Kilimanjaro images/mweka-camp.webp',
      },
    ],
    featured: false,
  },
  {
    id: 'umbwe',
    slug: 'umbwe-route',
    name: 'Umbwe Route',
    shortName: 'Umbwe',
    days: '5–6 Days',
    duration: '5 or 6 days',
    difficulty: 'Challenging',
    type: 'Camping',
    successRate: '60%',
    heroImage: '/Kilimanjaro images/umbwe-route.jpg',
    cardImage: '/Kilimanjaro images/umbwe-route.jpg',
    highlight: 'The most direct and challenging route — for experienced mountaineers only',
    description:
      'The Umbwe Route is Kilimanjaro\'s most direct, steepest, and most demanding path. A relentlessly steep climb through dense rainforest rewards experienced climbers with solitude, dramatic scenery, and raw mountain challenge. Not recommended for first-time altitude climbers but spectacular for those seeking the ultimate test.',
    itinerary: [
      {
        day: 1,
        title: 'Umbwe Gate → Umbwe Cave Camp',
        altitude: '2,940m',
        trekTime: '5–7 hours',
        zone: 'Rainforest',
        description:
          'Steep climb immediately from Umbwe Gate through thick rainforest. The trail is relentlessly upward but rewards with beautiful forest scenery. Camp in a small clearing at Umbwe Cave.',
        image: '/Kilimanjaro images/umbwe-route.jpg',
      },
      {
        day: 2,
        title: 'Umbwe Cave → Barranco Camp',
        altitude: '3,960m',
        trekTime: '5–7 hours',
        zone: 'Heath & Moorland',
        description:
          'Exit the forest and continue steeply through heath and moorland. Breathtaking views as you arrive at Barranco Camp beneath the Great Barranco Wall.',
        image: '/Kilimanjaro images/barranco-camp.jpg',
      },
      {
        day: 3,
        title: 'Barranco Wall → Karanga Camp',
        altitude: '4,035m',
        trekTime: '4–5 hours',
        zone: 'Alpine Desert',
        description:
          'Scale the famous Barranco Wall and traverse the Southern Circuit to Karanga Camp.',
        image: '/Kilimanjaro images/karanga-camp.jpg',
      },
      {
        day: 4,
        title: 'Karanga Camp → Barafu High Camp',
        altitude: '4,640m',
        trekTime: '4–5 hours',
        zone: 'Alpine Desert',
        description: 'Steep ascent to Barafu High Camp. Rest and prepare for summit push.',
        image: '/Kilimanjaro images/shira-2-camp.jpg',
      },
      {
        day: 5,
        title: 'Summit Night → Uhuru Peak → Mweka Camp',
        altitude: 'Uhuru Peak: 5,895m',
        trekTime: '12–14 hours total',
        zone: 'Arctic Summit',
        description: 'Midnight summit attempt to Uhuru Peak (5,895m). Descend to Mweka Camp.',
        image: '/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg',
      },
      {
        day: 6,
        title: 'Mweka Camp → Mweka Gate & Transfer',
        altitude: '1,640m',
        trekTime: '3–4 hours',
        zone: 'Rainforest',
        description: 'Final descent to Mweka Gate. Summit certificate and transfer to Moshi.',
        image: '/Kilimanjaro images/mweka-camp.webp',
      },
    ],
    featured: false,
  },
];
