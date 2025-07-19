function Services() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src="https://media.istockphoto.com/id/686952826/photo/fruit-nut.jpg?s=1024x1024&w=is&k=20&c=i2UnnAKnSJJuUnmz7MACXCKCBBKrw9e84eFeJYBnpmA="
        alt="dont go"
        style={{ maxWidth: "100%", marginTop: "1rem" }}
      />
      <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "12px" }}>
        Our Services
      </h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}
export default Services;
