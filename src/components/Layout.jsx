import PhysicsBuddy from './PhysicsBuddy';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-physhub-bg text-white font-space">
      {/* Навигация */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-physhub-accent">PhysHub</h1>
          <ul className="flex gap-6">
            <li><a href="/" className="hover:text-physhub-accent transition">Home</a></li>
            <li><a href="/physics" className="hover:text-physhub-accent transition">Физика</a></li>
            <li><a href="/math" className="hover:text-physhub-accent transition">Математика</a></li>
            <li><a href="/quiz" className="hover:text-physhub-accent transition">Квизы</a></li>
          </ul>
        </div>
      </nav>

      {/* Основной контент */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {children}
      </main>

      {/* Футер */}
      <footer className="border-t border-gray-800 px-6 py-6 text-center text-gray-400 text-sm">
        <p>PhysHub — интерактивная образовательная платформа</p>
      </footer>

      {/* Physics Buddy (плавающая кнопка-помощник) */}
      <PhysicsBuddy onRequestHint={() => "Попробуй пересчитать силу трения: μ·m·g"} />
    </div>
  );
}

export default Layout;