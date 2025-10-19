import { Megaphone } from "lucide-react";

export default function PengumumanPage() {
  const pengumumanList = [
    {
      id: 1,
      judul: "Jadwal Ujian Tengah Semester Ganjil 2024/2025",
      tanggal: "5 September 2024",
      isi: "Ujian Tengah Semester Ganjil akan dilaksanakan mulai tanggal 16–20 September 2024. Diharapkan seluruh siswa mempersiapkan diri dengan baik.",
    },
    {
      id: 2,
      judul: "Libur Nasional dan Cuti Bersama Maulid Nabi",
      tanggal: "10 September 2024",
      isi: "Sekolah akan diliburkan pada tanggal 15–16 September 2024 dalam rangka memperingati Maulid Nabi Muhammad SAW.",
    },
    {
      id: 3,
      judul: "Hasil Seleksi PPDB Gelombang 1 Tahun 2024/2025",
      tanggal: "20 Juni 2024",
      isi: "Daftar nama peserta didik yang lolos seleksi PPDB Gelombang 1 dapat dilihat di papan pengumuman sekolah atau melalui website resmi sekolah.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-maroon-100 rounded-full mb-6">
            <Megaphone size={32} className="text-maroon-700" />
          </div>
          <h1 className="text-4xl font-bold text-maroon-700 mb-4">
            Pengumuman
          </h1>
          <div className="w-20 h-1 bg-maroon-600 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Informasi penting terkini bagi siswa, guru, dan orang tua seputar
            kegiatan dan agenda sekolah.
          </p>
        </div>

        {/* ================= LIST PENGUMUMAN ================= */}
        <div className="space-y-8">
          {pengumumanList.map((item, index) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Tanggal & Metadata */}
                  <div className="flex items-start gap-4 lg:w-48 lg:shrink-0">
                    <div className="bg-maroon-50 p-3 rounded-xl group-hover:bg-maroon-100 transition-colors duration-300">
                      <Megaphone size={24} className="text-maroon-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                        Diumumkan
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {item.tanggal}
                      </p>
                    </div>
                  </div>

                  {/* Konten Pengumuman */}
                  <div className="flex-1 lg:pl-4">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-maroon-800 mb-3 group-hover:text-maroon-900 transition-colors duration-300">
                        {item.judul}
                      </h2>
                      <div className="w-12 h-1 bg-maroon-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {item.isi}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="h-1 bg-gradient-to-r from-transparent via-maroon-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </article>
          ))}
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Untuk informasi lebih lanjut, silakan hubungi administrasi sekolah.
          </p>
        </div>
      </div>
    </section>
  );
}
