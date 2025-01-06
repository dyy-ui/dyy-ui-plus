<template>
  <div>
    <span>
      <slot name="prefix"></slot>
    </span>
    <span>
      {{ currentValue }}
    </span>
    <slot name="suffix"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, withDefaults } from 'vue'
import type { PropsNumberText } from './types'

defineOptions({
  name: "LxNumberText",
});

/**
 * @param to 起始值
 * @param from 结束值
 * @param duration 滚动时间
 */

const props = withDefaults(defineProps<PropsNumberText>(), {
  to: 0,
  from: 0,
  duration: 1000,
})

const currentValue = ref<any>(props.to)
const targetValue = ref(props.from)
const animationId = ref()

/**
 * 数字滚动方法
 * @param targetValue 数字值
 */
const startAnimation = (targetValue: number) => {
  const startValue = currentValue.value
  const startTime = Date.now()

  const updateValue = () => {
    const currentTime = Date.now()
    const progress = Math.min(1, (currentTime - startTime) / props.duration)
    currentValue.value = formatNumber(Math.floor(startValue + progress * (targetValue - startValue)))

    if (progress < 1) {
      animationId.value = requestAnimationFrame(updateValue)
    } else {
      currentValue.value = formatNumber(props.from)
      cancelAnimationFrame(animationId.value)
    }
  }

  animationId.value = requestAnimationFrame(updateValue)
}

/**
 * 数字格式化
 * @param num 数字
 * @returns number
 */

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

onMounted(() => {
  startAnimation(targetValue.value)
})
</script>

<style scoped></style>
