export default function AdSlot({ type = "in-content", label }) {
  const sizes = {
    leaderboard: "728×90 leaderboard",
    "in-content": "336×280 in-content unit",
    sidebar: "300×250 sidebar unit",
  };
  return <div className={`ad-slot ${type}`}>Advertisement — {label || sizes[type]}</div>;
}
