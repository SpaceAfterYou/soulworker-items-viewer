import { urlToUrl } from "~/helpers/url-to-url";

type GainTypes = ReadonlyArray<number>;

export const useGainTypes = defineStore("gain-types-store", () => {
  const { data } = useFetch<GainTypes>(urlToUrl("gainTypes.json"));

  return { gainTypes: (data ?? ref([])) as Ref<GainTypes> };
});
