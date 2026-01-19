import {
  Star,
  Users,
  Clock,
  Calendar,
  ArrowRight,
  Trophy,
  Heart,
} from "lucide-react";

import dance from "../../assets/images/dance.webp";
import pramuka from "../../assets/images/pramuka.webp";
import basket from "../../assets/images/basket.webp";
import paduanSuara from "../../assets/images/choirs.webp";
import jurnalistik from "../../assets/images/journalist.webp";
import robotik from "../../assets/images/robotic.webp";

export default function EkstrakurikulerPage() {
  const ekskulList = [
    {
      id: 1,
      nama: "Pramuka",
      gambar: pramuka,
      deskripsi:
        "Melatih kemandirian, kepemimpinan, dan kerja sama melalui kegiatan berkemah, baris-berbaris, dan keterampilan hidup.",
      kategori: "Karakter & Kepemimpinan",
      jadwal: "Sabtu, 08.00 - 11.00",
      peserta: "45 Siswa",
      prestasi: "Juara 2 Tingkat Kabupaten",
    },
    {
      id: 2,
      nama: "Basket",
      gambar: basket,
      deskripsi:
        "Mengembangkan kemampuan fisik, sportivitas, dan kerja tim melalui latihan rutin dan pertandingan antar sekolah.",
      kategori: "Olahraga",
      jadwal: "Selasa & Kamis, 15.00 - 17.00",
      peserta: "30 Siswa",
      prestasi: "Juara 1 Turnamen Antar SMP",
    },
    {
      id: 3,
      nama: "Paduan Suara",
      gambar: paduanSuara,
      deskripsi:
        "Mewadahi siswa yang memiliki minat dalam seni musik dan vokal, serta aktif berpartisipasi dalam berbagai lomba dan acara sekolah.",
      kategori: "Seni & Musik",
      jadwal: "Rabu, 14.00 - 16.00",
      peserta: "35 Siswa",
      prestasi: "Juara Umum Tingkat Provinsi",
    },
    {
      id: 4,
      nama: "Jurnalistik",
      gambar: jurnalistik,
      deskripsi:
        "Meningkatkan kemampuan menulis, wawancara, dan publikasi melalui majalah dinding dan media sosial sekolah.",
      kategori: "Literasi & Media",
      jadwal: "Jumat, 13.00 - 15.00",
      peserta: "25 Siswa",
      prestasi: "Majalah Terbaik Sekolah",
    },
    {
      id: 5,
      nama: "Robotik",
      gambar: robotik,
      deskripsi:
        "Mengenalkan dasar teknologi dan pemrograman melalui kegiatan merakit serta mengendalikan robot sederhana.",
      kategori: "Sains & Teknologi",
      jadwal: "Senin, 14.00 - 16.30",
      peserta: "20 Siswa",
      prestasi: "Inovasi Teknologi Terbaik",
    },
    {
      id: 6,
      nama: "Dance",
      gambar: dance,
      deskripsi:
        "Menampilkan berbagai tarian modern dalam kegiatan sekolah dan lomba seni sebagai bentuk ekspresi dan pelestarian seni pertunjukan masa kini.",
      kategori: "Seni & Budaya",
      jadwal: "Kamis, 15.00 - 17.00",
      peserta: "28 Siswa",
      prestasi: "Penampilan Terbaik Festival Budaya",
    },
  ];

  const getKategoriColor = (kategori) => {
    const colors = {
      "Karakter & Kepemimpinan": "from-orange-500 to-amber-600",
      Olahraga: "from-green-500 to-emerald-600",
      "Seni & Musik": "from-purple-500 to-violet-600",
      "Literasi & Media": "from-blue-500 to-cyan-600",
      "Sains & Teknologi": "from-indigo-500 to-blue-600",
      "Seni & Budaya": "from-pink-500 to-rose-600",
    };
    return colors[kategori] || "from-maroon-500 to-maroon-600";
  };

  const getKategoriIcon = (kategori) => {
    const icons = {
      "Karakter & Kepemimpinan": <Star size={16} />,
      Olahraga: <Heart size={16} />,
      "Seni & Musik": <Users size={16} />,
      "Literasi & Media": <Calendar size={16} />,
      "Sains & Teknologi": <Trophy size={16} />,
      "Seni & Budaya": <Star size={16} />,
    };
    return icons[kategori] || <Star size={16} />;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-maroon/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-maroon/50 to-maroon rounded-3xl mb-6 shadow-lg">
            <Trophy size={36} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-maroon mb-4">
            Ekstrakurikuler
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-maroon/50 to-maroon mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Berbagai kegiatan pengembangan diri yang membantu siswa menyalurkan
            minat dan bakat di luar pelajaran akademik.
            <span className="block text-gray-500 text-base mt-2">
              Temukan passion dan kembangkan potensi terbaikmu bersama komunitas
              yang positif.
            </span>
          </p>
        </div>

        {/* Grid Ekskul */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ekskulList.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Kategori Badge */}
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${getKategoriColor(
                    item.kategori,
                  )} text-white px-4 py-2 rounded-xl shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    {getKategoriIcon(item.kategori)}
                    <span className="text-sm font-semibold">
                      {item.kategori}
                    </span>
                  </div>
                </div>

                {/* Ekskul Label */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    <span className="text-sm font-semibold text-gray-800">
                      Ekskul
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Nama Ekskul */}
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-maroon-700 transition-colors duration-300">
                  {item.nama}
                </h3>

                {/* Metadata */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-maroon-50 p-2 rounded-lg">
                      <Clock size={16} className="text-maroon-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        Jadwal
                      </p>
                      <p className="text-sm font-medium text-gray-800">
                        {item.jadwal}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-maroon-50 p-2 rounded-lg">
                      <Users size={16} className="text-maroon-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        Peserta
                      </p>
                      <p className="text-sm font-medium text-gray-800">
                        {item.peserta}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Deskripsi */}
                <div className="mb-4">
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-2">
                    {item.deskripsi}
                  </p>
                </div>

                {/* Prestasi */}
                {item.prestasi && (
                  <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Trophy size={14} className="text-amber-600" />
                      <span className="text-xs font-semibold text-amber-800">
                        {item.prestasi}
                      </span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                  <button className="text-xs text-gray-500 hover:text-maroon font-medium transition-colors duration-300">
                    Info Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-maroon rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Temukan Bakat Terpendammu!
            </h3>
            <p className="text-maroon-100 text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
              Bergabunglah dengan ekstrakurikuler favorit dan kembangkan
              potensimu bersama mentor yang berpengalaman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
