import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { FaVideo, FaChartBar, FaCog, FaUpload, FaUsers } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-white shadow-xl rounded-2xl p-6 transition-transform transform hover:scale-[1.02]">
            <h1 className="text-2xl font-extrabold text-gray-900">Bem-vindo ao StoryBoost 🚀</h1>
            <p className="text-gray-600 mt-2 text-sm">Gerencie seus vídeos interativos para Shopify.</p>
          </div>
          
          {/* Dashboard Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[ 
              { icon: <FaVideo className='text-blue-600 text-3xl' />, title: "Total de Vídeos", value: "32 vídeos carregados" },
              { icon: <FaChartBar className='text-green-600 text-3xl' />, title: "Engajamento", value: "5.2K visualizações" },
              { icon: <FaUsers className='text-purple-600 text-3xl' />, title: "Usuários Ativos", value: "1.2K lojistas" },
              { icon: <FaUpload className='text-orange-500 text-3xl' />, title: "Uploads Recentes", value: "3 novos vídeos hoje" },
              { icon: <AiOutlinePlayCircle className='text-red-500 text-3xl' />, title: "Média de Reproduções", value: "750 plays por dia" },
              { icon: <FaCog className='text-gray-600 text-3xl' />, title: "Configurações", value: "Personalize sua experiência" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 shadow-lg rounded-xl flex items-center space-x-4 hover:shadow-2xl transition-shadow">
                {item.icon}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-gray-600 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Recent Videos Section */}
          <div className="mt-8 bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900">Últimos Vídeos Carregados</h2>
            <ul className="mt-4 space-y-4">
              {[ 
                { title: "🎥 Video Promo - Nova Coleção", time: "Há 2 horas" },
                { title: "🎥 Tutorial de Uso", time: "Ontem" },
                { title: "🎥 Apresentação de Produto", time: "Há 3 dias" }
              ].map((video, index) => (
                <li key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl shadow hover:bg-gray-100 transition">
                  <span className="text-sm font-medium text-gray-800">{video.title}</span>
                  <span className="text-gray-500 text-xs">{video.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-white text-center py-4 shadow-md mt-4">
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} StoryBoost. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}
