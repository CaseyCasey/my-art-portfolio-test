import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Instagram, Mail, ChevronLeft, ChevronRight, ChevronsDown, Palette, Code, Star, Heart, Award } from 'lucide-react';

// 主要應用程式元件
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // 平滑滾動處理函式
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // 選項選擇後關閉菜單
    }
  };

  // 作品集專案數據
  const projects = [
    {
      id: 1,
      title: "動態抽象形式",
      category: "數位繪畫",
      thumbnail: "https://placehold.co/400x300/e0e0e0/333333?text=數位藝術+1", // 較淺的縮圖
      fullImage: "https://placehold.co/800x600/f0f0f0/333333?text=抽象形式+全圖", // 較淺的完整圖片
      description: "一幅動態的構圖，探索數位創作中鮮豔色彩和流暢形狀的相互作用。這件作品旨在透過非具象的形式喚起運動和和諧感。柔和的漸變和銳利的線條提供了對比和深度。",
      tools: ["Procreate", "Adobe Photoshop"],
      year: "2023",
      inspiration: "受水流運動和抽象表現主義的啟發。",
    },
    {
      id: 2,
      title: "城市景觀：不夜城",
      category: "插畫",
      thumbnail: "https://placehold.co/400x300/d0d0d0/333333?text=插畫+2", // 較淺的縮圖
      fullImage: "https://placehold.co/800x600/e0e0e0/333333?text=不夜城+全圖", // 較淺的完整圖片
      description: "一幅繁忙夜間城市景觀的詳細插畫，著重於光影的相互作用以及現代建築的紋理。雨水濕潤的街道反映出霓虹燈招牌，增添了城市氛圍。",
      tools: ["Adobe Illustrator", "Clip Studio Paint"],
      year: "2022",
      inspiration: "捕捉城市環境的活力與孤寂。",
    },
    {
      id: 3,
      title: "寧靜的肖像",
      category: "油畫",
      thumbnail: "https://placehold.co/400x300/c0c0c0/333333?text=油畫+3", // 較淺的縮圖
      fullImage: "https://placehold.co/800x600/d0d0d0/333333?text=寧靜肖像+全圖", // 較淺的完整圖片
      description: "一幅傳統油畫肖像，捕捉了片刻的沉思。筆觸強調了紋理和光線在主體臉上細微的變化，傳達出平靜和深度的感覺。",
      tools: ["油畫顏料", "畫布"],
      year: "2024",
      inspiration: "透過古典肖像畫探索情感深度。",
    },
    {
      id: 4,
      title: "植物與動物素描本",
      category: "傳統素描",
      thumbnail: "https://placehold.co/400x300/b0b0b0/333333?text=素描本+4", // 較淺的縮圖
      fullImage: "https://placehold.co/800x600/c0c0c0/333333?text=植物與動物+全圖", // 較淺的完整圖片
      description: "一系列快速素描，著重於自然元素——多樣的植物生命和動物。這些研究強調以富有表現力的線條捕捉形式和運動，提供對觀察過程的洞察。",
      tools: ["石墨鉛筆", "素描本"],
      year: "2023",
      inspiration: "直接觀察自然。",
    },
    {
      id: 5,
      title: "科幻概念藝術：殖民地",
      category: "概念藝術",
      thumbnail: "https://placehold.co/400x300/a0a0a0/333333?text=概念藝術+5", // 較淺的縮圖
      fullImage: "https://placehold.co/800x600/b0b0b0/333333?text=科幻殖民地+全圖", // 較淺的完整圖片
      description: "未來月球殖民地的概念藝術作品，描繪了建築設計、環境元素和照明。這件作品探索了人類在極端外星環境中居住的挑戰和美感。",
      tools: ["Blender", "Adobe Photoshop"],
      year: "2024",
      inspiration: "對未來太空探索和人類智慧的憧憬。",
    },
    {
      id: 6,
      title: "抽象波浪雕塑",
      category: "3D設計",
      thumbnail: "https://placehold.co/400x300/909090/333333?text=3D設計+6", // 較淺的縮圖
      fullImage: "https://placehold.co/800x600/a0a0a0/333333?text=波浪雕塑+全圖", // 較淺的完整圖片
      description: "受海洋波浪流體動力學啟發的數位3D雕塑。這件藝術作品著重於形式和紋理，嘗試光線的反射和折射來模擬水的自然特性。",
      tools: ["ZBrush", "Substance Painter"],
      year: "2023",
      inspiration: "自然現象的力量與優雅。",
    },
  ];

  // 模態框中專案導航的邏輯
  const navigateProject = (direction) => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) {
      nextIndex = projects.length - 1; // 循環到最後一個專案
    } else if (nextIndex >= projects.length) {
      nextIndex = 0; // 循環到第一個專案
    }
    setSelectedProject(projects[nextIndex]);
  };

  useEffect(() => {
    // 當模態框打開時禁用滾動
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-inter antialiased">
      {/* 導航欄 */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-lg rounded-b-xl"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-wide"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            ARTFOLIO
          </motion.a>
          <div className="hidden md:flex space-x-8">
            {/* 從導航連結中移除 'contact' */}
            {['hero', 'about', 'portfolio'].map((id) => (
              <motion.button
                key={id} // 修正了語法錯誤
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 text-lg font-medium relative group"
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </motion.button>
            ))}
          </div>
          <button
            className="md:hidden text-gray-800 focus:outline-none p-2 rounded-lg bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 行動版菜單 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-100 py-4 px-4 space-y-4"
            >
              {/* 從行動導航連結中移除 'contact' */}
              {['hero', 'about', 'portfolio'].map((id) => (
                <motion.button
                  key={id} // 修正了語法錯誤
                  className="block w-full text-left text-gray-700 hover:text-gray-900 py-2 px-3 rounded-lg text-xl font-medium transition-colors duration-300 bg-gray-200 hover:bg-gray-300"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="pt-20"> {/* 由於固定導航欄而增加的內邊距 */}
        {/* 英雄區塊 */}
        <section
          id="hero"
          className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://placehold.co/1920x1080/e0e0e0/333333?text=Light+Art+Background')" }} // 較淺的背景
        >
          <div className="absolute inset-0 bg-white opacity-60"></div> {/* 較淺的覆蓋層 */}
          <div className="relative z-10 p-8 max-w-4xl mx-auto rounded-lg backdrop-blur-sm bg-white bg-opacity-70 shadow-2xl"> {/* 較淺的方框 */}
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-4 drop-shadow-lg" // 較深的文字
            >
              您好，我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Alex J. Kim</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto" // 較深的文字
            >
              透過生動的視覺效果和引人入勝的故事，將想像力化為現實。
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
              onClick={() => scrollToSection('portfolio')}
            >
              查看我的作品集 <ChevronsDown className="ml-2" size={20} />
            </motion.button>
          </div>
        </section>

        {/* 關於我區塊 */}
        <section id="about" className="py-20 bg-white"> {/* 較淺的背景 */}
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-12 text-gray-900" // 較深的文字
            >
              關於我
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/3 mb-8 md:mb-0"
              >
                <img
                  src="https://placehold.co/400x400/cccccc/333333?text=您的個人資料" // 較淺的個人資料圖片
                  alt="Profile"
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-4 border-purple-500 shadow-xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="md:w-2/3 text-lg leading-relaxed text-gray-700" // 較深的文字
              >
                <p className="mb-4">
                  您好！我是 Alex J. Kim，一位熱情的藝術家，熱愛透過各種媒介創作迷人的視覺效果。我的藝術之旅始於對圖像敘事的迷戀，這引導我探索數位繪畫、傳統插畫和概念設計。
                </p>
                <p className="mb-4">
                  我擅長將想像世界帶入現實，創造獨特的角色，並設計沉浸式的環境。我的目標不僅是創造美觀的藝術，還要喚起觀看者的情感並激發驚嘆。
                </p>
                <p>
                  憑藉敏銳的洞察力和不斷學習的精神，我不斷突破自己的藝術能力界限。我相信藝術有能力連結、超越和轉化。
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg shadow-inner border border-gray-200" // 較淺的背景，較淺的邊框
                    whileHover={{ scale: 1.03 }}
                  >
                    <Palette className="text-purple-600" size={28} /> {/* 對比度較深的紫色 */}
                    <span className="font-semibold text-gray-800">數位繪畫</span> {/* 較深的文字 */}
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg shadow-inner border border-gray-200" // 較淺的背景，較淺的邊框
                    whileHover={{ scale: 1.03 }}
                  >
                    <Code className="text-blue-600" size={28} /> {/* 對比度較深的藍色 */}
                    <span className="font-semibold text-gray-800">概念藝術</span> {/* 較深的文字 */}
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg shadow-inner border border-gray-200" // 較淺的背景，較淺的邊框
                    whileHover={{ scale: 1.03 }}
                  >
                    <Star className="text-yellow-600" size={28} /> {/* 對比度較深的黃色 */}
                    <span className="font-semibold text-gray-800">傳統媒介</span> {/* 較深的文字 */}
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-3 bg-gray-100 p-4 rounded-lg shadow-inner border border-gray-200" // 較淺的背景，較淺的邊框
                    whileHover={{ scale: 1.03 }}
                  >
                    <Heart className="text-pink-600" size={28} /> {/* 對比度較深的粉紅色 */}
                    <span className="font-semibold text-gray-800">角色設計</span> {/* 較深的文字 */}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 作品集區塊 */}
        <section id="portfolio" className="py-20 bg-gray-100"> {/* 較淺的背景 */}
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-12 text-gray-900" // 較深的文字
            >
              我的作品集
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200" // 較淺的背景，較淺的邊框
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* 懸停時覆蓋層保持深色以形成對比 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
                      <p className="text-md text-gray-300">{project.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 專案模態框 */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto"
              onClick={() => setSelectedProject(null)} // 點擊外部關閉
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-lg p-6 md:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl border border-gray-200" // 較淺的背景，較淺的邊框
                onClick={(e) => e.stopPropagation()} // 防止點擊內部關閉
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2 rounded-full bg-gray-100 hover:bg-gray-200" // 較深的文字，較淺的背景
                >
                  <X size={28} />
                </button>

                <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">{selectedProject.title}</h3> {/* 較深的文字 */}
                <img
                  src={selectedProject.fullImage}
                  alt={selectedProject.title}
                  className="w-full h-auto object-contain rounded-lg mb-6 border border-gray-300" // 較淺的邊框
                />
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">{selectedProject.description}</p> {/* 較深的文字 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tools.map((tool, idx) => (
                    <span key={idx} className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-md"> {/* 較深的文字 */}
                  <span className="font-semibold text-gray-800">類別:</span> {selectedProject.category} {/* 較深的文字 */}
                </p>
                <p className="text-gray-600 text-md"> {/* 較深的文字 */}
                  <span className="font-semibold text-gray-800">年份:</span> {selectedProject.year} {/* 較深的文字 */}
                </p>
                {selectedProject.inspiration && (
                  <p className="text-gray-600 text-md"> {/* 較深的文字 */}
                    <span className="font-semibold text-gray-800">靈感:</span> {selectedProject.inspiration} {/* 較深的文字 */}
                  </p>
                )}

                {/* 專案導航箭頭 */}
                <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-2 md:px-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); navigateProject(-1); }}
                    className="p-3 rounded-full bg-gray-100 text-gray-800 shadow-lg hover:bg-gray-200 transition-colors duration-200" // 較淺的背景，較深的文字
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); navigateProject(1); }}
                    className="p-3 rounded-full bg-gray-100 text-gray-800 shadow-lg hover:bg-gray-200 transition-colors duration-200" // 較淺的背景，較深的文字
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* 聯絡區塊已被移除 */}
      </main>

      {/* 頁腳 */}
      <footer className="bg-gray-100 py-10 text-gray-600 text-center rounded-t-xl shadow-inner"> {/* 較淺的背景，較深的文字 */}
        <div className="container mx-auto px-4">
          <p className="mb-4 text-lg">
            聯繫我：
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a
              href="https://github.com/yourusername" // 替換為您的 GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300" // 較深的文字
              whileHover={{ scale: 1.2, y: -3 }}
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername" // 替換為您的 LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300" // 較深的文字
              whileHover={{ scale: 1.2, y: -3 }}
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              href="https://instagram.com/yourusername" // 替換為您的 Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300" // 較深的文字
              whileHover={{ scale: 1.2, y: -3 }}
            >
              <Instagram size={32} />
            </motion.a>
          </div>
          <p className="text-md">&copy; {new Date().getFullYear()} Alex J. Kim. 版權所有。</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
