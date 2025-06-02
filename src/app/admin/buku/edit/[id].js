"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditBuku() {
  const [form, setForm] = useState({
    judul: "",
    penulis: "",
    berat: "",
    harga: "",
  });

  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    fetch(`/api/admin/buku/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          judul: data.judul,
          penulis: data.penulis,
          berat: data.berat,
          harga: data.harga,
        });
      });
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/admin/buku/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("/admin/buku");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Buku</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Judul</label>
          <input
            type="text"
            className="form-control"
            value={form.judul}
            onChange={(e) => setForm({ ...form, judul: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Penulis</label>
          <input
            type="text"
            className="form-control"
            value={form.penulis}
            onChange={(e) => setForm({ ...form, penulis: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Berat (gram)</label>
          <input
            type="number"
            className="form-control"
            value={form.berat}
            onChange={(e) => setForm({ ...form, berat: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Harga</label>
          <input
            type="number"
            className="form-control"
            value={form.harga}
            onChange={(e) => setForm({ ...form, harga: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
