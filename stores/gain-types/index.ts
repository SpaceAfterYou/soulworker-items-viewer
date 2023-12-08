type GainTypes = ReadonlyArray<number>;

export const useGainTypes = defineStore("gain-types-store", () => {
  const { data } = useFetch<GainTypes>(
    new URL("gainTypes.json", useRequestURL()).href
  );

  const selectedGainTypes = ref(new Set<number>());

  return { gainTypes: (data ?? []) as Ref<GainTypes>, selectedGainTypes };
});
