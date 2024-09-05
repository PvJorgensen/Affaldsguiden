export const StarRating = ({ rating }) => {
    const maxStars = 5;
    const filledStars = Math.round(rating); // Round the rating to the nearest integer
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
        if (i <= filledStars) {
            stars.push(<span key={i}>&#9733;</span>); // Filled star (★)
        } else {
            stars.push(<span key={i}>&#9734;</span>); // Empty star (☆)
        }
    }

    return <div>{stars}</div>;
};