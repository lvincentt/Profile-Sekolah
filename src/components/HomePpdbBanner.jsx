export default function HomePpdbBanner() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-maroon via-maroon/90 to-red-800 min-h-screen overflow-hidden">
      {/* Background Pattern Lembut */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

      {/* Konten Utama */}
      <div className="relative z-10 px-6 max-w-3xl">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo Sekolah"
          className="w-24 h-24 mx-auto mb-8 bg-white p-3 rounded-full shadow-lg border-2 border-white/50 hover:scale-105 transition-transform duration-300"
        />

        {/* Judul */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
          Penerimaan Peserta Didik Baru
        </h1>

        {/* Subjudul */}
        <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
          Tahun Ajaran{" "}
          <span className="font-semibold text-white">2025 / 2026</span> telah
          dibuka! Bergabunglah bersama kami di lingkungan belajar yang
          inspiratif, penuh semangat, dan berprestasi.
        </p>

        {/* Tombol CTA */}
        <a
          href="https://forms.gle/abcdefg12345"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-maroon font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Daftar Sekarang →
        </a>

        {/* Info Batas Waktu */}
        <p className="text-sm text-white/70 mt-8 tracking-wide">
          Pendaftaran dibuka hingga{" "}
          <span className="font-semibold text-white">30 Juni 2025</span>
        </p>
      </div>

      {/* Elemen Dekoratif Halus */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
