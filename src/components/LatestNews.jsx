import foto1 from "../assets/images/placeholder4.webp";
import foto2 from "../assets/images/placeholder5.webp";
import foto3 from "../assets/images/placeholder6.webp";

const newsData = [
  {
    id: 1,
    title: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    date: "5 Oktober 2025",
    image: foto1,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum vel quis libero, accusantium necessitatibus placeat rem nihil magnam magni vero voluptatem itaque?",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae.",
    date: "28 September 2025",
    image: foto2,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium dolore laboriosam voluptas sed! Rerum molestiae distinctio voluptatem neque, voluptas eius.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "15 September 2025",
    image: foto3,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed quod tempore aliquam similique ex officia labore alias.",
  },
];

export default function LatestNews() {
  return (
    <section className="  py-20 flex items-center justify-center bg-gray-50 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Berita & Kegiatan Terbaru
        </h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-12"></div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-red-600 transition">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {news.content.substring(0, 120)}...
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-red-600 font-medium hover:underline"
                >
                  Lihat Selengkapnya →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
