import { moduleLoader } from './core/moduleLoader';
import AIGeneratorModule from './modules/AIGeneratorModule';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';

moduleLoader.register('ai-generator', AIGeneratorModule);

function App() {
  const AIGenerator = moduleLoader.getModule('ai-generator')?.component;

  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">Редактор Логики Симуляции</h1>
          <p className="text-gray-300">Настройте диапазоны переменных для генеративного ИИ</p>
        </div>
        <Dashboard />
        {AIGenerator && <AIGenerator />}
      </div>
    </Layout>
  );
}

export default App;