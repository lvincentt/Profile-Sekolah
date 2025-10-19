export default function PpdbPage() {
  return (
    <section className="py-24 bg-gray-50 text-gray-800 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Judul */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Penerimaan Peserta Didik Baru (PPDB)
        </h1>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>

        {/* Deskripsi */}
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Ayo bergabung bersama kami di{" "}
          <span className="font-semibold text-gray-900">SMP Dummy School</span>{" "}
          — lingkungan belajar yang menyenangkan, penuh semangat, dan mendukung
          pengembangan karakter serta prestasi akademik siswa.
          <br />
          <br />
          Pendaftaran dilakukan secara online melalui tautan resmi di bawah ini.
          Klik tombol berikut untuk melanjutkan ke halaman pendaftaran PPDB
          Tahun Ajaran <span className="font-semibold">2024 / 2025</span>.
        </p>

        {/* Tombol ke link eksternal */}
        <a
          href="https://forms.gle/abcdefg12345" // ganti dengan link eksternal PPDB aslinya
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-maroon text-white text-lg font-semibold px-10 py-4 rounded-xl shadow-md hover:bg-maroon/90 hover:scale-105 transform transition duration-300"
        >
          Daftar Sekarang →
        </a>

        {/* Info tambahan */}
        <p className="text-gray-500 text-sm mt-6">
          Jika Anda mengalami kesulitan saat pendaftaran, silakan hubungi pihak
          sekolah melalui halaman{" "}
          <a
            href="/kontak"
            className="text-red-600 font-medium hover:underline"
          >
            Kontak
          </a>
          .
        </p>
      </div>
    </section>
  );
}
