import { CalendarDays, MapPin, Clock } from "lucide-react";

export default function AgendaPage() {
  const agendaList = [
    {
      id: 1,
      judul: "Kegiatan Class Meeting Semester Ganjil",
      tanggal: "10–13 Desember 2024",
      lokasi: "Lapangan & Aula Sekolah",
      deskripsi:
        "Berbagai perlombaan antar kelas dalam rangka menutup semester ganjil, meliputi lomba olahraga, seni, dan cerdas cermat.",
    },
    {
      id: 2,
      judul: "Seminar Parenting untuk Orang Tua Siswa",
      tanggal: "20 Januari 2025",
      lokasi: "Aula SMP Dummy School",
      deskripsi:
        "Menghadirkan narasumber ahli pendidikan dan psikologi untuk membahas pentingnya kolaborasi sekolah dan keluarga.",
    },
    {
      id: 3,
      judul: "Pelatihan Digital Literacy untuk Siswa",
      tanggal: "5 Februari 2025",
      lokasi: "Ruang Komputer",
      deskripsi:
        "Pelatihan penggunaan internet dan media digital secara aman, kreatif, dan bertanggung jawab.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-maroon rounded-2xl mb-6 mt-4">
            <CalendarDays size={32} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-maroon-800 mb-4">
            Agenda Sekolah
          </h1>
          <div className="w-20 h-1 bg-maroon mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Jadwal kegiatan dan acara penting di lingkungan SMP Dummy School.
            <span className="block text-gray-500 text-base mt-2">
              Pantau agenda terbaru untuk tidak ketinggalan informasi penting.
            </span>
          </p>
        </div>

        {/* Timeline Agenda */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-maroon to-maroon/80 transform md:-translate-x-0.5"></div>

          <div className="space-y-8">
            {agendaList.map((item, index) => (
              <div key={item.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-maroon-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1.5 md:-translate-x-2 z-10 group-hover:scale-125 group-hover:bg-maroon-700 transition-all duration-300"></div>

                {/* Content Card */}
                <div
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:max-w-[45%]"
                      : "md:ml-auto md:max-w-[45%]"
                  } group-hover:-translate-y-1`}
                >
                  {/* Header dengan Gradient */}
                  <div className="bg-gradient-to-r from-maroon/80 to-maroon p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {item.judul}
                      </h3>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg">
                        <Clock size={16} className="text-white" />
                        <span className="text-white text-sm font-medium whitespace-nowrap">
                          {item.tanggal}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    {/* Lokasi */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-maroon-50 p-2 rounded-lg">
                        <MapPin size={20} className="text-maroon-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">
                          Lokasi
                        </p>
                        <p className="text-gray-800 font-semibold">
                          {item.lokasi}
                        </p>
                      </div>
                    </div>

                    {/* Deskripsi */}
                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {item.deskripsi}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                      <button className="text-sm text-gray-500 hover:text-maroon-600 font-medium transition-colors duration-300">
                        Detail →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
