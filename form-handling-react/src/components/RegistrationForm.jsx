import { useState } from "react";

function RegistrationForms() {
    //State for each field
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    
    const [errors, setErrors] = useState("");

    //Handle change for each input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
//Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();
    //basic validation
    if (!formData.username || !formData.email || !formData.password) {
        setErrors("All fields are required");
        return;
    }
    setErrors("");
    //Submit form data
    try {
        //simulate API call
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("User registered:", data);
    } catch (error) {
        console.error("Error registering user:", error);
    }
};

return (
    <form onSubmit={handleSubmit}
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
                value={formData.username}
                onChange={handleChange}
                className="border p-2 w-full"
            />
            
        </div>
        <div>
            <label className="block">Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full"
            />
        </div>
        <div>
            <label className="block">Password:</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border p-2 w-full"
            />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Register</button>
    </form>);
}
export default RegistrationForms;