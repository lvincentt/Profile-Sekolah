import { useEffect, useState } from "react";
import { Users, GraduationCap, BookOpen, Calendar, Award } from "lucide-react";

const statsData = [
  { icon: <Users size={32} />, label: "Siswa Aktif", value: 1250 },
  { icon: <GraduationCap size={32} />, label: "Guru & Staf", value: 85 },
  { icon: <BookOpen size={32} />, label: "Ruang Kelas", value: 36 },
  { icon: <Calendar size={32} />, label: "Tahun Berdiri", value: 1998 },
  { icon: <Award size={32} />, label: "Akreditasi", value: "A" },
];

export default function SchoolStats() {
  const [counters, setCounters] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const interval = 20;
    const steps = duration / interval;

    const increments = statsData.map((stat) =>
      typeof stat.value === "number" ? stat.value / steps : 0
    );

    const counterInterval = setInterval(() => {
      setCounters((prev) =>
        prev.map((val, i) => {
          if (typeof statsData[i].value === "number") {
            const nextVal = val + increments[i];
            return nextVal >= statsData[i].value ? statsData[i].value : nextVal;
          } else {
            return statsData[i].value;
          }
        })
      );
    }, interval);

    setTimeout(() => clearInterval(counterInterval), duration + 200);
  }, []);

  return (
    <section className="py-20  flex items-center justify-center bg-white ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Data Statistik Sekolah
        </h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-gray-800"
            >
              <div className="text-red-600 mb-3">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-1">
                {typeof stat.value === "number"
                  ? Math.floor(counters[i])
                  : stat.value}
              </h3>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
