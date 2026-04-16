export interface Accommodation {
  id: string;
  name: string;
  location: string;
  type: string;
  description: string;
  image: string;
}

export const accommodations: Accommodation[] = [
  {
    id: "dove-serengeti-camp",
    name: "Dove Collection – Serengeti Camp",
    location: "Central Serengeti",
    type: "Luxury Tented Camp",
    description:
      "Dove Serengeti Camp is located in the heart of Serengeti National Park, placing guests right in the middle of Tanzania's most iconic wildlife environment. The camp offers an authentic safari atmosphere with comfortable luxury tents, allowing you to experience nature up close while still enjoying modern comforts. Guests enjoy personalized service, guided game drives, and peaceful evenings surrounded by the sounds of the wild. It is ideal for travelers seeking a true Serengeti experience with comfort and exclusivity.",
    image: "/accommodation images/dove-1.jpg",
  },
  {
    id: "farm-of-dreams-lodge",
    name: "Farm of Dreams Lodge",
    location: "Karatu (Near Ngorongoro)",
    type: "Lodge",
    description:
      "Farm of Dreams Lodge is a peaceful retreat located in Karatu, perfectly positioned between Ngorongoro Crater, Lake Manyara, and Tarangire National Park. The lodge features spacious rooms surrounded by lush gardens filled with flowers and birdlife. With comfortable amenities, warm hospitality, and scenic views of the highlands, it serves as an ideal stop before or after exploring Tanzania's northern safari circuit.",
    image: "/accommodation images/farm-1.jpg",
  },
  {
    id: "planet-lodge-arusha",
    name: "Planet Lodge (Arusha)",
    location: "Arusha",
    type: "Eco Lodge",
    description:
      "Planet Lodge in Arusha is a comfortable and eco-friendly lodge set within tropical gardens. Designed in African-style chalets, it offers a relaxing environment for guests before or after their safari journey. The lodge features modern amenities including a swimming pool, spa, restaurant, and easy access to Kilimanjaro Airport. It is perfect for resting, preparing for safaris, or recovering after long travel.",
    image: "/accommodation images/planet-1.jpg",
  },
  {
    id: "lala-salama-serengeti-camp",
    name: "Lala Salama Serengeti Camp",
    location: "Central Serengeti (Makoma Hills)",
    type: "Luxury Tented Camp",
    description:
      "Lala Salama Serengeti Camp offers a peaceful and immersive safari stay inspired by the meaning 'sleep well.' The camp combines luxury tented accommodation with personalized service in the heart of the Serengeti. Guests enjoy spacious tents, fine dining, and unforgettable wildlife experiences including game drives and evenings by the campfire. It delivers a perfect balance between comfort and adventure.",
    image: "/accommodation images/lala-1.jpg",
  },
  {
    id: "moyo-tented-camp",
    name: "Moyo Tented Camp",
    location: "Serengeti (Seronera Area)",
    type: "Luxury Tented Camp",
    description:
      "Moyo Tented Camp offers a premium safari experience in prime wildlife areas of the Serengeti. The camp is designed to immerse guests in nature while providing modern comforts such as ensuite bathrooms, private verandas, and personalized service. Guests can enjoy game drives, cultural visits, bush dining, and breathtaking views of wildlife directly from camp, making every stay a unique and memorable experience.",
    image: "/accommodation images/moyo-1.jpg",
  },
  {
    id: "tukaone-serengeti-camps",
    name: "Tukaone Serengeti Camps",
    location: "Central Serengeti",
    type: "Tented Safari Camp",
    description:
      "Tukaone Serengeti Camps are located deep within the Serengeti, offering direct access to some of the best wildlife viewing areas in Tanzania. The camps combine authentic safari living with modern comfort and excellent hospitality. Guests can enjoy close encounters with wildlife, relaxing evenings by the fire, and comfortable tented rooms equipped with essential amenities. It is a perfect choice for travelers seeking a genuine safari atmosphere.",
    image: "/accommodation images/tukaone-1.jpg",
  },
];
