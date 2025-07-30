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
        src="https://media.istockphoto.com/id/2015507439/photo/martech-marketing-technology-concept-businessman-touching-network-connection-on-online.jpg?s=612x612&w=0&k=20&c=9OY3YmOFvGPH-yq7g1zuD7XcUyWr45K_8ONvN2m8F30="
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
