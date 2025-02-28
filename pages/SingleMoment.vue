<template>
    <div class="min-h-screen bg-white p-6">
      <h2 class="text-3xl font-bold text-gray-900">Moment Details</h2>
  
      <div v-if="moment" class="mt-4 p-4 border rounded-lg shadow-md bg-gray-100">
        <h3 class="text-xl font-semibold">{{ moment.title }}</h3>
        <p class="text-gray-700">{{ moment.details }}</p>
        <p class="mt-2 text-sm text-gray-600">Event Date: {{ formattedDate }}</p>
      </div>
  
      <div v-else class="mt-4">Loading...</div>
  
      <NuxtLink to="/my-bucket" class="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md">
        Back to My Bucket
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useMomentApi } from '@/composables/useMomentApi'
  
  const route = useRoute()
  const moment = ref(null)
  const formattedDate = ref("")
  
  onMounted(async () => {
    moment.value = await useMomentApi(route.params.id)
  
    if (moment.value) {
      formattedDate.value = new Date(moment.value.futureDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    }
  })
  </script>
  