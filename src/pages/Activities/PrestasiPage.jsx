import { Trophy, Calendar, Award, Star, ArrowRight } from "lucide-react";
import foto1 from "../../assets/images/placeholder4.jpg";
import foto2 from "../../assets/images/placeholder5.jpg";
import foto3 from "../../assets/images/placeholder6.jpg";

export default function PrestasiPage() {
  const prestasiList = [
    {
      id: 1,
      judul: "Juara 1 Lomba Cerdas Cermat Tingkat Kabupaten",
      tanggal: "12 September 2024",
      bidang: "Akademik",
      gambar: foto1,
      deskripsi:
        "Tim siswa SMP Dummy School berhasil meraih Juara 1 dalam Lomba Cerdas Cermat Tingkat Kabupaten Subang.",
      tingkat: "Kabupaten",
      penghargaan: "Juara 1",
    },
    {
      id: 2,
      judul: "Juara Umum Lomba Paduan Suara Tingkat Provinsi",
      tanggal: "3 Agustus 2024",
      bidang: "Seni & Musik",
      gambar: foto2,
      deskripsi:
        "Tim paduan suara sekolah berhasil meraih juara umum dalam kompetisi paduan suara tingkat provinsi Jawa Barat.",
      tingkat: "Provinsi",
      penghargaan: "Juara Umum",
    },
    {
      id: 3,
      judul: "Medali Emas Olimpiade Sains Nasional",
      tanggal: "20 Mei 2024",
      bidang: "IPA",
      gambar: foto3,
      deskripsi:
        "Salah satu siswa SMP Dummy School meraih medali emas dalam Olimpiade Sains Nasional bidang IPA.",
      tingkat: "Nasional",
      penghargaan: "Medali Emas",
    },
  ];

  const getBidangColor = (bidang) => {
    const colors = {
      Akademik: "from-blue-500 to-blue-600",
      "Seni & Musik": "from-purple-500 to-purple-600",
      IPA: "from-emerald-500 to-emerald-600",
      Olahraga: "from-orange-500 to-orange-600",
      Teknologi: "from-cyan-500 to-cyan-600",
    };
    return colors[bidang] || "from-maroon-500 to-maroon-600";
  };

  const getTingkatColor = (tingkat) => {
    const colors = {
      Sekolah: "bg-gray-100 text-gray-700",
      Kecamatan: "bg-green-100 text-green-700",
      Kabupaten: "bg-blue-100 text-blue-700",
      Provinsi: "bg-purple-100 text-purple-700",
      Nasional: "bg-orange-100 text-orange-700",
      Internasional: "bg-red-100 text-red-700",
    };
    return colors[tingkat] || "bg-maroon-100 text-maroon-700";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-maroon/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-maroon/50 to-maroon rounded-3xl mb-6 shadow-lg">
            <Trophy size={36} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-maroon-800 mb-4">
            Prestasi Siswa & Sekolah
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-maroon-500 to-maroon-700 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Capaian membanggakan yang diraih siswa dan sekolah sebagai bukti
            komitmen terhadap keunggulan dalam pendidikan dan karakter.
            <span className="block text-gray-500 text-base mt-2">
              Setiap prestasi adalah bukti dedikasi dan kerja keras keluarga
              besar SMP Dummy School.
            </span>
          </p>
        </div>

        {/* Grid Prestasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prestasiList.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Bidang Badge */}
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${getBidangColor(
                    item.bidang
                  )} text-white px-3 py-2 rounded-xl shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-white" />
                    <span className="text-sm font-semibold">{item.bidang}</span>
                  </div>
                </div>

                {/* Tingkat Badge */}
                <div
                  className={`absolute top-4 right-4 ${getTingkatColor(
                    item.tingkat
                  )} px-3 py-2 rounded-xl text-sm font-semibold shadow-lg`}
                >
                  {item.tingkat}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header dengan Icon Trophy */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-maroon-50 p-2 rounded-lg">
                    <Trophy size={20} className="text-maroon-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-500 font-medium">
                        {item.tanggal}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-maroon-700 mt-1">
                      {item.penghargaan}
                    </div>
                  </div>
                </div>

                {/* Judul */}
                <h3 className="font-bold text-xl text-gray-900 line-clamp-2 leading-tight mb-4 group-hover:text-maroon-800 transition-colors duration-300">
                  {item.judul}
                </h3>

                {/* Deskripsi */}
                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                    {item.deskripsi}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="inline-flex items-center text-maroon-600 font-semibold text-sm hover:text-maroon-700 transition-colors duration-300 group/readmore">
                    Lihat Detail Prestasi
                    <ArrowRight
                      size={16}
                      className="ml-2 transform group-hover/readmore:translate-x-1 transition-transform duration-300"
                    />
                  </button>

                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={16} className="fill-current" />
                    <Star size={16} className="fill-current" />
                    <Star size={16} className="fill-current" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Achievement Stats & CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-maroon/80 to-maroon rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Terus Berkarya, Terus Berprestasi!
            </h3>
            <p className="text-maroon-100 text-lg mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan keluarga besar SMP Dummy School dan raih
              prestasi terbaikmu bersama kami.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-maroon-200 text-sm">
                  Prestasi Tahun Ini
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15</div>
                <div className="text-maroon-200 text-sm">Bidang Keahlian</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-maroon-200 text-sm">Siswa Berprestasi</div>
              </div>
            </div>
            <button className="inline-flex items-center px-8 py-4 bg-white text-maroon font-bold rounded-2xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Trophy size={20} className="mr-3" />
              Lihat Semua Prestasi
              <ArrowRight size={20} className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
