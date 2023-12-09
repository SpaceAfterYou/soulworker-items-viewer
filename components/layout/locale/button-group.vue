<script lang="ts" setup>
import type { Locale } from "~/locale/types/locale";

const { getLocaleMessage } = useI18n();
</script>

<template>
  <section class="flex gap-4">
    <LayoutLocaleButton
      v-for="l of $i18n.availableLocales"
      :is-active="$i18n.locale === l"
      @click="$i18n.locale = l"
      :key="l"
    >
      {{ getLocaleMessage<Locale>(l).header.locale.name }}
    </LayoutLocaleButton>
  </section>
</template>
