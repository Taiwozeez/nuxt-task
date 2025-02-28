<script setup>
import { ref } from 'vue';
import { DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';
// import { updateMoment } from '../src/services/edit'; // Import the updateMoment function

const event = ref({
  date: new Date(2050, 6, 20), // Use a Date object for v-calendar
  title: "Lorem ipsum began as scrambled, nonsensical Latin derived from",
  details: `Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. "It’s not Latin, though it looks like it, and it actually says nothing." Before & After magazine answered a curious reader, "Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. "It’s not Latin, though it looks like it, and it actually says nothing." Before & After magazine answered a curious reader, "Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.`
});

const updateEvent = async () => {
  try {
    const formattedDate = event.value.date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const data = {
      title: event.value.title,
      details: event.value.details,
      futureDate: formattedDate
    };

    // Use the updateMoment function to send a PATCH request
    const response = await updateMoment('61455755cd07331621f6bb0d', data);

    console.log("Event updated:", response);
    alert("Event updated successfully!");
  } catch (error) {
    console.error("Failed to update event:", error);
    alert("Failed to update event. Please try again.");
  }
};
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white">
    <!-- Navbar -->
    <header class="flex items-center justify-between w-full px-6 py-4 text-white bg-[#008289]">
      <h1 class="text-lg italic font-semibold">Eventful Moments.</h1>
      <nav>
        <NuxtLink to="/Login" class="mr-4 hover:underline">Login</NuxtLink>
        <NuxtLink to="/MyBucket" class="hover:underline">My Bucket</NuxtLink>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-start flex-grow px-6 py-8">
      <div class="w-full max-w-lg ml-6">
        <form @submit.prevent="updateEvent" class="space-y-4">
          <!-- Date Input with Calendar Picker -->
          <div>
            <label for="date" class="block text-sm font-medium text-gray-700">Date in the Future</label>
            <DatePicker v-model="event.date" mode="date" :min-date="new Date()">
              <template #default="{ inputValue, inputEvents }">
                <input
                  :value="inputValue"
                  v-on="inputEvents"
                  class="w-3/4 px-3 py-2 border border-[#707070] rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Select a date"
                />
              </template>
            </DatePicker>
          </div>

          <!-- Title Input -->
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <input v-model="event.title" type="text" id="title" name="title" class="w-3/4 px-3 py-2 border border-[#707070] rounded-md focus:ring-blue-500 focus:border-blue-500">
          </div>

          <!-- Details Input -->
          <div>
            <label for="details" class="block text-sm font-medium text-gray-700">Details</label>
            <textarea v-model="event.details" id="details" name="details" rows="10" class="w-3/4 px-3 py-2 border border-[#707070] rounded-md focus:ring-blue-500 focus:border-blue-500 overflow-hidden resize-none"></textarea>
          </div>

          <!-- Update Button -->
          <div class="flex ml-[120px]">
            <button type="submit" class="px-10 py-2 text-white bg-[#5271FF] rounded-md hover:bg-blue-700">
              Update
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