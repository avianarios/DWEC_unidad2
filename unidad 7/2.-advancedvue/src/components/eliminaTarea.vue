<script setup>
  defineProps(['title'])
  defineEmits(['remove'])
</script>

<template>
  <!--This component is emitting (sending) an event to its parend called "remove"-->
  <li>
    {{ title }}
    <button @click="$emit('remove')">Remove</button>
  </li>
</template>