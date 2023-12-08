<script lang="ts" setup>

import type { Locale } from "~/locale/types/locale";

const { getLocaleMessage } = useI18n();

</script>

<template>
  <section class="flex gap-4">
    <LayoutLocaleButton
      v-for="locale of $i18n.availableLocales"
      :is-active="$i18n.locale === locale"
      @click="$i18n.locale = locale"
      :key="locale"
    >
      {{ getLocaleMessage<Locale>(locale).header.locale.name }}
    </LayoutLocaleButton>
  </section>
</template>
