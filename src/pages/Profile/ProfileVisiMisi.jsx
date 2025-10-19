import { Target, CheckCircle2 } from "lucide-react";

export default function ProfileVisiMisi() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-700 mb-3">
            Visi & Misi
          </h2>
          <div className="w-24 h-1 bg-maroon-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            doloremque sapiente eum reiciendis distinctio eveniet.
          </p>
        </div>

        {/* Isi */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Visi */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-maroon-100 p-3 rounded-lg">
                <Target size={28} className="text-maroon-700" />
              </div>
              <h3 className="text-2xl font-semibold text-maroon-700">
                Visi Sekolah
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed border-l-4 border-maroon-600 pl-5">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              tempora animi, nisi nemo a molestias esse quaerat nesciunt dicta
              ipsum ducimus dolorem ex quasi veritatis deserunt fugit vel?”
            </p>
          </div>

          {/* Misi */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-maroon-100 p-3 rounded-lg">
                <CheckCircle2 size={28} className="text-maroon-700" />
              </div>
              <h3 className="text-2xl font-semibold text-maroon-700">
                Misi Sekolah
              </h3>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-maroon-600 font-semibold">1.</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  optio velit ratione.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-maroon-600 font-semibold">2.</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, quod?
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-maroon-600 font-semibold">3.</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  iusto.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-maroon-600 font-semibold">4.</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  dignissimos ipsa earum.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-maroon-600 font-semibold">5.</span>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
