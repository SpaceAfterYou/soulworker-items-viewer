export const useSettingsStore = defineStore("settings-store", () => {
  const page = reactive({
    size: 1000,
  });

  return { page };
});
