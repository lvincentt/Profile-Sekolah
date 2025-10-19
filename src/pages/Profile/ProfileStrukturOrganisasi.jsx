export default function ProfileStrukturOrganisasi() {
  const struktur = [
    {
      nama: "Drs. Antonius Raharjo",
      jabatan: "Kepala Sekolah",
      foto: "/staff/kepala-sekolah.jpg",
    },
    {
      nama: "Maria Lestari, S.Pd",
      jabatan: "Wakil Kepala Sekolah",
      foto: "/staff/wakil-kepala.jpg",
    },
    {
      nama: "Yohanes Budi, S.Pd",
      jabatan: "Koordinator Kurikulum",
      foto: "/staff/kurikulum.jpg",
    },
    {
      nama: "Sinta Widya, S.Pd",
      jabatan: "Koordinator Kesiswaan",
      foto: "/staff/kesiswaan.jpg",
    },
    {
      nama: "Andreas Tanu, S.Kom",
      jabatan: "Koordinator IT & Multimedia",
      foto: "/staff/it.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-700 mb-3">
            Struktur Organisasi
          </h2>
          <div className="w-24 h-1 bg-maroon-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Susunan pengelola dan tenaga pendidik yang mendukung terlaksananya
            visi dan misi sekolah.
          </p>
        </div>

        {/* Grid Struktur */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {struktur.map((orang, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-[250px] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative w-full h-56 bg-gray-100">
                <img
                  src={orang.foto}
                  alt={orang.nama}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-semibold text-maroon-700 text-lg">
                  {orang.nama}
                </h3>
                <p className="text-gray-600 text-sm">{orang.jabatan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
