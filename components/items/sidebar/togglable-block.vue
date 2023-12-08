<script lang="ts" setup>
type Props = { selected: Set<number>; localePath: string; values: number[] };

const props = defineProps<Props>();

function toggle(value: number) {
  if (!props.selected.delete(value)) {
    props.selected.add(value);
  }
}
</script>

<template>
  <SidebarTitledBlock>
    <template #head> {{ $t(`${localePath}.name`) }} </template>

    <template #body>
      <section class="flex flex-wrap gap-2">
        <SidebarToggleButton
          :is-active="selected.has(value)"
          v-for="value of values"
          @click="toggle(value)"
          :key="value"
        >
          {{ $t(`${localePath}.values.${value}`) }}
        </SidebarToggleButton>
      </section>
    </template>
  </SidebarTitledBlock>
</template>
