import type { Vehicle, BusinessContact } from "../types";

export const BUSINESS_INFO: BusinessContact = {
  name: "Rajesh Tiwari Car Rental",
  eyebrow: "RAIPUR, CHHATTISGARH • CAR RENTAL",
  tagline: "YOUR JOURNEY, OUR DRIVE.",
  slogan: "RENT FAST, CAR EASY — 24 X 7",
  location: "Raipur, Chhattisgarh, India",
  address: "Near Ashok Ratan, Vidhan Sabha Road, Raipur, Chhattisgarh",
  availability: "24 X 7",
  primaryPhone: "+918878999911",
  primaryPhoneDisplay: "+91 8878999911",
  alternatePhones: [
    {
      number: "+919200880800",
      display: "+91 9200880800",
    },
    {
      number: "+917746055014",
      display: "+91 7746055014",
    },
  ],
  primaryEmail: "rajeshtiwaricarrental@gmail.com",
  posterEmail: "rjshtiwari362@gmail.com",
};

export const vehicles: Vehicle[] = [
  {
    id: "dzire",
    name: "Maruti Suzuki Dzire",
    category: "Sedan",
    image: "/images/dzire.jpg",
    description: "A sedan option for city and outstation travel.",
    badge: "Comfort Sedan",
  },
  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "Family Vehicle",
    image: "/images/ertiga.jpg",
    description: "A family-oriented vehicle option for comfortable journeys.",
    badge: "Family Favorite",
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Premium MPV",
    image: "/images/innova-crysta.jpg",
    description: "A premium MPV option for family and longer-distance travel.",
    badge: "Premium Comfort",
  },
  {
    id: "force-urbania",
    name: "Force Urbania",
    category: "Group Travel",
    image: "/images/force-urbania.jpg",
    description: "A group transportation option for suitable travel requirements.",
    badge: "Luxury Group",
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    category: "Group Travel",
    image: "/images/tempo-traveller.jpg",
    description: "A group travel option. Contact us to enquire about availability and configuration.",
    badge: "Touring Van",
  },
];

export const POPULAR_ROUTES = [
  {
    title: "Raipur Airport Transfers",
    subtitle: "Swami Vivekananda Airport (RPR)",
    description: "Timely pickup and drop services for all arriving and departing flights in Raipur.",
  },
  {
    title: "Local Raipur City Rides",
    subtitle: "Full-day & Half-day Rental",
    description: "Convenient travel for meetings, family visits, shopping, and temple tours across Raipur.",
  },
  {
    title: "Raipur to Bilaspur & Korba",
    subtitle: "Intercity Highway Travel",
    description: "Reliable one-way or round-trip outstation car rental with experienced chauffeurs.",
  },
  {
    title: "Raipur to Bhilai & Durg",
    subtitle: "Industrial Corridor & Academic Hub",
    description: "Smooth transit connecting Raipur with Bhilai and Durg for work and family visits.",
  },
  {
    title: "Bastar & Jagdalpur Tours",
    subtitle: "Chitrakote Falls & Tourism",
    description: "Comfortable MPVs and group travel vehicles equipped for scenic Chhattisgarh tours.",
  },
  {
    title: "Weddings & Family Events",
    subtitle: "Special Occasion Fleet",
    description: "Dedicated vehicle coordination for family functions, guest transit, and celebrations.",
  },
];

export const FAQS = [
  {
    question: "How can I book a car with Rajesh Tiwari Car Rental?",
    answer: "You can book directly by calling our 24x7 helpline at +91 8878999911, sending a quick WhatsApp message, or submitting the booking enquiry form on this website. Our team will promptly confirm availability and details.",
  },
  {
    question: "What vehicles are available in your fleet?",
    answer: "Our fleet includes the Maruti Suzuki Dzire (Sedan), Maruti Suzuki Ertiga (Family Vehicle), Toyota Innova Crysta (Premium MPV), Force Urbania (Group Travel), and Tempo Traveller (Group Travel).",
  },
  {
    question: "Where are you located in Raipur?",
    answer: "Our office is located Near Ashok Ratan, Vidhan Sabha Road, Raipur, Chhattisgarh. We offer vehicle dispatch and pickups across Raipur and surrounding regions.",
  },
  {
    question: "Do you operate 24 hours a day, 7 days a week?",
    answer: "Yes, as stated on our business poster, we provide 24 X 7 booking availability and customer assistance. You can reach out to us any time day or night.",
  },
  {
    question: "Can I book for outstation trips from Raipur?",
    answer: "Yes, we cater to both local city travel and outstation journeys across Chhattisgarh and neighboring states. Please contact us for specific itinerary details.",
  },
  {
    question: "How are rental rates determined?",
    answer: "Rental rates depend on your vehicle selection, travel distance, trip duration, and route. Please contact our team at +91 8878999911 or via WhatsApp for immediate, transparent quotes.",
  },
];
