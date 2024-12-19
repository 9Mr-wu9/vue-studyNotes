import { onMounted, onUnmounted } from "vue";

export function useEventListener(target, event, cb) {
  onMounted(() => target.addEventListener(event, cb));
  onUnmounted(() => target.addEventListener(event, cb));
}
