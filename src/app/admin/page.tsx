"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

interface Product {
  id: string;
  name: string;
  image: string;
  features: string[];
  description: string;
  price: number;
  category: string;
  scale: string;
}

const emptyForm = {
  name: "",
  image: "/images/cat_jdm.png",
  price: "",
  category: "JDM",
  scale: "1:64",
  features: "",
  description: "",
};

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState(emptyForm);
  const [file, setFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [tab, setTab] = useState<"add" | "manage">("manage");

  const fetchProducts = useCallback(async () => {
    try {
      const res = await fetch("/api/products");
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let finalImageUrl = formData.image;

      if (file) {
        const uploadData = new FormData();
        uploadData.append("file", file);
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: uploadData,
        });

        if (!uploadRes.ok) throw new Error("Failed to upload image");
        const uploadResult = await uploadRes.json();
        finalImageUrl = uploadResult.url;
      }

      if (editingId) {
        // UPDATE
        const res = await fetch(`/api/products/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, image: finalImageUrl }),
        });
        if (!res.ok) throw new Error("Failed to update product");
        setMessage("✅ Product updated successfully!");
        setEditingId(null);
      } else {
        // CREATE
        const res = await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, image: finalImageUrl }),
        });
        if (!res.ok) throw new Error("Failed to create product");
        setMessage("✅ Product added successfully!");
      }

      setFormData(emptyForm);
      setFile(null);
      fetchProducts();
      setTab("manage");
    } catch {
      setMessage(editingId ? "❌ Error updating product." : "❌ Error adding product.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      image: product.image,
      price: String(product.price),
      category: product.category,
      scale: product.scale,
      features: product.features.join(", "),
      description: product.description,
    });
    setFile(null);
    setTab("add");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setMessage("🗑️ Product deleted.");
      setDeleteConfirmId(null);
      fetchProducts();
    } catch {
      setMessage("❌ Error deleting product.");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setFile(null);
  };

  return (
    <main className="min-h-screen bg-brand-light pb-20">
      <Navbar />

      <section className="pt-36 md:pt-44 px-5 md:px-10 max-w-5xl mx-auto">
        <h1 className="font-serif text-brand-paper text-[clamp(2.5rem,5vw,4rem)] leading-none mb-4">
          ADMIN DASHBOARD
        </h1>
        <p className="text-brand-ink/60 text-sm mb-8">
          Manage your diecast collection — add, edit, or delete products.
        </p>

        {/* Message Toast */}
        {message && (
          <div
            className={`p-4 mb-6 text-sm font-semibold rounded-xl border backdrop-blur-sm transition-all ${
              message.includes("✅") || message.includes("🗑️")
                ? "bg-green-500/10 border-green-500/30 text-green-400"
                : "bg-red-500/10 border-red-500/30 text-red-400"
            }`}
          >
            {message}
          </div>
        )}

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => { setTab("manage"); cancelEdit(); }}
            className={`px-6 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all ${
              tab === "manage"
                ? "bg-brand-signal text-brand-dark"
                : "bg-brand-card border border-brand-line text-brand-ink/60 hover:text-brand-paper hover:border-brand-ink/40"
            }`}
          >
            📦 Manage Products ({products.length})
          </button>
          <button
            onClick={() => setTab("add")}
            className={`px-6 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all ${
              tab === "add"
                ? "bg-brand-signal text-brand-dark"
                : "bg-brand-card border border-brand-line text-brand-ink/60 hover:text-brand-paper hover:border-brand-ink/40"
            }`}
          >
            ➕ {editingId ? "Edit Product" : "Add New"}
          </button>
        </div>

        {/* =========== ADD / EDIT FORM =========== */}
        {tab === "add" && (
          <div className="bg-brand-card border border-brand-line p-6 md:p-10 rounded-2xl mb-10 animate-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-brand-paper">
                {editingId ? "✏️ Edit Diecast" : "➕ Add New Diecast"}
              </h2>
              {editingId && (
                <button
                  onClick={cancelEdit}
                  className="text-xs text-red-400 hover:text-red-300 uppercase tracking-widest border border-red-500/30 px-4 py-2 rounded-lg hover:bg-red-500/10 transition-all"
                >
                  Cancel Edit
                </button>
              )}
            </div>

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

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.1em] text-brand-ink/80">Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="w-full bg-brand-dark border border-brand-line rounded-lg px-4 py-[9px] text-sm text-brand-paper focus:outline-none file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-signal file:text-brand-dark hover:file:bg-orange-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.1em] text-brand-ink/80">Or Image URL Path</label>
                  <input
                    type="text"
                    className="w-full bg-brand-dark border border-brand-line rounded-lg px-4 py-3 text-sm text-brand-paper focus:outline-none focus:border-brand-accent disabled:opacity-50"
                    value={formData.image}
                    disabled={!!file}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/images/mobil.jpeg"
                  />
                </div>
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
                className={`w-full font-semibold uppercase tracking-widest py-4 rounded-lg transition-colors disabled:opacity-50 ${
                  editingId
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : "bg-brand-signal text-brand-dark hover:bg-orange-500"
                }`}
              >
                {loading
                  ? "Saving..."
                  : editingId
                  ? "💾 Update Product"
                  : "➕ Add Product"}
              </button>
            </form>
          </div>
        )}

        {/* =========== PRODUCT LIST =========== */}
        {tab === "manage" && (
          <div className="space-y-4">
            {products.length === 0 ? (
              <div className="bg-brand-card border border-brand-line rounded-2xl p-12 text-center">
                <p className="text-brand-ink/40 text-lg">No products yet.</p>
                <button
                  onClick={() => setTab("add")}
                  className="mt-4 text-brand-signal hover:text-orange-400 text-sm uppercase tracking-widest"
                >
                  Add your first product →
                </button>
              </div>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="bg-brand-card border border-brand-line rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center group hover:border-brand-ink/40 transition-all"
                >
                  {/* Product Image */}
                  <div className="w-full md:w-24 h-40 md:h-24 relative rounded-xl overflow-hidden flex-shrink-0 bg-brand-dark">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 96px"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-brand-paper font-semibold text-base truncate">
                      {product.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      <span className="inline-block bg-brand-signal/20 text-brand-signal text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold">
                        {product.category}
                      </span>
                      <span className="inline-block bg-brand-ink/10 text-brand-ink/60 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full">
                        {product.scale}
                      </span>
                    </div>
                    <p className="text-brand-ink/50 text-xs mt-1.5 truncate max-w-md">
                      {product.description || "No description"}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex-shrink-0 text-right">
                    <p className="text-brand-paper font-bold text-lg">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-shrink-0 w-full md:w-auto">
                    <button
                      onClick={() => handleEdit(product)}
                      className="flex-1 md:flex-none px-4 py-2.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-blue-500/20 hover:border-blue-400 transition-all"
                    >
                      ✏️ Edit
                    </button>

                    {deleteConfirmId === product.id ? (
                      <div className="flex gap-2 flex-1 md:flex-none">
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="flex-1 md:flex-none px-4 py-2.5 bg-red-600 text-white rounded-lg text-xs uppercase tracking-wider font-bold hover:bg-red-500 transition-all"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(null)}
                          className="flex-1 md:flex-none px-4 py-2.5 bg-brand-dark border border-brand-line text-brand-ink/60 rounded-lg text-xs uppercase tracking-wider hover:text-brand-paper transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirmId(product.id)}
                        className="flex-1 md:flex-none px-4 py-2.5 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-red-500/20 hover:border-red-400 transition-all"
                      >
                        🗑️ Delete
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </section>
    </main>
  );
}
