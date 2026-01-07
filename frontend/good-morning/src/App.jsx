import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [greeting, setGreeting] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setGreeting(data.message);

      // optional: reset form
      setFormData({ name: "", phone: "", email: "" });
    } catch (error) {
      setGreeting("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 transition hover:shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Good Morning ☀️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-300"
          />

          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-300"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {greeting && (
          <p className="mt-4 text-center text-green-600 font-medium">
            {greeting}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
