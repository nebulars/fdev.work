<template>
  <a-config-provider :locale="zhCN" :theme="{ token }">
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="$route.fullPath" />
    </router-view>
  </a-config-provider>
</template>

<script setup>
// Use Vue
import { onMounted } from 'vue';

// Use Theme Dark
import { theme as token } from 'ant-design-vue';

// Use Language
import zhCN from 'ant-design-vue/es/locale/zh_CN';

// In Mounted
onMounted(async () => {
  console.log('④⑥⑨⑧');
});
</script>
