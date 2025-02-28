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
      <main class="flex flex-col items-center flex-grow px-6 py-8">
        <!-- Page Header -->
        <div class="w-full mb-6 max-w-7xl">
          <h2 class="text-4xl font-bold text-gray-900">Welcome John Doe,</h2>
          <p class="text-gray-600">Here are items in your eventful moment bucket.</p>
        </div>
  
        <!-- Add Item Button -->
        <div class="flex justify-end w-full mb-6 max-w-7xl">
          <NuxtLink
            to="/AddItem"
            class="w-[150px] h-[40px] bg-[#5271FF] border rounded-[15px] text-white font-semibold opacity-100 hover:bg-blue-700 transition flex items-center justify-center"
          >
            Add Item
          </NuxtLink>
        </div>
  
        <!-- Four-Card Grid Layout -->
        <div class="grid w-full grid-cols-2 gap-4 max-w-7xl">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="p-4 bg-white border rounded-lg shadow-md card hover:bg-[#FFF5A7] transition"
          >
            <h3 class="font-bold">{{ item.title }}</h3>
            <p class="mt-2 text-gray-700">{{ item.description }}</p>
            <div class="flex items-center justify-between mt-3 text-sm text-gray-600">
                <NuxtLink to="/SingleItem" class="text-blue-600 hover:underline">View Details</NuxtLink>

              <span>{{ item.date }}</span>
            </div>
          </div>
        </div>
  
        <!-- Load More Button -->
        <div class="mt-6">
          <button
            type="button"
            class="w-[150px] h-[40px] bg-[#5271FF] border rounded-[15px] text-white font-semibold opacity-100 hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      </main>
  
      <!-- Footer -->
      <footer class="w-full py-4 pr-6 text-right text-gray-900 bg-[#60CED4]">
        Eventful Moments by Place Your Name Here
      </footer>
    </div>
  </template>
  
  <script setup>
  // No need to import NuxtLink, it's automatically available in Nuxt
  const items = [
    {
      title: "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.",
      description:
        "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a",
      date: "22/01/2023 - 20/03/2025",
    },
    {
      title: "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.",
      description:
        "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a",
      date: "22/01/2023 - 20/03/2025",
    },
    {
      title: "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.",
      description:
        "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a",
      date: "22/01/2023 - 20/03/2025",
    },
    {
      title: "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.",
      description:
        "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a",
      date: "22/01/2023 - 20/03/2025",
    },
  ];
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>