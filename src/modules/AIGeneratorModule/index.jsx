import { useState } from 'react';
import { generateTask, checkAnswer, topics } from '../../api/core/AICore';
import VectorField3D from '../../components/VectorField3D';

function AIGeneratorModule() {
  const [gravity, setGravity] = useState(9.81);
  const [friction, setFriction] = useState(0.35);
  const [topicKey, setTopicKey] = useState('dynamics');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [task, setTask] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const updateTask = () => {
    const newTask = generateTask(topicKey, gravity, friction);
    setTask(newTask);
    setUserAnswer('');
    setFeedback('');
    setShowExplanation(false);
  };

  if (!task) {
    updateTask();
  }

  const handleCheck = () => {
    if (!task) return;
    const result = checkAnswer(userAnswer, task.answer);
    setFeedback(result.message);
    setShowExplanation(true);
  };

  const handleTopicChange = (e) => {
    setTopicKey(e.target.value);
    setTimeout(updateTask, 0);
  };

  return (
    <div className="space-y-6">
      {/* Верхняя панель с выбором темы */}
      <div className="flex justify-between items-center p-4 rounded-xl" style={{ background: 'rgba(17,20,22,0.7)' }}>
        <div className="flex gap-3">
          <select value={topicKey} onChange={handleTopicChange} className="bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white">
            {Object.entries(topics).map(([key, t]) => (
              <option key={key} value={key}>{t.name}</option>
            ))}
          </select>
          <button onClick={updateTask} className="px-4 py-2 bg-red-800 rounded">🔄 Новая задача</button>
        </div>
        <div className="text-xs text-gray-400">AI Core V4.0</div>
      </div>

      {/* Ползунки */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 rounded-xl" style={{ background: 'rgba(17,20,22,0.7)' }}>
          <label>Гравитация: {gravity.toFixed(2)} м/с²</label>
          <input type="range" min="1.62" max="24.79" step="0.01" value={gravity} onChange={(e) => { setGravity(parseFloat(e.target.value)); updateTask(); }} className="w-full" />
        </div>
        <div className="p-4 rounded-xl" style={{ background: 'rgba(17,20,22,0.7)' }}>
          <label>Трение μ: {friction.toFixed(2)}</label>
          <input type="range" min="0.05" max="0.95" step="0.01" value={friction} onChange={(e) => { setFriction(parseFloat(e.target.value)); updateTask(); }} className="w-full" />
        </div>
      </div>

      {/* 3D визуализация */}
      <div className="p-4 rounded-xl" style={{ background: 'rgba(17,20,22,0.7)' }}>
        <div className="h-48"><VectorField3D /></div>
      </div>

      {/* Задача и проверка */}
      {task && (
        <div className="p-6 rounded-xl" style={{ background: 'rgba(17,20,22,0.8)' }}>
          <div className="text-red-400 font-bold mb-2"># ЗАДАЧА: {task.question}</div>
          <p className="mb-4">{task.text}</p>
          <div className="flex gap-3 mb-4">
            <input type="number" step="0.01" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} className="bg-gray-900 border border-gray-700 rounded px-4 py-2 w-40" placeholder="Ваш ответ" />
            <button onClick={handleCheck} className="bg-red-700 px-4 py-2 rounded">Проверить</button>
          </div>
          {feedback && <div className="mb-2 text-sm">{feedback}</div>}
          {showExplanation && (
            <div className="bg-gray-900/60 p-4 rounded">
              <div className="font-bold">📘 Решение:</div>
              {task.explanationSteps.map((step, i) => <div key={i}>{step}</div>)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AIGeneratorModule;