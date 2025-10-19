export default function ProfileFasilitas() {
  const fasilitas = [
    {
      nama: "Ruang Kelas Nyaman",
      deskripsi:
        "Didesain dengan pencahayaan dan ventilasi yang baik untuk mendukung proses belajar yang kondusif.",
      foto: "/fasilitas/kelas.jpg",
    },
    {
      nama: "Laboratorium IPA",
      deskripsi:
        "Dilengkapi alat praktikum modern untuk menunjang pembelajaran sains berbasis eksperimen.",
      foto: "/fasilitas/lab-ipa.jpg",
    },
    {
      nama: "Perpustakaan Sekolah",
      deskripsi:
        "Menyediakan koleksi buku yang lengkap serta ruang baca yang tenang dan nyaman.",
      foto: "/fasilitas/perpustakaan.jpg",
    },
    {
      nama: "Lapangan Serbaguna",
      deskripsi:
        "Tempat siswa mengembangkan bakat olahraga dan kegiatan ekstrakurikuler.",
      foto: "/fasilitas/lapangan.jpg",
    },
    {
      nama: "Ruang Komputer",
      deskripsi:
        "Mendukung pembelajaran berbasis teknologi informasi dan digital literacy.",
      foto: "/fasilitas/komputer.jpg",
    },
    {
      nama: "Aula & Ruang Serbaguna",
      deskripsi:
        "Digunakan untuk kegiatan sekolah seperti seminar, lomba, dan acara perayaan.",
      foto: "/fasilitas/aula.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-700 mb-3">
            Fasilitas Sekolah
          </h2>
          <div className="w-24 h-1 bg-maroon-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sarana dan prasarana yang mendukung proses belajar mengajar serta
            pengembangan potensi siswa.
          </p>
        </div>

        {/* Grid Fasilitas */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {fasilitas.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-48">
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-maroon-700 mb-2">
                  {item.nama}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
