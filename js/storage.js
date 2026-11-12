/* AlagaLegal PH – LocalStorage Persistence Layer (Privacy-First, Device-Only) */
(function (global) {
  'use strict';

  const PREFIX = 'alagalegal_ph_v1_';

  const KEYS = {
    LANG: `${PREFIX}lang`,
    THEME: `${PREFIX}theme`,
    TEXT_SIZE: `${PREFIX}text_size`,
    CHECKLISTS: `${PREFIX}checklists`,
    ACTIVE_PROCEDURE: `${PREFIX}active_procedure`,
    SELECTED_SITUATION: `${PREFIX}selected_situation`,
    PLAN_TASKS: `${PREFIX}plan_tasks`,
    PLAN_NOTES: `${PREFIX}plan_notes`
  };

  const memoryFallback = {};

  function readRaw(key, defaultValue) {
    try {
      const val = window.localStorage.getItem(key);
      return val !== null ? JSON.parse(val) : defaultValue;
    } catch (err) {
      return Object.prototype.hasOwnProperty.call(memoryFallback, key)
        ? memoryFallback[key]
        : defaultValue;
    }
  }

  function writeRaw(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      memoryFallback[key] = value;
      return false;
    }
  }

  const AlagaStorage = {
    getLang() {
      return readRaw(KEYS.LANG, 'en');
    },
    setLang(lang) {
      return writeRaw(KEYS.LANG, lang === 'fil' ? 'fil' : 'en');
    },
    getTheme() {
      return readRaw(KEYS.THEME, 'system');
    },
    setTheme(theme) {
      return writeRaw(KEYS.THEME, theme);
    },
    getTextSize() {
      return readRaw(KEYS.TEXT_SIZE, 'normal');
    },
    setTextSize(size) {
      return writeRaw(KEYS.TEXT_SIZE, size === 'large' ? 'large' : 'normal');
    },
    getAllChecklists() {
      return readRaw(KEYS.CHECKLISTS, {});
    },
    getProcedureChecklist(procedureId) {
      const all = this.getAllChecklists();
      return all[procedureId] || {};
    },
    setChecklistItem(procedureId, itemId, checked) {
      const all = this.getAllChecklists();
      if (!all[procedureId]) all[procedureId] = {};
      all[procedureId][itemId] = Boolean(checked);
      return writeRaw(KEYS.CHECKLISTS, all);
    },
    resetProcedureChecklist(procedureId) {
      const all = this.getAllChecklists();
      delete all[procedureId];
      return writeRaw(KEYS.CHECKLISTS, all);
    },
    getActiveProcedure() {
      return readRaw(KEYS.ACTIVE_PROCEDURE, 'domestic-adoption');
    },
    setActiveProcedure(procedureId) {
      return writeRaw(KEYS.ACTIVE_PROCEDURE, procedureId);
    },
    getSelectedSituation() {
      return readRaw(KEYS.SELECTED_SITUATION, '');
    },
    setSelectedSituation(situationId) {
      return writeRaw(KEYS.SELECTED_SITUATION, situationId);
    },
    getPlanTasks() {
      return readRaw(KEYS.PLAN_TASKS, []);
    },
    savePlanTasks(tasks) {
      return writeRaw(KEYS.PLAN_TASKS, tasks);
    },
    getPlanNotes() {
      return readRaw(KEYS.PLAN_NOTES, '');
    },
    savePlanNotes(notes) {
      return writeRaw(KEYS.PLAN_NOTES, String(notes || ''));
    },
    clearAllUserData() {
      Object.values(KEYS).forEach((k) => {
        try {
          window.localStorage.removeItem(k);
        } catch (err) {
          delete memoryFallback[k];
        }
      });
    }
  };

  global.AlagaStorage = AlagaStorage;
})(window);