// AI CORE ENGINE V4.0
// Центральная логика генерации задач, проверки, объяснений

export const topics = {
  dynamics: {
    name: "Динамика (горизонтальное движение с трением)",
    generate: (gravity, friction) => {
      const mass = (Math.random() * 20 + 5).toFixed(1);
      const force = (Math.random() * 100 + 20).toFixed(0);
      const mu = friction;
      const g = gravity;
      const massNum = parseFloat(mass);
      const forceNum = parseFloat(force);
      const frictionForce = mu * massNum * g;
      const netForce = forceNum - frictionForce;
      const acceleration = netForce / massNum;
      return {
        text: `Объект массой m = ${mass} кг движется по горизонтали с μ = ${mu.toFixed(2)} под действием F = ${force} Н. g = ${g.toFixed(2)} м/с².`,
        question: "Вычислите ускорение (м/с²).",
        answer: acceleration.toFixed(2),
        explanationSteps: [
          `Fтр = μ·m·g = ${mu.toFixed(2)}·${mass}·${g.toFixed(2)} = ${frictionForce.toFixed(2)} Н`,
          `Fрез = F - Fтр = ${force} - ${frictionForce.toFixed(2)} = ${netForce.toFixed(2)} Н`,
          `a = Fрез / m = ${netForce.toFixed(2)} / ${mass} = ${acceleration.toFixed(2)} м/с²`
        ]
      };
    }
  },
  kinematics: {
    name: "Кинематика (равноускоренное движение)",
    generate: (gravity, friction) => {
      const v0 = (Math.random() * 10).toFixed(1);
      const a = (Math.random() * 5 + 1).toFixed(1);
      const t = (Math.random() * 10 + 1).toFixed(1);
      const S = (v0 * t + 0.5 * a * t * t).toFixed(1);
      return {
        text: `Тело начинает движение с v₀ = ${v0} м/с и ускорением a = ${a} м/с². Найдите путь за t = ${t} с.`,
        question: "Чему равен пройденный путь (м)?",
        answer: S,
        explanationSteps: [
          `Формула: S = v₀·t + (a·t²)/2`,
          `S = ${v0}·${t} + (${a}·${t}²)/2 = ${(v0*t).toFixed(1)} + ${(0.5*a*t*t).toFixed(1)} = ${S} м`
        ]
      };
    }
  }
  // Позже добавим остальные темы
};

export function generateTask(topicKey, gravity = 9.81, friction = 0.35) {
  const topic = topics[topicKey];
  if (!topic) return null;
  return topic.generate(gravity, friction);
}

export function checkAnswer(userAnswer, correctAnswer) {
  const user = parseFloat(userAnswer);
  if (isNaN(user)) return { correct: false, message: "Введите число" };
  const diff = Math.abs(user - parseFloat(correctAnswer));
  if (diff < 0.05) return { correct: true, message: "✅ Верно!" };
  return { correct: false, message: `❌ Неверно. Правильный ответ: ${correctAnswer}` };
}