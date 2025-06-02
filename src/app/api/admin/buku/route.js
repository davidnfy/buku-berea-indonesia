import db from "@/lib/db";

export async function GET() {
  const [rows] = await db.execute("SELECT * FROM buku ORDER BY id DESC");
  return Response.json(rows);
}

export async function POST(req) {
  const data = await req.json();
  const { judul, penulis, berat, harga } = data;
  await db.execute(
    "INSERT INTO buku (judul, penulis, berat, harga) VALUES (?, ?, ?, ?)",
    [judul, penulis, berat, harga]
  );
  return Response.json({ message: "Buku berhasil ditambahkan" });
}
