// // composables/useMomentApi.js
// import { useFetch } from '#app'

// export const useMomentApi = async (momentId) => {
//   const { data, error } = await useFetch(`https://eventful-moments-api.onrender.com/api/v1/moment/${momentId}`)
  
//   if (error.value) {
//     console.error("Error fetching moment:", error.value)
//     return null
//   }
  
//   return data.value?.data || null
// }
