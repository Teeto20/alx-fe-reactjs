function Home() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0b6",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(57, 122, 176, 0.45)",
      }}
    >
      <h1 style={{ color: "blue" }}>Welcome to Our Website</h1>
      <p style={{ color: "#666", lineHeight: "1.5" }}>
        We are dedicated to delivering excellence in all our services.
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9dNPQEAnG2sBMWUKWDGpUHZZr3lRsv9VcA&s"
        alt="Welcome Banner"
        style={{ maxWidth: "100%", marginTop: "1rem" }}
      />
    </div>
  );
}
export default Home;
