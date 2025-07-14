import ItineraryCard from "./ItineraryCard";

export default function ItineraryGrid({ itineraries }) {
    const itineraryCards = itineraries.map((itinerary) => (
    <ItineraryCard 
        key={itinerary.id}
        name={itinerary.name}
        description={itinerary.description}
        image={itinerary.image}
    />
    ));

    return (
        <>
            {itineraryCards}
        </>
    );
}
