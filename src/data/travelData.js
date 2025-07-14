// --- DESTINATIONS ---
export const destinations = [
  {
    id: "1",
    name: "Kyoto Temple Gardens",
    image: "https://i.imgur.com/RfUy5ro.jpeg",
    category: "culture",
    description:
      "Experience the serene beauty of traditional Japanese temple gardens, where ancient architecture meets meticulously maintained landscapes in perfect harmony.",
    coordinates: [135.7681, 35.0116],
  },
  {
    id: "2",
    name: "Tokyo Street Food Markets",
    image: "https://plus.unsplash.com/premium_photo-1686538381765-da778cf88d9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "food",
    description:
      "Discover authentic Japanese cuisine in bustling street markets where traditional recipes meet modern culinary innovation.",
    coordinates: [139.6917, 35.6895],
  },
  {
    id: "3",
    name: "Arc de Triomphe",
    image: "https://plus.unsplash.com/premium_photo-1694475534209-4384b624cb95?q=80&w=850&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "culture",
    description:
      "A monumental arch honoring those who fought and died for France, offering panoramic views of Paris from its summit.",
    coordinates: [2.295, 48.8738],
  },
  {
    id: "4",
    name: "Maldives Crystal Lagoons",
    image: "https://media.istockphoto.com/id/2153741067/photo/boardwalk-into-tropical-paradise-island.jpg?s=1024x1024&w=is&k=20&c=COVMKAbwQSfZ1jN3e5FfUVgGUbZfwb4P4iRU3SOtUpc=",
    category: "beaches",
    description:
      "Paradise found in overwater bungalows surrounded by crystal-clear turquoise waters and vibrant coral reefs.",
    coordinates: [73.2207, 3.2028],
  },
  {
    id: "5",
    name: "Bali Beach Resorts",
    image: "https://www.theungasan.com/wp-content/uploads/2023/05/20190305-Bali-Interiors2019-03-05-188.jpg",
    category: "beaches",
    description:
      "Tropical paradise combining pristine beaches, lush rice terraces, and rich Hindu culture in Indonesia's island gem.",
    coordinates: [115.092, -8.4095],
  },
  {
    id: "6",
    name: "Eiffel Tower",
    image: "https://plus.unsplash.com/premium_photo-1718467524468-b329b7c5d9f1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "culture",
    description: "The most iconic symbol of Paris. Stunning views from the top.",
    coordinates: [2.2945, 48.8584],
  },
  {
    id: "7",
    name: "Louvre Museum",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqxShRACDBOjQk8iP2nQ7tM6dzxEXhxESPw&s",
    category: "culture",
    description:
      "World-famous museum housing the Mona Lisa and countless other masterpieces.",
    coordinates: [2.3364, 48.8606],
  },
  {
    id: "8",
    name: "Seine River Cruise",
    image: "https://images.unsplash.com/photo-1681753026691-6154677b019d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "culture",
    description: "Romantic evening cruise through the heart of Paris.",
    coordinates: [2.3429, 48.8583],
  },
  {
    id: "9",
    name: "Queenstown Adventure Hub",
    image: "https://images.unsplash.com/photo-1512017615494-fdf6146235ff?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "adventure",
    description: "Adventure capital of New Zealand, famous for bungee jumping, skydiving, and stunning alpine scenery.",
    coordinates: [168.6626, -45.0312],
  },
  {
    id: "10",
    name: "Milford Sound",
    image: "https://plus.unsplash.com/premium_photo-1661875089872-b1f631b2e269?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    description: "Stunning fjord with towering cliffs, cascading waterfalls, and wildlife cruises through dramatic landscapes.",
    coordinates: [167.9167, -44.6700],
  },
  {
    id: "11",
    name: "Rainbow Mountain, Peru",
    image: "https://images.unsplash.com/photo-1645740717496-c6281d983bd3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVydSUyMHJhaW5ib3clMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "adventure",
    description: "Vibrant, multicolored mountain ridge located in the Peruvian Andes, a bucket-list trek for nature lovers.",
    coordinates: [-71.3028, -13.8691],
  },
];


// --- ITINERARIES ---
export const mockItineraries = [
  { id: "1", name: "Romantic Paris Getaway" },
  { id: "2", name: "Adventure in New Zealand" },
  { id: "3", name: "Cultural Asia Trip" },
  { id: "4", name: "Beach Relaxation" },
];

// --- ITINERARY DESTINATIONS ---
export const mockItineraryDestinations = [
  { itineraryId: "1", destinationId: "6" },
  { itineraryId: "1", destinationId: "7" },
  { itineraryId: "1", destinationId: "8" },
  { itineraryId: "2", destinationId: "9" },
  { itineraryId: "2", destinationId: "10" },
  { itineraryId: "2", destinationId: "11" },
  { itineraryId: "3", destinationId: "1" },
  { itineraryId: "3", destinationId: "2" },
  { itineraryId: "3", destinationId: "3" },
  { itineraryId: "4", destinationId: "4" },
  { itineraryId: "4", destinationId: "5" },
];

// --- SAVED DESTINATIONS ---
export const savedDestinations = [
  { id: "1", destinationId: "3" }, // Paris Art Museums
  { id: "2", destinationId: "6" }, // Eiffel Tower
  { id: "3", destinationId: "10" }, // Milford Sound
];
