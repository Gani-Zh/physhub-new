// moduleLoader.js — центральный оркестратор Lego-модулей

class ModuleLoader {
  constructor() {
    this.modules = new Map();
  }

  // Зарегистрировать новый модуль
  register(name, component, config = {}) {
    this.modules.set(name, { component, config });
    console.log(`✅ Модуль "${name}" загружен`);
  }

  // Получить компонент модуля
  getModule(name) {
    return this.modules.get(name);
  }

  // Получить все модули
  getAllModules() {
    return Array.from(this.modules.keys());
  }
}

export const moduleLoader = new ModuleLoader();