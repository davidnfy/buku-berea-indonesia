import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.execute("SELECT * FROM buku ORDER BY id DESC");
    return Response.json(rows);
  } catch (error) {
    console.error("Database error:", error);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const { judul, penulis, berat, harga } = data;
    await db.execute(
      "INSERT INTO buku (judul, penulis, berat, harga) VALUES (?, ?, ?, ?)",
      [judul, penulis, berat, harga]
    );
    return Response.json({ message: "Buku berhasil ditambahkan" });
  } catch (error) {
    console.error("Database error:", error);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
