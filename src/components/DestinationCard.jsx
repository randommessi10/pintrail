import '../styles/DestinationCard.css';

export default function DestinationCard({ name, image, categoryId }) {
  return (
    <div className="destination-card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{categoryId}</p>
    </div>
  );
}
