import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ProfileSejarah from "./pages/Profile/ProfileSejarah";
import ProfileVisiMisi from "./pages/Profile/ProfileVisiMisi";
import ProfileStrukturOrganisasi from "./pages/Profile/ProfileStrukturOrganisasi";
import ProfileGuruStaf from "./pages/Profile/ProfileGuruStaf";
import ProfileFasilitas from "./pages/Profile/ProfileFasilitas";
import BeritaPage from "./pages/News/BeritaPage";
import PengumumanPage from "./pages/News/PengumumanPage";
import AgendaPage from "./pages/News/AgendaPage";
import KegiatanSekolahPage from "./pages/Activities/KegiatanSekolahPage";
import PrestasiPage from "./pages/Activities/PrestasiPage";
import EkstrakurikulerPage from "./pages/Activities/EkstrakurikulerPage";
import GaleriFotoPage from "./pages/Gallery/GaleriFotoPage";
import GalleryVideo from "./pages/Gallery/GaleriVideo";
import PpdbPage from "./pages/PPDB";
import KontakPage from "./pages/Kontak";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "sejarah", element: <ProfileSejarah /> },
        { path: "visi-misi", element: <ProfileVisiMisi /> },
        { path: "struktur-organisasi", element: <ProfileStrukturOrganisasi /> },
        { path: "guru-staf", element: <ProfileGuruStaf /> },
        { path: "fasilitas", element: <ProfileFasilitas /> },
        { path: "berita", element: <BeritaPage /> },
        { path: "pengumuman", element: <PengumumanPage /> },
        { path: "agenda", element: <AgendaPage /> },
        { path: "kegiatan-sekolah", element: <KegiatanSekolahPage /> },
        { path: "prestasi", element: <PrestasiPage /> },
        { path: "ekstrakurikuler", element: <EkstrakurikulerPage /> },
        { path: "galeri-foto", element: <GaleriFotoPage /> },
        { path: "galeri-video", element: <GalleryVideo /> },
        { path: "ppdb", element: <PpdbPage /> },
        { path: "kontak", element: <KontakPage /> },
      ],
    },
  ],
  {
    basename: "/Profile-Sekolah",
  }
);

export default router;
