import foto1 from "../../assets/images/placeholder4.jpg";
import foto2 from "../../assets/images/placeholder5.jpg";
import foto3 from "../../assets/images/placeholder6.jpg";

export default function BeritaPage() {
  const beritaList = [
    {
      id: 1,
      judul:
        "SMP Dummy School Raih Juara 1 Lomba Cerdas Cermat Tingkat Kabupaten",
      tanggal: "12 September 2024",
      gambar: foto1,
      ringkasan:
        "Tim siswa SMP Dummy School berhasil meraih Juara 1 dalam ajang Lomba Cerdas Cermat Tingkat Kabupaten Subang. Prestasi ini menjadi bukti komitmen sekolah dalam membina generasi berprestasi.",
    },
    {
      id: 2,
      judul: "Perayaan Hari Kemerdekaan ke-79 Berlangsung Meriah",
      tanggal: "17 Agustus 2024",
      gambar: foto2,
      ringkasan:
        "Seluruh warga sekolah turut serta dalam lomba-lomba dan upacara bendera untuk memperingati Hari Kemerdekaan Republik Indonesia ke-79.",
    },
    {
      id: 3,
      judul: "Kegiatan Bakti Sosial di Panti Asuhan Kasih Bunda",
      tanggal: "22 Juli 2024",
      gambar: foto3,
      ringkasan:
        "Sebagai bentuk kepedulian sosial, OSIS SMP Dummy School mengadakan kegiatan bakti sosial di Panti Asuhan Kasih Bunda dengan tema 'Berbagi Kasih, Menebar Senyum'.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex flex-col items-center">
            <span className="inline-block px-4 py-2 bg-maroon-100 text-maroon-700 rounded-full text-sm font-medium mb-6">
              Update Terbaru
            </span>
            <h1 className="text-4xl font-bold text-maroon-800 mb-4">
              Berita Sekolah
            </h1>
            <div className="w-20 h-1 bg-maroon-600 rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Informasi dan kegiatan terbaru seputar SMP Dummy School.
              <span className="block text-gray-500 text-base mt-2">
                Pantau terus perkembangan dan prestasi terbaru dari keluarga
                besar sekolah kami.
              </span>
            </p>
          </div>
        </div>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beritaList.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-gray-800">
                    {item.tanggal}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-xl text-gray-900 line-clamp-2 leading-tight group-hover:text-maroon-700 transition-colors duration-300 mb-3">
                    {item.judul}
                  </h3>
                  <div className="w-10 h-0.5 bg-maroon-500 rounded-full"></div>
                </div>

                <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6">
                  {item.ringkasan}
                </p>

                {/* Read More Link */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href="#"
                    className="inline-flex items-center text-maroon-600 font-semibold hover:text-maroon-700 transition-colors duration-300 group/readmore"
                  >
                    Baca Selengkapnya
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover/readmore:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  {/* Share Icon */}
                  <button className="p-2 text-gray-400 hover:text-maroon-600 hover:bg-maroon-50 rounded-lg transition-all duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-maroon text-white font-semibold rounded-xl hover:bg-maroon-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl">
            Lihat Semua Berita
          </button>
        </div>
      </div>
    </section>
  );
}
