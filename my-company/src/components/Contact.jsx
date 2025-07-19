import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#9c2929ff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(129, 229, 146, 0.1)",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "12px" }}>
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0" }}
            required
          />
        </div>
        <div>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0" }}
            required
          />
        </div>
        <div>
          <br />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ display: "block", width: "100%", margin: "10px 0" }}
            required
          />
        </div>
        <br />
        <button type="submit">Send Message</button>
      </form>
      <img
        src="https://media.istockphoto.com/id/1480239219/photo/an-analyst-uses-a-computer-and-dashboard-for-data-business-analysis-and-data-management.webp?s=2048x2048&w=is&k=20&c=5H7Sjo4DO4LT1H-gifrH9x6wDtHmOLuZo8rw3w0739k="
        alt="contact"
        style={{ maxWidth: "100%", marginTop: "1rem" }}
      />
    </div>
  );
}
export default Contact;
