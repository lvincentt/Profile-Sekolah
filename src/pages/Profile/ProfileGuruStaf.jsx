export default function ProfileGuruStaf() {
  const guruStaf = [
    {
      nama: "Agustinus Prasetyo, S.Pd",
      jabatan: "Guru Matematika",
      foto: "/staff/guru-matematika.jpg",
    },
    {
      nama: "Maria Fransiska, S.Pd",
      jabatan: "Guru Bahasa Inggris",
      foto: "/staff/guru-english.jpg",
    },
    {
      nama: "Yohanes Setiawan, S.Pd",
      jabatan: "Guru IPA",
      foto: "/staff/guru-ipa.jpg",
    },
    {
      nama: "Clara Widya, S.Pd",
      jabatan: "Guru IPS",
      foto: "/staff/guru-ips.jpg",
    },
    {
      nama: "Antoni Lumban, S.Pd",
      jabatan: "Guru Pendidikan Agama",
      foto: "/staff/guru-agama.jpg",
    },
    {
      nama: "Theresia Ayu, S.Pd",
      jabatan: "Guru Seni Budaya",
      foto: "/staff/guru-seni.jpg",
    },
    {
      nama: "Andreas Wibowo",
      jabatan: "Staf Tata Usaha",
      foto: "/staff/staf-tu.jpg",
    },
    {
      nama: "Monica Natalia",
      jabatan: "Staf Administrasi",
      foto: "/staff/staf-admin.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-700 mb-3">
            Guru & Staf
          </h2>
          <div className="w-24 h-1 bg-maroon-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tenaga pendidik dan staf profesional yang berdedikasi untuk
            menciptakan lingkungan belajar yang inspiratif dan penuh semangat.
          </p>
        </div>

        {/* Grid Guru & Staf */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {guruStaf.map((orang, idx) => (
            <div
              key={idx}
              className="bg-gray-50 shadow-md rounded-xl overflow-hidden w-full max-w-[250px] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
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
