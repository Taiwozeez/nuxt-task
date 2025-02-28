// services/api.js
import { ref } from 'vue'

export const useFetchMoment = (momentId) => {
  const moment = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const fetchMoment = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(`https://eventful-moments-api.onrender.com/api/v1/moment/${momentId}`)
      
      if (!response.ok) {
        throw new Error(`API error with status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.status_code === 200) {
        moment.value = data.data
      } else {
        throw new Error(data.message || 'Failed to fetch moment')
      }
    } catch (err) {
      error.value = err.message || 'Something went wrong'
      console.error('Error fetching moment:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    moment,
    error,
    loading,
    fetchMoment
  }
}