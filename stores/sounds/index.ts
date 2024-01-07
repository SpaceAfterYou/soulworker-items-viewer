import { urlToUrl } from "~/helpers/url-to-url";

type PackageData = Record<string, ReadonlyArray<string>>;

export const useSoundsPackage = defineStore("sounds-packagecontainers-store", () => {
  const { data } = useFetch<PackageData>(urlToUrl("sounds/containers.json"));

  return {
    soundsContainers: (data ?? ref([])) as Ref<PackageData>,
  };
});

type ContainerData = ReadonlyArray<{ name: string }>;

export const useSoundsContainers = defineStore("sounds-package-store", () => {
  const cache = ref(new Map<string, ContainerData | null>());

  const selected = ref<string>("");

  const active = computed(() => {
    if (cache.value.has(selected.value)) {
      return cache.value.get(selected.value);
    }

    const end = selected.value.lastIndexOf("/");
    const name = selected.value.substring(end);

    cache.value.set(name, null);

    useFetch<ContainerData>(urlToUrl(`sounds/${name}.json`)).then(({ data }) => {
      if (data.value) {
        cache.value.set(selected.value, data.value);
      }
    });

    return cache.value.get(selected.value);
  });

  return { selected, active };
});
