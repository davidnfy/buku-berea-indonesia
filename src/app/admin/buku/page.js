"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BukuPage() {
  const [buku, setBuku] = useState([]);

  useEffect(() => {
    fetch("/api/admin/buku")
      .then((res) => res.json())
      .then((data) => setBuku(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Daftar Buku</h2>
      <Link href="/admin/buku/tambah" className="btn btn-primary mb-3">
        Tambah Buku
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Berat (g)</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {buku.map((item) => (
            <tr key={item.id}>
              <td>{item.judul}</td>
              <td>{item.penulis}</td>
              <td>{item.berat}</td>
              <td>Rp {item.harga.toLocaleString()}</td>
              <td>
                <Link
                  href={`/admin/buku/edit/${item.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger btn-sm"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleDelete(id) {
    if (confirm("Yakin hapus buku ini?")) {
      fetch(`/api/admin/buku/${id}`, { method: "DELETE" }).then(() =>
        setBuku(buku.filter((b) => b.id !== id))
      );
    }
  }
}
