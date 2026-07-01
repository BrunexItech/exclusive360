// DestinationDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  // All destinations data - 11 destinations
  const allDestinations = [
    {
      id: 'kenya',
      name: 'Kenya',
      region: 'East Africa',
      image: 'https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=1200&q=80',
      description: 'Kenya is the heart of African safari. Home to the Great Migration, the Maasai Mara, and a rich tapestry of cultures, it offers an unparalleled wildlife experience.',
      longDescription: `Kenya is where the magic of Africa comes alive. From the sweeping savannas of the Maasai Mara to the pristine beaches of the Swahili Coast, this East African gem offers a safari experience like no other.

The Great Migration, one of the Seven Natural Wonders of the World, sees over 1.5 million wildebeest and zebras cross the Mara River in a dramatic display of nature's raw power. Beyond the wildlife, Kenya's vibrant cultures — from the Maasai warriors to the Swahili traders — add depth and color to every journey.

Whether you're seeking luxury tented camps, cultural encounters, or adrenaline-pumping adventures, Kenya delivers with warmth and authenticity.`,
      attractions: ['Maasai Mara', 'Great Migration', 'Big 5', 'Maasai Culture', 'Lake Nakuru', 'Amboseli', 'Samburu', 'Diani Beach'],
      bestTime: 'Jun - Oct',
      price: 'From $5,000',
      rating: 4.9,
      duration: '7-10 Days',
      wildlife: 'Big 5',
      animals: ['🦁 Lion', '🐘 Elephant', '🦒 Giraffe', '🦏 Rhino', '🐆 Leopard', '🦓 Zebra', '🐃 Buffalo'],
      monthlyGuide: {
        'Jan': { weather: '☀️', wildlife: '🐘', rating: 7 },
        'Feb': { weather: '☀️', wildlife: '🐘', rating: 8 },
        'Mar': { weather: '🌤️', wildlife: '🐘', rating: 7 },
        'Apr': { weather: '🌧️', wildlife: '🐘', rating: 5 },
        'May': { weather: '🌧️', wildlife: '🐘', rating: 5 },
        'Jun': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Jul': { weather: '☀️', wildlife: '🦁', rating: 10 },
        'Aug': { weather: '☀️', wildlife: '🦁', rating: 10 },
        'Sep': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Oct': { weather: '☀️', wildlife: '🦁', rating: 8 },
        'Nov': { weather: '🌤️', wildlife: '🐘', rating: 7 },
        'Dec': { weather: '☀️', wildlife: '🐘', rating: 8 }
      },
      gallery: [
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Nairobi', desc: 'Arrive at Jomo Kenyatta International Airport. Private transfer to your luxury hotel. Welcome dinner and briefing.' },
        { day: 2, title: 'Nairobi to Maasai Mara', desc: 'Scenic flight to the Maasai Mara. Afternoon game drive in search of the Big 5.' },
        { day: 3, title: 'Full Day Game Drive', desc: 'Full day safari with packed lunch. Witness the Great Migration (seasonal).' },
        { day: 4, title: 'Hot Air Balloon Safari', desc: 'Sunrise balloon ride over the Mara. Champagne breakfast in the bush.' },
        { day: 5, title: 'Maasai Village Visit', desc: 'Experience Maasai culture. Traditional dancing, storytelling, and market visit.' },
        { day: 6, title: 'Lake Nakuru Safari', desc: 'Fly to Lake Nakuru. See rhinos, flamingos, and tree-climbing lions.' },
        { day: 7, title: 'Departure', desc: 'Morning game drive. Transfer to airstrip for flight to Nairobi. Final transfer to the airport.' }
      ]
    },
    {
      id: 'tanzania',
      name: 'Tanzania',
      region: 'East Africa',
      image: 'https://images.unsplash.com/photo-1589177900326-900782f88a55?w=1200&q=80',
      description: 'Tanzania is home to the legendary Serengeti, the Ngorongoro Crater, and the majestic Mount Kilimanjaro — Africa\'s highest peak.',
      longDescription: `Tanzania is the quintessential safari destination. The Serengeti National Park hosts the Great Migration, where millions of wildebeest and zebras traverse the plains in a breathtaking cycle of life. The Ngorongoro Crater, a UNESCO World Heritage site, is a natural amphitheater teeming with wildlife.

Beyond the savannas, Tanzania offers the pristine beaches of Zanzibar, the towering peaks of Kilimanjaro, and the rich Swahili culture that has shaped this region for centuries.`,
      attractions: ['Serengeti', 'Ngorongoro Crater', 'Mount Kilimanjaro', 'Zanzibar', 'Lake Manyara', 'Tarangire', 'Selous', 'Mahale'],
      bestTime: 'Jun - Sep',
      price: 'From $6,500',
      rating: 4.8,
      duration: '8-12 Days',
      wildlife: 'Big 5',
      animals: ['🦁 Lion', '🐘 Elephant', '🦒 Giraffe', '🦏 Rhino', '🐆 Leopard', '🦓 Zebra', '🐃 Buffalo', '🐒 Monkey'],
      monthlyGuide: {
        'Jan': { weather: '☀️', wildlife: '🐘', rating: 8 },
        'Feb': { weather: '☀️', wildlife: '🐘', rating: 8 },
        'Mar': { weather: '🌤️', wildlife: '🐘', rating: 7 },
        'Apr': { weather: '🌧️', wildlife: '🐘', rating: 5 },
        'May': { weather: '🌧️', wildlife: '🐘', rating: 5 },
        'Jun': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Jul': { weather: '☀️', wildlife: '🦁', rating: 10 },
        'Aug': { weather: '☀️', wildlife: '🦁', rating: 10 },
        'Sep': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Oct': { weather: '☀️', wildlife: '🦁', rating: 8 },
        'Nov': { weather: '🌤️', wildlife: '🐘', rating: 7 },
        'Dec': { weather: '☀️', wildlife: '🐘', rating: 8 }
      },
      gallery: [
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Arusha', desc: 'Arrive at Kilimanjaro International Airport. Transfer to your luxury lodge. Welcome dinner.' },
        { day: 2, title: 'Arusha to Serengeti', desc: 'Scenic flight to the Serengeti. Afternoon game drive.' },
        { day: 3, title: 'Serengeti Game Drive', desc: 'Full day game drive in the Serengeti plains. Witness the Great Migration.' },
        { day: 4, title: 'Ngorongoro Crater', desc: 'Morning game drive. Afternoon drive to Ngorongoro Crater rim.' },
        { day: 5, title: 'Ngorongoro Crater Drive', desc: 'Full day game drive inside the Ngorongoro Crater. Wildlife viewing at its best.' },
        { day: 6, title: 'Lake Manyara', desc: 'Drive to Lake Manyara. See tree-climbing lions and flamingos.' },
        { day: 7, title: 'Departure', desc: 'Morning game drive. Transfer to Arusha for departure.' }
      ]
    },
    {
      id: 'botswana',
      name: 'Botswana',
      region: 'Southern Africa',
      image: 'https://images.unsplash.com/photo-1591005383946-16532ba69aee?w=1200&q=80',
      description: 'Botswana is the ultimate luxury safari destination, featuring the Okavango Delta, the Chobe River, and vast elephant herds.',
      longDescription: `Botswana is the crown jewel of African safari destinations. The Okavango Delta, the world's largest inland delta, is a breathtaking oasis teeming with wildlife. Here, you'll glide through papyrus-filled channels in a traditional mokoro canoe, spotting elephants, hippos, and the elusive sitatunga antelope.

The Chobe River is renowned for its massive elephant herds, while the vast salt pans of the Makgadikgadi offer surreal landscapes and unique wildlife encounters.`,
      attractions: ['Okavango Delta', 'Chobe River', 'Elephant Herds', 'Moremi Game Reserve', 'Savute Channel', 'Makgadikgadi Pans', 'Linyanti', 'Selinda'],
      bestTime: 'May - Oct',
      price: 'From $8,000',
      rating: 4.9,
      duration: '7-14 Days',
      wildlife: 'Elephant Capital',
      animals: ['🐘 Elephant', '🦛 Hippo', '🦒 Giraffe', '🦁 Lion', '🐆 Leopard', '🐊 Crocodile', '🦓 Zebra', '🐃 Buffalo'],
      monthlyGuide: {
        'Jan': { weather: '🌧️', wildlife: '🐘', rating: 6 },
        'Feb': { weather: '🌧️', wildlife: '🐘', rating: 6 },
        'Mar': { weather: '🌧️', wildlife: '🐘', rating: 6 },
        'Apr': { weather: '🌤️', wildlife: '🐘', rating: 7 },
        'May': { weather: '☀️', wildlife: '🐘', rating: 8 },
        'Jun': { weather: '☀️', wildlife: '🐘', rating: 9 },
        'Jul': { weather: '☀️', wildlife: '🐘', rating: 10 },
        'Aug': { weather: '☀️', wildlife: '🐘', rating: 10 },
        'Sep': { weather: '☀️', wildlife: '🐘', rating: 9 },
        'Oct': { weather: '☀️', wildlife: '🐘', rating: 8 },
        'Nov': { weather: '🌤️', wildlife: '🐘', rating: 7 },
        'Dec': { weather: '🌧️', wildlife: '🐘', rating: 6 }
      },
      gallery: [
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Maun', desc: 'Arrive at Maun Airport. Transfer to your luxury camp in the Okavango Delta.' },
        { day: 2, title: 'Okavango Delta Exploration', desc: 'Morning mokoro canoe trip. Afternoon game drive through the delta.' },
        { day: 3, title: 'Moremi Game Reserve', desc: 'Full day game drive in the Moremi Game Reserve. Spot the Big 5.' },
        { day: 4, title: 'Chobe National Park', desc: 'Fly to Chobe National Park. Afternoon river cruise with elephants.' },
        { day: 5, title: 'Chobe Game Drive', desc: 'Full day game drive in the Chobe Riverfront.' },
        { day: 6, title: 'Departure', desc: 'Morning game drive. Transfer to Kasane Airport for departure.' }
      ]
    },
    {
      id: 'south-africa',
      name: 'South Africa',
      region: 'Southern Africa',
      image: 'https://plus.unsplash.com/premium_photo-1697730061063-ad499e343f26?w=1200&q=80',
      description: 'South Africa offers diverse experiences — from the vibrant Cape Town to the wildlife-rich Kruger National Park.',
      longDescription: `South Africa is a world in one country. From the iconic Table Mountain and vibrant waterfront of Cape Town to the wildlife-rich Kruger National Park, this nation offers unparalleled diversity.

The Cape Winelands offer world-class wine tasting, while the Garden Route provides stunning coastal scenery. The Kruger National Park is home to the Big 5 and offers excellent safari opportunities.`,
      attractions: ['Cape Town', 'Kruger National Park', 'Table Mountain', 'Cape Winelands', 'Garden Route', 'Robben Island', 'Sun City', 'Durban'],
      bestTime: 'May - Sep',
      price: 'From $4,500',
      rating: 4.7,
      duration: '5-10 Days',
      wildlife: 'Big 5',
      animals: ['🦁 Lion', '🐘 Elephant', '🦏 Rhino', '🐆 Leopard', '🐃 Buffalo', '🦒 Giraffe', '🦓 Zebra'],
      monthlyGuide: {
        'Jan': { weather: '☀️', wildlife: '🐘', rating: 7 },
        'Feb': { weather: '☀️', wildlife: '🐘', rating: 7 },
        'Mar': { weather: '☀️', wildlife: '🐘', rating: 7 },
        'Apr': { weather: '☀️', wildlife: '🐘', rating: 8 },
        'May': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Jun': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Jul': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Aug': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Sep': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Oct': { weather: '☀️', wildlife: '🐘', rating: 8 },
        'Nov': { weather: '☀️', wildlife: '🐘', rating: 8 },
        'Dec': { weather: '☀️', wildlife: '🐘', rating: 7 }
      },
      gallery: [
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Cape Town', desc: 'Arrive at Cape Town International Airport. Private transfer to your hotel.' },
        { day: 2, title: 'Cape Town Exploration', desc: 'Cable car to Table Mountain. Afternoon visit to the V&A Waterfront.' },
        { day: 3, title: 'Cape Peninsula Tour', desc: 'Drive to Cape Point. Visit Boulders Beach to see penguins.' },
        { day: 4, title: 'Cape Winelands', desc: 'Full day wine tasting in Stellenbosch and Franschhoek.' },
        { day: 5, title: 'Kruger National Park', desc: 'Fly to Kruger National Park. Afternoon game drive.' },
        { day: 6, title: 'Kruger Game Drive', desc: 'Full day game drive in the Kruger National Park.' },
        { day: 7, title: 'Departure', desc: 'Morning game drive. Transfer to the airport for departure.' }
      ]
    },
    {
      id: 'rwanda',
      name: 'Rwanda',
      region: 'East Africa',
      image: 'https://images.unsplash.com/photo-1489640818597-89b1edc97db5?w=1200&q=80',
      description: 'Rwanda is the premier destination for mountain gorilla trekking in the lush Volcanoes National Park.',
      longDescription: `Rwanda is a land of a thousand hills, where the misty volcanoes of the Virunga Massif are home to the world's remaining mountain gorillas. Trekking through the bamboo forests to encounter these gentle giants is a once-in-a-lifetime experience.

Beyond the gorillas, Rwanda offers vibrant culture, a thriving capital city in Kigali, and the serene beauty of Lake Kivu.`,
      attractions: ['Gorilla Trekking', 'Volcanoes National Park', 'Lake Kivu', 'Kigali', 'Nyungwe Forest', 'Karisimbi Volcano', 'Bisoke Volcano', 'Genocide Memorial'],
      bestTime: 'Jun - Sep',
      price: 'From $7,500',
      rating: 4.9,
      duration: '3-5 Days',
      wildlife: 'Mountain Gorillas',
      animals: ['🦍 Gorilla', '🐒 Golden Monkey', '🐘 Elephant', '🦒 Giraffe', '🐆 Leopard', '🦓 Zebra'],
      monthlyGuide: {
        'Jan': { weather: '☀️', wildlife: '🦍', rating: 8 },
        'Feb': { weather: '☀️', wildlife: '🦍', rating: 8 },
        'Mar': { weather: '🌧️', wildlife: '🦍', rating: 7 },
        'Apr': { weather: '🌧️', wildlife: '🦍', rating: 5 },
        'May': { weather: '🌧️', wildlife: '🦍', rating: 5 },
        'Jun': { weather: '☀️', wildlife: '🦍', rating: 9 },
        'Jul': { weather: '☀️', wildlife: '🦍', rating: 10 },
        'Aug': { weather: '☀️', wildlife: '🦍', rating: 10 },
        'Sep': { weather: '☀️', wildlife: '🦍', rating: 9 },
        'Oct': { weather: '🌤️', wildlife: '🦍', rating: 8 },
        'Nov': { weather: '🌧️', wildlife: '🦍', rating: 7 },
        'Dec': { weather: '☀️', wildlife: '🦍', rating: 8 }
      },
      gallery: [
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Kigali', desc: 'Arrive at Kigali International Airport. Transfer to your luxury lodge near Volcanoes National Park.' },
        { day: 2, title: 'Gorilla Trekking', desc: 'Early morning briefing. Trek through the bamboo forest to find a gorilla family.' },
        { day: 3, title: 'Golden Monkey Trekking', desc: 'Optional golden monkey trek. Afternoon visit to a local community.' },
        { day: 4, title: 'Lake Kivu Relaxation', desc: 'Drive to Lake Kivu for relaxation and boat cruise.' },
        { day: 5, title: 'Departure', desc: 'Morning at leisure. Transfer to Kigali Airport for departure.' }
      ]
    },
    {
      id: 'namibia',
      name: 'Namibia',
      region: 'Southern Africa',
      image: 'https://images.unsplash.com/photo-1545200381-89c298dea43d?w=1200&q=80',
      description: 'Namibia is a land of dramatic contrasts — towering sand dunes, desolate coastlines, and unique desert-adapted wildlife.',
      longDescription: `Namibia is a photographer's paradise. The red sand dunes of Sossusvlei are among the highest in the world, creating a surreal landscape at sunrise and sunset. The Skeleton Coast is a hauntingly beautiful stretch of deserted shoreline.

Etosha National Park offers exceptional wildlife viewing, with elephants, lions, and rhinos gathering around waterholes.`,
      attractions: ['Sossusvlei Dunes', 'Etosha National Park', 'Skeleton Coast', 'Swakopmund', 'Namib Desert', 'Deadvlei', 'Fish River Canyon', 'Kaokoland'],
      bestTime: 'May - Oct',
      price: 'From $5,500',
      rating: 4.7,
      duration: '7-10 Days',
      wildlife: 'Desert Wildlife',
      animals: ['🦒 Giraffe', '🦁 Lion', '🐘 Elephant', '🦏 Rhino', '🦓 Zebra', '🐆 Leopard', '🦘 Oryx', '🐪 Ostrich'],
      monthlyGuide: {
        'Jan': { weather: '☀️', wildlife: '🐘', rating: 7 },
        'Feb': { weather: '☀️', wildlife: '🐘', rating: 7 },
        'Mar': { weather: '☀️', wildlife: '🐘', rating: 7 },
        'Apr': { weather: '☀️', wildlife: '🐘', rating: 8 },
        'May': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Jun': { weather: '☀️', wildlife: '🦁', rating: 10 },
        'Jul': { weather: '☀️', wildlife: '🦁', rating: 10 },
        'Aug': { weather: '☀️', wildlife: '🦁', rating: 10 },
        'Sep': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Oct': { weather: '☀️', wildlife: '🐘', rating: 8 },
        'Nov': { weather: '☀️', wildlife: '🐘', rating: 7 },
        'Dec': { weather: '☀️', wildlife: '🐘', rating: 7 }
      },
      gallery: [
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&q=80',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Windhoek', desc: 'Arrive at Hosea Kutako International Airport. Transfer to your hotel.' },
        { day: 2, title: 'Windhoek to Sossusvlei', desc: 'Scenic drive through the Namib Desert to Sossusvlei.' },
        { day: 3, title: 'Sossusvlei Dunes', desc: 'Sunrise visit to the Sossusvlei dunes. Climb the iconic Dune 45.' },
        { day: 4, title: 'Sossusvlei to Swakopmund', desc: 'Drive to Swakopmund. Afternoon tour of the coastal town.' },
        { day: 5, title: 'Swakopmund to Etosha', desc: 'Drive to Etosha National Park. Afternoon game drive.' },
        { day: 6, title: 'Etosha Game Drive', desc: 'Full day game drive in Etosha National Park.' },
        { day: 7, title: 'Departure', desc: 'Morning game drive. Transfer to Windhoek Airport for departure.' }
      ]
    },
    {
      id: 'uganda',
      name: 'Uganda',
      region: 'East Africa',
      image: 'https://plus.unsplash.com/premium_photo-1661876679866-dcad0b7d0742?w=1200&q=80',
      description: 'Uganda is the pearl of Africa — home to chimpanzees, lush rainforests, and the Source of the Nile.',
      longDescription: `Uganda is a hidden gem in East Africa, offering unique primate encounters in the lush Bwindi Impenetrable Forest and Kibale National Park.

Beyond the primates, Uganda offers stunning landscapes — from the snow-capped Rwenzori Mountains to the tranquil shores of Lake Victoria. The Source of the Nile is a must-visit, where the world's longest river begins its journey to the Mediterranean.`,
      attractions: ['Chimpanzees', 'Bwindi Forest', 'Source of Nile', 'Rainforests', 'Kibale NP', 'Queen Elizabeth NP', 'Murchison Falls', 'Lake Victoria'],
      bestTime: 'Dec - Feb',
      price: 'From $6,000',
      rating: 4.6,
      duration: '4-7 Days',
      wildlife: 'Chimpanzees',
      animals: ['🦍 Gorilla', '🐒 Chimpanzee', '🐘 Elephant', '🦒 Giraffe', '🦁 Lion', '🐆 Leopard', '🦛 Hippo'],
      monthlyGuide: {
        'Jan': { weather: '☀️', wildlife: '🐒', rating: 8 },
        'Feb': { weather: '☀️', wildlife: '🐒', rating: 8 },
        'Mar': { weather: '🌧️', wildlife: '🐒', rating: 7 },
        'Apr': { weather: '🌧️', wildlife: '🐒', rating: 5 },
        'May': { weather: '🌧️', wildlife: '🐒', rating: 5 },
        'Jun': { weather: '🌤️', wildlife: '🐒', rating: 7 },
        'Jul': { weather: '🌤️', wildlife: '🐒', rating: 7 },
        'Aug': { weather: '🌤️', wildlife: '🐒', rating: 7 },
        'Sep': { weather: '☀️', wildlife: '🐒', rating: 8 },
        'Oct': { weather: '☀️', wildlife: '🐒', rating: 8 },
        'Nov': { weather: '🌧️', wildlife: '🐒', rating: 6 },
        'Dec': { weather: '☀️', wildlife: '🐒', rating: 8 }
      },
      gallery: [
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Entebbe', desc: 'Arrive at Entebbe International Airport. Transfer to your lodge near Kampala.' },
        { day: 2, title: 'Kampala City Tour', desc: 'Visit the Kasubi Tombs, Uganda Museum, and local markets.' },
        { day: 3, title: 'Kibale Forest Chimpanzees', desc: 'Drive to Kibale National Park. Afternoon chimpanzee trekking.' },
        { day: 4, title: 'Queen Elizabeth NP', desc: 'Drive to Queen Elizabeth National Park. Afternoon game drive.' },
        { day: 5, title: 'Bwindi Forest Gorillas', desc: 'Drive to Bwindi Impenetrable Forest. Prepare for gorilla trekking.' },
        { day: 6, title: 'Gorilla Trekking', desc: 'Full day gorilla trekking in the Bwindi Forest.' },
        { day: 7, title: 'Departure', desc: 'Morning at leisure. Transfer to Entebbe Airport for departure.' }
      ]
    },
    {
      id: 'zambia',
      name: 'Zambia',
      region: 'Southern Africa',
      image: 'https://images.unsplash.com/photo-1639720091626-e8bad0008e23?w=1200&q=80',
      description: 'Zambia offers the majestic Victoria Falls, authentic walking safaris, and the mighty Zambezi River.',
      longDescription: `Zambia is the birthplace of the walking safari, offering intimate wildlife encounters in the South Luangwa National Park. The Victoria Falls, one of the Seven Natural Wonders of the World, is a spectacle of nature's power and beauty.

The Zambezi River provides thrilling white-water rafting and serene sunset cruises, while the Lower Zambezi National Park offers exceptional game viewing from the water.`,
      attractions: ['Victoria Falls', 'Walking Safaris', 'Zambezi River', 'South Luangwa NP', 'Lower Zambezi NP', 'Lake Kariba', 'Livingstone Island', 'Devil\'s Pool'],
      bestTime: 'May - Nov',
      price: 'From $4,800',
      rating: 4.5,
      duration: '5-8 Days',
      wildlife: 'Walking Safaris',
      animals: ['🦁 Lion', '🐘 Elephant', '🦛 Hippo', '🐊 Crocodile', '🦒 Giraffe', '🦓 Zebra', '🐃 Buffalo', '🐆 Leopard'],
      monthlyGuide: {
        'Jan': { weather: '🌧️', wildlife: '🐘', rating: 6 },
        'Feb': { weather: '🌧️', wildlife: '🐘', rating: 6 },
        'Mar': { weather: '🌧️', wildlife: '🐘', rating: 6 },
        'Apr': { weather: '🌤️', wildlife: '🐘', rating: 7 },
        'May': { weather: '☀️', wildlife: '🦁', rating: 8 },
        'Jun': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Jul': { weather: '☀️', wildlife: '🦁', rating: 10 },
        'Aug': { weather: '☀️', wildlife: '🦁', rating: 10 },
        'Sep': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Oct': { weather: '☀️', wildlife: '🐘', rating: 8 },
        'Nov': { weather: '🌤️', wildlife: '🐘', rating: 7 },
        'Dec': { weather: '🌧️', wildlife: '🐘', rating: 6 }
      },
      gallery: [
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Livingstone', desc: 'Arrive at Harry Mwanga Nkumbula Airport. Transfer to your lodge near Victoria Falls.' },
        { day: 2, title: 'Victoria Falls Tour', desc: 'Visit the Victoria Falls. Afternoon sunset cruise on the Zambezi River.' },
        { day: 3, title: 'Livingstone to South Luangwa', desc: 'Fly to South Luangwa National Park. Afternoon walking safari.' },
        { day: 4, title: 'Walking Safari', desc: 'Full day walking safari in the South Luangwa. Incredible wildlife encounters.' },
        { day: 5, title: 'Game Drive', desc: 'Morning and afternoon game drives in the South Luangwa.' },
        { day: 6, title: 'Departure', desc: 'Morning safari. Transfer to the airport for departure.' }
      ]
    },
    {
      id: 'zimbabwe',
      name: 'Zimbabwe',
      region: 'Southern Africa',
      image: 'https://images.unsplash.com/photo-1575285272212-d52e915d01c7?w=1200&q=80',
      description: 'Zimbabwe is home to the majestic Victoria Falls, Hwange National Park, and rich cultural heritage.',
      longDescription: `Zimbabwe offers some of Africa's most spectacular experiences. The Victoria Falls, known locally as "Mosi-oa-Tunya" (The Smoke That Thunders), is a breathtaking natural wonder shared with Zambia.

Hwange National Park is one of Africa's largest game reserves, home to massive elephant herds and a wide variety of wildlife. The ancient city of Great Zimbabwe offers a glimpse into the region's rich history.`,
      attractions: ['Victoria Falls', 'Hwange NP', 'Lake Kariba', 'Great Zimbabwe', 'Matobo Hills', 'Mana Pools', 'Eastern Highlands', 'Bulawayo'],
      bestTime: 'May - Oct',
      price: 'From $4,200',
      rating: 4.4,
      duration: '5-8 Days',
      wildlife: 'Big 5',
      animals: ['🦁 Lion', '🐘 Elephant', '🦏 Rhino', '🐃 Buffalo', '🦒 Giraffe', '🦓 Zebra', '🐆 Leopard'],
      monthlyGuide: {
        'Jan': { weather: '🌧️', wildlife: '🐘', rating: 6 },
        'Feb': { weather: '🌧️', wildlife: '🐘', rating: 6 },
        'Mar': { weather: '🌧️', wildlife: '🐘', rating: 6 },
        'Apr': { weather: '🌤️', wildlife: '🐘', rating: 7 },
        'May': { weather: '☀️', wildlife: '🦁', rating: 8 },
        'Jun': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Jul': { weather: '☀️', wildlife: '🦁', rating: 10 },
        'Aug': { weather: '☀️', wildlife: '🦁', rating: 10 },
        'Sep': { weather: '☀️', wildlife: '🦁', rating: 9 },
        'Oct': { weather: '☀️', wildlife: '🐘', rating: 8 },
        'Nov': { weather: '🌤️', wildlife: '🐘', rating: 7 },
        'Dec': { weather: '🌧️', wildlife: '🐘', rating: 6 }
      },
      gallery: [
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Victoria Falls', desc: 'Arrive at Victoria Falls International Airport. Transfer to your lodge.' },
        { day: 2, title: 'Victoria Falls Tour', desc: 'Full day tour of Victoria Falls. Visit the rainforest and viewpoints.' },
        { day: 3, title: 'Hwange National Park', desc: 'Drive to Hwange National Park. Afternoon game drive.' },
        { day: 4, title: 'Hwange Game Drive', desc: 'Full day game drive in Hwange National Park. See large elephant herds.' },
        { day: 5, title: 'Lake Kariba', desc: 'Drive to Lake Kariba. Afternoon sunset cruise.' },
        { day: 6, title: 'Departure', desc: 'Morning at leisure. Transfer to the airport for departure.' }
      ]
    },
    {
      id: 'seychelles',
      name: 'Seychelles',
      region: 'Island Destinations',
      image: 'https://images.unsplash.com/photo-1617362985992-d0b6814cacef?w=1200&q=80',
      description: 'Seychelles is a tropical paradise with pristine beaches, crystal clear waters, and luxury island resorts.',
      longDescription: `Seychelles is the ultimate island escape. With 115 islands scattered across the Indian Ocean, this archipelago offers some of the world's most beautiful beaches, with powdery white sand and turquoise waters.

The granite boulders of Anse Lazio, the giant tortoises of Aldabra Atoll, and the vibrant coral reefs make Seychelles a paradise for nature lovers and luxury travelers alike.`,
      attractions: ['Pristine Beaches', 'Snorkeling', 'Luxury Resorts', 'Nature Trails', 'Giant Tortoises', 'Aldabra Atoll', 'Anse Lazio', 'Vallee de Mai'],
      bestTime: 'Apr - Oct',
      price: 'From $6,000',
      rating: 4.8,
      duration: '5-7 Days',
      wildlife: 'Marine Life',
      animals: ['🐠 Tropical Fish', '🐢 Giant Tortoise', '🐬 Dolphin', '🦈 Reef Shark', '🦀 Crab', '🐙 Octopus', '🐦 Seychelles Warbler'],
      monthlyGuide: {
        'Jan': { weather: '🌧️', wildlife: '🐠', rating: 6 },
        'Feb': { weather: '🌧️', wildlife: '🐠', rating: 6 },
        'Mar': { weather: '🌤️', wildlife: '🐠', rating: 7 },
        'Apr': { weather: '☀️', wildlife: '🐠', rating: 8 },
        'May': { weather: '☀️', wildlife: '🐠', rating: 9 },
        'Jun': { weather: '☀️', wildlife: '🐠', rating: 10 },
        'Jul': { weather: '☀️', wildlife: '🐠', rating: 10 },
        'Aug': { weather: '☀️', wildlife: '🐠', rating: 10 },
        'Sep': { weather: '☀️', wildlife: '🐠', rating: 9 },
        'Oct': { weather: '☀️', wildlife: '🐠', rating: 8 },
        'Nov': { weather: '🌤️', wildlife: '🐠', rating: 7 },
        'Dec': { weather: '🌧️', wildlife: '🐠', rating: 6 }
      },
      gallery: [
        'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80',
        'https://images.unsplash.com/photo-1511426463457-6ca8eb3b8e50?w=600&q=80',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Mahe', desc: 'Arrive at Seychelles International Airport. Private transfer to your luxury resort.' },
        { day: 2, title: 'Beach Relaxation', desc: 'Full day at leisure on the pristine beaches of Mahe.' },
        { day: 3, title: 'Island Hopping', desc: 'Boat cruise to Praslin Island. Visit Vallee de Mai Nature Reserve.' },
        { day: 4, title: 'La Digue Island', desc: 'Day trip to La Digue. Explore Anse Source d\'Argent beach.' },
        { day: 5, title: 'Snorkeling Adventure', desc: 'Snorkeling trip to the coral reefs. See marine life.' },
        { day: 6, title: 'Departure', desc: 'Morning at leisure. Transfer to the airport for departure.' }
      ]
    },
    {
      id: 'mauritius',
      name: 'Mauritius',
      region: 'Island Destinations',
      image: 'https://images.unsplash.com/photo-1582574643306-d00ea3f7d49b?w=1200&q=80',
      description: 'Mauritius is a tropical paradise with white sand beaches, vibrant coral reefs, and luxury resorts.',
      longDescription: `Mauritius is a dream destination for beach lovers and luxury travelers. The island offers some of the most beautiful beaches in the world, with pristine white sand and crystal clear turquoise waters.

Beyond the beaches, Mauritius offers lush tropical landscapes, vibrant coral reefs perfect for snorkeling, and rich Creole culture.`,
      attractions: ['White Beaches', 'Coral Reefs', 'Underwater Waterfall', 'Luxury Resorts', 'Creole Culture', 'Black River Gorges', 'Chamarel Waterfall', 'Seven Coloured Earths'],
      bestTime: 'May - Dec',
      price: 'From $5,500',
      rating: 4.7,
      duration: '5-7 Days',
      wildlife: 'Marine Life',
      animals: ['🐠 Tropical Fish', '🐬 Dolphin', '🦈 Reef Shark', '🐢 Turtle', '🐙 Octopus', '🦀 Crab', '🐦 Paradise Flycatcher'],
      monthlyGuide: {
        'Jan': { weather: '🌧️', wildlife: '🐠', rating: 6 },
        'Feb': { weather: '🌧️', wildlife: '🐠', rating: 6 },
        'Mar': { weather: '🌤️', wildlife: '🐠', rating: 7 },
        'Apr': { weather: '☀️', wildlife: '🐠', rating: 8 },
        'May': { weather: '☀️', wildlife: '🐠', rating: 9 },
        'Jun': { weather: '☀️', wildlife: '🐠', rating: 9 },
        'Jul': { weather: '☀️', wildlife: '🐠', rating: 9 },
        'Aug': { weather: '☀️', wildlife: '🐠', rating: 9 },
        'Sep': { weather: '☀️', wildlife: '🐠', rating: 9 },
        'Oct': { weather: '☀️', wildlife: '🐠', rating: 9 },
        'Nov': { weather: '☀️', wildlife: '🐠', rating: 8 },
        'Dec': { weather: '☀️', wildlife: '🐠', rating: 8 }
      },
      gallery: [
        'https://images.unsplash.com/photo-1511426463457-6ca8eb3b8e50?w=600&q=80',
        'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Mauritius', desc: 'Arrive at Sir Seewoosagur Ramgoolam International Airport. Transfer to your luxury resort.' },
        { day: 2, title: 'Beach Relaxation', desc: 'Full day at leisure on the beautiful beaches of Mauritius.' },
        { day: 3, title: 'Island Tour', desc: 'Visit the Seven Coloured Earths, Chamarel Waterfall, and Black River Gorges.' },
        { day: 4, title: 'Catamaran Cruise', desc: 'Full day catamaran cruise to the coral reefs. Snorkeling and swimming.' },
        { day: 5, title: 'Port Louis Exploration', desc: 'Visit the capital city. Explore the markets and colonial architecture.' },
        { day: 6, title: 'Departure', desc: 'Morning at leisure. Transfer to the airport for departure.' }
      ]
    }
  ];

  useEffect(() => {
    const found = allDestinations.find(d => d.id === id);
    if (found) {
      setDestination(found);
    }
    setLoading(false);
  }, [id]);

  const openWhatsApp = () => {
    const trigger = document.querySelector('.whatsapp-trigger');
    if (trigger) {
      trigger.click();
    } else {
      const buttons = document.querySelectorAll('button');
      for (let btn of buttons) {
        if (btn.classList.contains('whatsapp-trigger')) {
          btn.click();
          break;
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf8f4]">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-[#1a1a2e]/60 mt-4 font-light">Loading destination...</p>
        </div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf8f4]">
        <div className="text-center">
          <div className="text-6xl mb-4 opacity-30">🔍</div>
          <h2 className="text-2xl font-light text-[#1a1a2e] font-serif">Destination not found</h2>
          <p className="text-[#1a1a2e]/40 mt-2 font-light">The destination you're looking for doesn't exist.</p>
          <Link to="/destinations" className="mt-6 inline-block bg-[#c9a84c] text-white px-8 py-3 rounded-full font-light tracking-wider hover:bg-[#b8973a] transition">
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[#faf8f4] min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => navigate('/destinations')}
          className="flex items-center gap-2 text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition font-light text-sm tracking-wider"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Destinations
        </button>
      </div>

      {/* Hero Image - ROAR AFRICA Style */}
      <div className="relative h-[50vh] min-h-[400px] max-h-[600px] mt-2 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70"></div>
        
        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-[#c9a84c] text-white text-xs font-light px-4 py-1.5 rounded-full tracking-wider">
                {destination.region}
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-light px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 tracking-wider">
                <span className="text-[#c9a84c]">★</span> {destination.rating}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white font-serif tracking-wide">
              {destination.name}
            </h1>
            <p className="text-white/60 text-sm sm:text-base md:text-lg mt-3 max-w-2xl font-light leading-relaxed">
              {destination.description}
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-4">
              <span className="text-white/50 text-sm font-light tracking-wider">
                🕐 {destination.duration}
              </span>
              <span className="text-white/50 text-sm font-light tracking-wider">
                💰 {destination.price}
              </span>
              <span className="text-white/50 text-sm font-light tracking-wider">
                🦁 {destination.wildlife}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content - ROAR AFRICA Style */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content - 2/3 */}
          <div className="lg:col-span-2 space-y-10">
            {/* About */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#1a1a2e] font-serif tracking-wide mb-4">
                About {destination.name}
              </h2>
              <div className="w-12 h-0.5 bg-[#c9a84c] mb-6"></div>
              <div className="text-[#1a1a2e]/60 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
                {destination.longDescription}
              </div>
            </div>

            {/* Wildlife */}
            <div>
              <h3 className="text-xl sm:text-2xl font-light text-[#1a1a2e] font-serif tracking-wide mb-4">
                Wildlife You'll See
              </h3>
              <div className="flex flex-wrap gap-2">
                {destination.animals.map((animal, idx) => (
                  <span key={idx} className="bg-white px-4 py-2 rounded-full text-sm text-[#1a1a2e]/70 font-light border border-[#1a1a2e]/10">
                    {animal}
                  </span>
                ))}
              </div>
            </div>

            {/* Monthly Guide */}
            <div>
              <h3 className="text-xl sm:text-2xl font-light text-[#1a1a2e] font-serif tracking-wide mb-4">
                Best Time to Visit
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {Object.entries(destination.monthlyGuide).map(([month, data]) => (
                  <div key={month} className="text-center p-3 rounded-lg bg-white hover:shadow-md transition-shadow">
                    <div className="text-xs font-light text-[#1a1a2e]/60 uppercase tracking-wider">{month}</div>
                    <div className="text-xl mt-1">{data.weather}</div>
                    <div className="text-sm mt-0.5">{data.wildlife}</div>
                    <div className="w-full bg-[#faf8f4] rounded-full h-1 mt-2">
                      <div 
                        className="bg-[#c9a84c] h-1 rounded-full transition-all" 
                        style={{ width: `${data.rating * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h3 className="text-xl sm:text-2xl font-light text-[#1a1a2e] font-serif tracking-wide mb-4">
                Suggested Itinerary
              </h3>
              <div className="space-y-4">
                {destination.itinerary.map((day, idx) => (
                  <div key={idx} className="border-l-2 border-[#c9a84c] pl-5 py-1 bg-white rounded-r-lg hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3">
                      <span className="font-light text-[#c9a84c] text-sm tracking-wider">Day {day.day}</span>
                      <span className="font-light text-[#1a1a2e] text-sm">{day.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#1a1a2e]/50 font-light mt-1 leading-relaxed">{day.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-xl sm:text-2xl font-light text-[#1a1a2e] font-serif tracking-wide mb-4">
                Safari Moments
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {destination.gallery.map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`${destination.name} ${idx + 1}`}
                      className="h-24 sm:h-32 w-full object-cover hover:scale-110 transition duration-700 cursor-pointer"
                      onClick={() => setSelectedImage(idx)}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1/3 - ROAR AFRICA Style */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm sticky top-24 border border-[#1a1a2e]/5">
              <h4 className="text-lg font-light text-[#1a1a2e] font-serif tracking-wide mb-6">Quick Info</h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-[#1a1a2e]/5 pb-3">
                  <span className="text-[#1a1a2e]/40 font-light tracking-wider">Region</span>
                  <span className="font-light text-[#1a1a2e]">{destination.region}</span>
                </div>
                <div className="flex justify-between border-b border-[#1a1a2e]/5 pb-3">
                  <span className="text-[#1a1a2e]/40 font-light tracking-wider">Best Time</span>
                  <span className="font-light text-[#1a1a2e]">{destination.bestTime}</span>
                </div>
                <div className="flex justify-between border-b border-[#1a1a2e]/5 pb-3">
                  <span className="text-[#1a1a2e]/40 font-light tracking-wider">Duration</span>
                  <span className="font-light text-[#1a1a2e]">{destination.duration}</span>
                </div>
                <div className="flex justify-between border-b border-[#1a1a2e]/5 pb-3">
                  <span className="text-[#1a1a2e]/40 font-light tracking-wider">Price Range</span>
                  <span className="font-light text-[#c9a84c]">{destination.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1a1a2e]/40 font-light tracking-wider">Rating</span>
                  <span className="font-light text-[#c9a84c]">★ {destination.rating}</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-[#c9a84c] hover:bg-[#b8973a] text-white py-3.5 rounded-full font-light tracking-wider transition transform hover:scale-[1.02]"
                >
                  Book Now
                </button>
                <Link
                  to="/packages"
                  className="w-full block text-center bg-transparent border border-[#1a1a2e]/20 hover:border-[#1a1a2e] text-[#1a1a2e] py-3.5 rounded-full font-light tracking-wider transition"
                >
                  View Packages
                </Link>
              </div>
            </div>

            {/* Wildlife Highlights */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#1a1a2e]/5">
              <h4 className="text-sm font-light text-[#1a1a2e] tracking-wider mb-3">Wildlife Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {destination.animals.slice(0, 5).map((animal, idx) => (
                  <span key={idx} className="bg-[#faf8f4] px-3 py-1.5 rounded-full text-sm text-[#1a1a2e]/70 font-light">
                    {animal}
                  </span>
                ))}
                {destination.animals.length > 5 && (
                  <span className="bg-[#faf8f4] px-3 py-1.5 rounded-full text-sm text-[#1a1a2e]/50 font-light">
                    +{destination.animals.length - 5} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetail;