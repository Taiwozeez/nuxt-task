import { ref, computed, watchEffect } from 'vue';
import { useFetch } from '#app';

export function useMomentDetails(momentId) {
  const moment = ref(null);
  const error = ref(null);
  const pending = ref(true);

  // Fetch data when the ID changes
  watchEffect(async () => {
    if (!momentId) return;
    pending.value = true;
    try {
      const { data, error: fetchError } = await useFetch(`/api/moments/${momentId}`);
      if (fetchError.value) throw fetchError.value;
      moment.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      pending.value = false;
    }
  });

  return { moment, error, pending };
}
