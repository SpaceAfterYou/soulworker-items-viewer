import { urlToUrl } from "~/helpers/url-to-url";

type GainTypes = ReadonlyArray<number>;

export const useGainTypes = defineStore("gain-types-store", () => {
  const { data } = useFetch<GainTypes>(urlToUrl("gainTypes.json"));

  const selectedGainTypes = ref(new Set<number>());

  return { gainTypes: (data ?? []) as Ref<GainTypes>, selectedGainTypes };
});
