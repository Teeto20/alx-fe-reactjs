function About() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "12px" }}>
        About Us
      </h1>
      <p style={{ color: "#666", lineHeight: "1.5" }}>
        Our company has been providing top-notch services since 1990. We
        specialize in various fields including technology, marketing, and
        consultancy.
      </p>
      <img
        src="https://www.shutterstock.com/image-photo/it-information-technology-concept-consultant-600nw-2545256499.jpg"
        alt="new"
        style={{ maxWidth: "100%", marginTop: "1rem" }}
      />
    </div>
  );
}
export default About;
