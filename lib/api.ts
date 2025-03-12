import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const api = axios.create({
  baseURL: API_URL,
});

export const fetchVideos = async () => {
  try {
    const res = await api.get("/app/videos");
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error);
    return [];
  }
};
