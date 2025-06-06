<script setup>
  import { watchEffect, ref, computed } from 'vue'
  import { Repl, useStore, useVueImportMap, mergeImportMap } from '@vue/repl'
  import Monaco from '@vue/repl/monaco-editor'
  import HelloWorld from './components/HelloWorld.vue?raw'
  import Basic from '../../docs/demo/numberText/Basic.vue?raw'
  console.log(ref(Basic))

  // retrieve some configuration options from the URL
  const query = new URLSearchParams(location.search)

  const {
    importMap: builtinImportMap,
    vueVersion,
    productionMode,
  } = useVueImportMap({
    // specify the default URL to import Vue runtime from in the sandbox
    // default is the CDN link from jsdelivr.com with version matching Vue's version
    // from peerDependency
    runtimeDev: 'https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.esm-browser.js',
    runtimeProd: 'https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.esm-browser.prod.js',
    serverRenderer: 'https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.esm-browser.js',
  })
  console.log(builtinImportMap)

  // 自定义 importMap
  const customImportMap = {
    imports: {
      '@vue/shared': 'https://fastly.jsdelivr.net/npm/@vue/shared@latest/dist/shared.esm-bundler.js',
      'element-plus': 'https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.full.min.mjs',
      'element-plus/': 'https://fastly.jsdelivr.net/npm/element-plus@latest/',
      'dyy-ui-plus': 'https://unpkg.com/dyy-ui-plus@1.0.7/dist/full/full.js',
    },
  }
  let mergedImportMaps = ref()
  // 计算合并后的 importMap，确保 builtinImportMap.value 有 imports 字段
  mergedImportMaps.value = mergeImportMap(builtinImportMap.value, customImportMap)

  const store = useStore(
    {
      // pre-set import map
      builtinImportMap: mergedImportMaps,
      // starts on the output pane (mobile only) if the URL has a showOutput query
      showOutput: ref(query.has('showOutput')),
      // starts on a different tab on the output pane if the URL has a outputMode query
      // and default to the "preview" tab
      outputMode: ref(query.get('outputMode') || 'preview'),
      template: ref({
        welcomeSFC: Basic,
      }),
    },
    // initialize repl with previously serialized state
    location.hash
  )

  // persist state to URL hash
  watchEffect(() => history.replaceState({}, '', store.serialize()))

  // use a specific version of Vue
  // vueVersion.value = '3.2.8'
  // production mode is enabled
  productionMode.value = true
</script>

<template>
  <Repl :store="store" :editor="Monaco" :showCompileOutput="true" :previewTheme="true" />
</template>
