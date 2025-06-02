"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BukuPage() {
  const [buku, setBuku] = useState([]);

  useEffect(() => {
    fetch("/api/buku")
      .then((res) => res.json())
      .then((data) => setBuku(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>TAMBAHH BUKU</h2>
    </div>
  );

  function handleDelete(id) {
    if (confirm("Yakin hapus buku ini?")) {
      fetch(`/api/buku/${id}`, { method: "DELETE" }).then(() =>
        setBuku(buku.filter((b) => b.id !== id))
      );
    }
  }
}
