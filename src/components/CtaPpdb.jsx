export default function CtaPpdb() {
  return (
    <section className="py-20 flex items-center justify-center bg-white text-gray-800 relative overflow-hidden ">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a00000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src="/logo.png"
              alt="Logo Sekolah"
              className="w-20 h-20 object-contain bg-white rounded-2xl p-3 shadow-md border-2 border-maroon-600/20"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-2 text-maroon-700">
              Penerimaan Peserta Didik Baru
              <span className="block text-maroon-500 text-lg md:text-xl font-semibold mt-1">
                Tahun Ajaran 2024/2025
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
              Bergabunglah dengan komunitas pembelajaran yang inspiratif.
              Wujudkan potensi terbaik Anda di lingkungan yang mendukung
              perkembangan akademik dan karakter.
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 text-center md:text-right">
          <a
            href="#ppdb"
            className="group text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 border-2 border-transparent hover:border-maroon-600 bg-maroon"
          >
            Daftar Sekarang
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
          <p className="text-gray-500 text-sm mt-3">
            Pendaftaran dibuka hingga 30 Juni 2024
          </p>
        </div>
      </div>
    </section>
  );
}
