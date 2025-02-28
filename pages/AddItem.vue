<script setup>
import { ref } from 'vue';

const date = ref('');
const title = ref('');
const details = ref('');

const saveEvent = () => {
  console.log("Saving event:", date.value, title.value, details.value);
};
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Navbar -->
    <header class="flex items-center justify-between w-full px-6 py-4 text-white bg-[#008289]">
      <h1 class="text-lg italic font-semibold">Eventful Moments.</h1>
      <nav>
        <NuxtLink to="/login" class="mr-4 hover:underline">Login</NuxtLink>
        <NuxtLink to="/my-bucket" class="hover:underline">My Bucket</NuxtLink>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-start flex-grow px-6 py-8">
      <div class="w-full max-w-lg ml-6">
        <form @submit.prevent="saveEvent" class="space-y-4">
          <!-- Date Input (No Calendar Picker) -->
          <div>
            <label for="date" class="block text-sm font-medium text-gray-700">Date in the Future</label>
            <input v-model="date" type="text" id="date" name="date" class="w-3/4 px-3 py-2 border border-[#707070] rounded-md focus:ring-blue-500 focus:border-blue-500">
          </div>

          <!-- Title Input -->
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <input v-model="title" type="text" id="title" name="title" class="w-3/4 px-3 py-2 border border-[#707070] rounded-md focus:ring-blue-500 focus:border-blue-500">
          </div>

          <!-- Details Input -->
          <div>
            <label for="details" class="block text-sm font-medium text-gray-700">Details</label>
            <textarea v-model="details" id="details" name="details" rows="6" class="w-3/4 px-3 py-10 border border-[#707070] rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>

          <!-- Save Button -->
          <div class="flex ml-[120px]">
            <button type="submit" class="px-10 py-2 text-white bg-[#5271FF] rounded-md hover:bg-blue-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </main>

    <!-- Footer -->
    <footer class="w-full py-4 pr-6 text-right text-gray-900 bg-[#60CED4]">
      Eventful Moments by Place Your Name Here
    </footer>
  </div>
</template>
