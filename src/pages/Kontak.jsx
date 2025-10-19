import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function KontakPage() {
  return (
    <section className="py-24 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* === Header Section === */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Hubungi Kami
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kami senang mendengar dari Anda! Silakan hubungi kami melalui
            informasi berikut atau isi formulir kontak untuk pertanyaan lebih
            lanjut.
          </p>
        </div>

        {/* === Grid Content === */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* --- Kolom Kiri: Info Kontak --- */}
          <div className="space-y-6">
            {/* Alamat */}
            <div className="flex items-start gap-4">
              <MapPin className="text-red-600 flex-shrink-0" size={28} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Alamat Sekolah
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Jl. Pendidikan No. 123, Pamanukan, Subang, Jawa Barat
                </p>
              </div>
            </div>

            {/* Telepon */}
            <div className="flex items-start gap-4">
              <Phone className="text-red-600 flex-shrink-0" size={28} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Nomor Telepon
                </h3>
                <p className="text-gray-600 leading-relaxed">(0260) 1234-567</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-red-600 flex-shrink-0" size={28} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600 leading-relaxed">
                  info@ourschool.sch.id
                </p>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="flex items-start gap-4">
              <Clock className="text-red-600 flex-shrink-0" size={28} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Jam Operasional
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Senin - Jumat: 07.00 - 15.00 WIB <br />
                  Sabtu & Minggu: Tutup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
