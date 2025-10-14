const rawExpenses = [
    {
      "destination_id": 1,
      "destination_name": "Kyoto Temple Gardens",
      "category": "flights",
      "cost_per_day": "45000",
      "currency": "INR"
    },
    {
      "destination_id": 1,
      "destination_name": "Kyoto Temple Gardens",
      "category": "accommodation",
      "cost_per_day": "6000",
      "currency": "INR"
    },
    {
      "destination_id": 1,
      "destination_name": "Kyoto Temple Gardens",
      "category": "food",
      "cost_per_day": "1800",
      "currency": "INR"
    },
    {
      "destination_id": 1,
      "destination_name": "Kyoto Temple Gardens",
      "category": "transport",
      "cost_per_day": "700",
      "currency": "INR"
    },
    {
      "destination_id": 1,
      "destination_name": "Kyoto Temple Gardens",
      "category": "activities",
      "cost_per_day": "1500",
      "currency": "INR"
    },
    {
      "destination_id": 2,
      "destination_name": "Tokyo Street Food Markets",
      "category": "flights",
      "cost_per_day": "45000",
      "currency": "INR"
    },
    {
      "destination_id": 2,
      "destination_name": "Tokyo Street Food Markets",
      "category": "accommodation",
      "cost_per_day": "5500",
      "currency": "INR"
    },
    {
      "destination_id": 2,
      "destination_name": "Tokyo Street Food Markets",
      "category": "food",
      "cost_per_day": "2000",
      "currency": "INR"
    },
    {
      "destination_id": 2,
      "destination_name": "Tokyo Street Food Markets",
      "category": "transport",
      "cost_per_day": "600",
      "currency": "INR"
    },
    {
      "destination_id": 2,
      "destination_name": "Tokyo Street Food Markets",
      "category": "activities",
      "cost_per_day": "1000",
      "currency": "INR"
    },
    {
      "destination_id": 3,
      "destination_name": "Arc de Triomphe",
      "category": "flights",
      "cost_per_day": "52000",
      "currency": "INR"
    },
    {
      "destination_id": 3,
      "destination_name": "Arc de Triomphe",
      "category": "accommodation",
      "cost_per_day": "7000",
      "currency": "INR"
    },
    {
      "destination_id": 3,
      "destination_name": "Arc de Triomphe",
      "category": "food",
      "cost_per_day": "2500",
      "currency": "INR"
    },
    {
      "destination_id": 3,
      "destination_name": "Arc de Triomphe",
      "category": "transport",
      "cost_per_day": "800",
      "currency": "INR"
    },
    {
      "destination_id": 3,
      "destination_name": "Arc de Triomphe",
      "category": "activities",
      "cost_per_day": "1600",
      "currency": "INR"
    },
    {
      "destination_id": 4,
      "destination_name": "Maldives Crystal Lagoons",
      "category": "flights",
      "cost_per_day": "30000",
      "currency": "INR"
    },
    {
      "destination_id": 4,
      "destination_name": "Maldives Crystal Lagoons",
      "category": "accommodation",
      "cost_per_day": "8500",
      "currency": "INR"
    },
    {
      "destination_id": 4,
      "destination_name": "Maldives Crystal Lagoons",
      "category": "food",
      "cost_per_day": "1800",
      "currency": "INR"
    },
    {
      "destination_id": 4,
      "destination_name": "Maldives Crystal Lagoons",
      "category": "transport",
      "cost_per_day": "400",
      "currency": "INR"
    },
    {
      "destination_id": 4,
      "destination_name": "Maldives Crystal Lagoons",
      "category": "activities",
      "cost_per_day": "2000",
      "currency": "INR"
    },
    {
      "destination_id": 6,
      "destination_name": "Eiffel Tower",
      "category": "flights",
      "cost_per_day": "52000",
      "currency": "INR"
    },
    {
      "destination_id": 6,
      "destination_name": "Eiffel Tower",
      "category": "accommodation",
      "cost_per_day": "7200",
      "currency": "INR"
    },
    {
      "destination_id": 6,
      "destination_name": "Eiffel Tower",
      "category": "food",
      "cost_per_day": "2400",
      "currency": "INR"
    },
    {
      "destination_id": 6,
      "destination_name": "Eiffel Tower",
      "category": "transport",
      "cost_per_day": "750",
      "currency": "INR"
    },
    {
      "destination_id": 6,
      "destination_name": "Eiffel Tower",
      "category": "activities",
      "cost_per_day": "1200",
      "currency": "INR"
    },
    {
      "destination_id": 7,
      "destination_name": "Louvre Museum",
      "category": "flights",
      "cost_per_day": "52000",
      "currency": "INR"
    },
    {
      "destination_id": 7,
      "destination_name": "Louvre Museum",
      "category": "accommodation",
      "cost_per_day": "7000",
      "currency": "INR"
    },
    {
      "destination_id": 7,
      "destination_name": "Louvre Museum",
      "category": "food",
      "cost_per_day": "2300",
      "currency": "INR"
    },
    {
      "destination_id": 7,
      "destination_name": "Louvre Museum",
      "category": "transport",
      "cost_per_day": "800",
      "currency": "INR"
    },
    {
      "destination_id": 7,
      "destination_name": "Louvre Museum",
      "category": "activities",
      "cost_per_day": "1800",
      "currency": "INR"
    },
    {
      "destination_id": 8,
      "destination_name": "Seine River Cruise",
      "category": "flights",
      "cost_per_day": "52000",
      "currency": "INR"
    },
    {
      "destination_id": 8,
      "destination_name": "Seine River Cruise",
      "category": "accommodation",
      "cost_per_day": "7200",
      "currency": "INR"
    },
    {
      "destination_id": 8,
      "destination_name": "Seine River Cruise",
      "category": "food",
      "cost_per_day": "2400",
      "currency": "INR"
    },
    {
      "destination_id": 8,
      "destination_name": "Seine River Cruise",
      "category": "transport",
      "cost_per_day": "800",
      "currency": "INR"
    },
    {
      "destination_id": 8,
      "destination_name": "Seine River Cruise",
      "category": "activities",
      "cost_per_day": "2500",
      "currency": "INR"
    },
    {
      "destination_id": 9,
      "destination_name": "Queenstown Adventure Hub",
      "category": "flights",
      "cost_per_day": "60000",
      "currency": "INR"
    },
    {
      "destination_id": 9,
      "destination_name": "Queenstown Adventure Hub",
      "category": "accommodation",
      "cost_per_day": "6500",
      "currency": "INR"
    },
    {
      "destination_id": 9,
      "destination_name": "Queenstown Adventure Hub",
      "category": "food",
      "cost_per_day": "2200",
      "currency": "INR"
    },
    {
      "destination_id": 9,
      "destination_name": "Queenstown Adventure Hub",
      "category": "transport",
      "cost_per_day": "1000",
      "currency": "INR"
    },
    {
      "destination_id": 9,
      "destination_name": "Queenstown Adventure Hub",
      "category": "activities",
      "cost_per_day": "3000",
      "currency": "INR"
    },
    {
      "destination_id": 10,
      "destination_name": "Milford Sound",
      "category": "flights",
      "cost_per_day": "60000",
      "currency": "INR"
    },
    {
      "destination_id": 10,
      "destination_name": "Milford Sound",
      "category": "accommodation",
      "cost_per_day": "6200",
      "currency": "INR"
    },
    {
      "destination_id": 10,
      "destination_name": "Milford Sound",
      "category": "food",
      "cost_per_day": "2100",
      "currency": "INR"
    },
    {
      "destination_id": 10,
      "destination_name": "Milford Sound",
      "category": "transport",
      "cost_per_day": "1200",
      "currency": "INR"
    },
    {
      "destination_id": 10,
      "destination_name": "Milford Sound",
      "category": "activities",
      "cost_per_day": "2500",
      "currency": "INR"
    },
    {
      "destination_id": 11,
      "destination_name": "Rainbow Mountain, Peru",
      "category": "flights",
      "cost_per_day": "70000",
      "currency": "INR"
    },
    {
      "destination_id": 11,
      "destination_name": "Rainbow Mountain, Peru",
      "category": "accommodation",
      "cost_per_day": "4000",
      "currency": "INR"
    },
    {
      "destination_id": 11,
      "destination_name": "Rainbow Mountain, Peru",
      "category": "food",
      "cost_per_day": "1600",
      "currency": "INR"
    },
    {
      "destination_id": 11,
      "destination_name": "Rainbow Mountain, Peru",
      "category": "transport",
      "cost_per_day": "800",
      "currency": "INR"
    },
    {
      "destination_id": 11,
      "destination_name": "Rainbow Mountain, Peru",
      "category": "activities",
      "cost_per_day": "1800",
      "currency": "INR"
    },
    {
      "destination_id": 12,
      "destination_name": "Alps",
      "category": "flights",
      "cost_per_day": "55000",
      "currency": "INR"
    },
    {
      "destination_id": 12,
      "destination_name": "Alps",
      "category": "accommodation",
      "cost_per_day": "8000",
      "currency": "INR"
    },
    {
      "destination_id": 12,
      "destination_name": "Alps",
      "category": "food",
      "cost_per_day": "2500",
      "currency": "INR"
    },
    {
      "destination_id": 12,
      "destination_name": "Alps",
      "category": "transport",
      "cost_per_day": "1000",
      "currency": "INR"
    },
    {
      "destination_id": 12,
      "destination_name": "Alps",
      "category": "activities",
      "cost_per_day": "3500",
      "currency": "INR"
    },
    {
      "destination_id": 15,
      "destination_name": "Bali",
      "category": "flights",
      "cost_per_day": "25000",
      "currency": "INR"
    },
    {
      "destination_id": 15,
      "destination_name": "Bali",
      "category": "accommodation",
      "cost_per_day": "2000",
      "currency": "INR"
    },
    {
      "destination_id": 15,
      "destination_name": "Bali",
      "category": "food",
      "cost_per_day": "1000",
      "currency": "INR"
    },
    {
      "destination_id": 15,
      "destination_name": "Bali",
      "category": "transport",
      "cost_per_day": "500",
      "currency": "INR"
    },
    {
      "destination_id": 15,
      "destination_name": "Bali",
      "category": "activities",
      "cost_per_day": "1500",
      "currency": "INR"
    }
  ];

export const expenses = rawExpenses.filter((e) => e.category !== "flights");