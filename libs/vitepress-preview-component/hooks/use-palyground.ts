import { onMounted, ref } from 'vue'
export function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)))
}
export type Link = {
  text: string
  link: string
  promotion?: string
  activeMatch: string
}
const MAIN_FILE_NAME = 'App.vue'

export const usePreview = () => location.host.startsWith('preview')

export const usePreviewPR = () => location.host.split('-', 2)[1]

export const usePlayground = (source: string) => {
  const code = source ? decodeURIComponent(source) : source
  const originCode = {
    [MAIN_FILE_NAME]: code,
  }

  const encoded = code ? utoa(JSON.stringify(originCode)) : ''

  let link = `https://dyy-ui.github.io/dyy-ui-plus-playground/`

  if (usePreview()) {
    link = `${link}?pr=${usePreviewPR()}`
  }

  if (code) {
    link += `#${encoded}`
  }

  return {
    encoded,
    link,
  }
}

export const usePlaygroundPreview = (
  props: Readonly<{
    item: Link
  }>
) => {
  const targetLink = ref(props.item.link)

  const handler = () => {
    if (props.item.text === 'Playground') {
      const { link } = usePlayground('')

      targetLink.value = link
    }
  }
  onMounted(handler)

  return targetLink
}
