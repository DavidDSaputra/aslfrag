"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    image: "/images/model1.jpeg", // Default image path
    price: "",
    category: "JDM",
    scale: "1:64",
    features: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to create product");

      setMessage("Product added successfully!");
      setFormData({
        name: "",
        image: "/images/model1.jpeg",
        price: "",
        category: "JDM",
        scale: "1:64",
        features: "",
        description: "",
      });
    } catch (error) {
      setMessage("Error adding product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-brand-light pb-20">
      <Navbar />

      <section className="pt-36 md:pt-44 px-5 md:px-10 max-w-3xl mx-auto">
        <h1 className="font-serif text-brand-paper text-[clamp(2.5rem,5vw,4rem)] leading-none mb-8">
          ADMIN DASHBOARD
        </h1>

        <div className="bg-brand-card border border-brand-line p-6 md:p-10 rounded-2xl">
          <h2 className="text-xl text-brand-paper mb-6">Add New Diecast</h2>

          {message && (
            <div className={`p-4 mb-6 text-sm font-semibold rounded-lg ${message.includes("success") ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.1em] text-brand-ink/80">Product Name</label>
                <input
                  required
                  type="text"
                  className="w-full bg-brand-dark border border-brand-line rounded-lg px-4 py-3 text-sm text-brand-paper focus:outline-none focus:border-brand-accent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Nissan Skyline R34"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.1em] text-brand-ink/80">Price ($)</label>
                <input
                  required
                  type="number"
                  step="0.01"
                  className="w-full bg-brand-dark border border-brand-line rounded-lg px-4 py-3 text-sm text-brand-paper focus:outline-none focus:border-brand-accent"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="e.g. 45.00"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.1em] text-brand-ink/80">Image URL Path</label>
              <input
                required
                type="text"
                className="w-full bg-brand-dark border border-brand-line rounded-lg px-4 py-3 text-sm text-brand-paper focus:outline-none focus:border-brand-accent"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="/images/mobil.jpeg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.1em] text-brand-ink/80">Category</label>
                <select
                  className="w-full bg-brand-dark border border-brand-line rounded-lg px-4 py-3 text-sm text-brand-paper focus:outline-none focus:border-brand-accent"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="JDM">JDM</option>
                  <option value="Muscle">Muscle</option>
                  <option value="Exotic">Exotic</option>
                  <option value="Classic">Classic</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.1em] text-brand-ink/80">Scale</label>
                <select
                  className="w-full bg-brand-dark border border-brand-line rounded-lg px-4 py-3 text-sm text-brand-paper focus:outline-none focus:border-brand-accent"
                  value={formData.scale}
                  onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                >
                  <option value="1:64">1:64</option>
                  <option value="1:43">1:43</option>
                  <option value="1:18">1:18</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.1em] text-brand-ink/80">Features (Comma separated)</label>
              <input
                type="text"
                className="w-full bg-brand-dark border border-brand-line rounded-lg px-4 py-3 text-sm text-brand-paper focus:outline-none focus:border-brand-accent"
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                placeholder="e.g. Diecast Metal, Real Riders"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.1em] text-brand-ink/80">Description</label>
              <textarea
                rows={4}
                className="w-full bg-brand-dark border border-brand-line rounded-lg px-4 py-3 text-sm text-brand-paper focus:outline-none focus:border-brand-accent"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-signal text-brand-dark font-semibold uppercase tracking-widest py-4 rounded-lg hover:bg-orange-500 transition-colors disabled:opacity-50"
            >
              {loading ? "Saving..." : "Add Product"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
