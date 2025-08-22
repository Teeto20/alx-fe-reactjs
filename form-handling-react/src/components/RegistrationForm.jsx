import { useState } from "react";

function RegistrationForms() {
  //State for each field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState("");

  //Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    //basic validation
    if (!username || !email || !password) {
      setErrors("All fields are required");
      return;
    }
    if (!username) {
      setErrors("Username required");
      return;
    }
    if (!email) {
      setErrors("Email required");
      return;
    }
    if (!password) {
      setErrors("Password required");
      return;
    }
    setErrors("");
    //Submit form data
    try {
      //simulate API call
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(username, email, password),
        }
      );
      const data = await response.json();
      console.log("User registered:", data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-md w-80 mx-auto"
    >
      <h2 className="text-xl font-bold">Controlled Form</h2>
      <h2 className="text-xl font-bold">Controlled Form</h2>
      {errors && <p className="text-red-500">{errors}</p>}
      <div>
        <label className="block">Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Register
      </button>
    </form>
  );
}
export default RegistrationForms;
