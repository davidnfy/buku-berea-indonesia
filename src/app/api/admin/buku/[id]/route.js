import db from "@/lib/db";

export async function DELETE(req, { params }) {
  const { id } = params;
  await db.execute("DELETE FROM buku WHERE id = ?", [id]);
  return Response.json({ message: "Buku dihapus" });
}
