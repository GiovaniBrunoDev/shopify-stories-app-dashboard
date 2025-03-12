"use client";

import { useEffect, useState } from "react";
import { fetchVideos } from "lib/api";
import { RefreshCw } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
};

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getVideos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchVideos();
      if (Array.isArray(data)) {
        setVideos(data);
      } else {
        console.error("Resposta inesperada da API", data);
        setError("Resposta inesperada da API");
      }
    } catch (error) {
      console.error("Erro ao buscar vídeos:", error);
      setError("Erro ao buscar vídeos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-700">Meus Vídeos</h1>
            <button
              onClick={getVideos}
              className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-800 transition duration-150"
            >
              <RefreshCw size={20} className="mr-2" />
              Recarregar
            </button>
          </div>
          {loading && <p className="text-gray-600 mt-2">Carregando vídeos...</p>}
          {error && <p className="text-red-600 mt-2">{error}</p>}
          {!loading && !error && videos.length === 0 && (
            <p className="text-gray-600 mt-2">Nenhum vídeo encontrado.</p>
          )}
          {!loading && !error && videos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <h2 className="text-xl font-semibold mt-2">{video.title}</h2>
                  <p className="text-gray-600 mt-1">{video.description}</p>
                </div>
              ))}
            </div>
          )}
        </main>
        <footer className="bg-white shadow-md p-4 text-center text-gray-500">
          &copy; 2025 StoryBoost. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}
