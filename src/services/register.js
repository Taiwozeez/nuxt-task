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
      // You might need to add an auth token here
      const headers = {
        'Content-Type': 'application/json',
        // Add your authentication header - example:
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
      
      const response = await fetch(`https://eventful-moments-api.onrender.com/api/v1/moment/${momentId}`, {
        method: 'GET',
        headers
      })
      
      if (response.status === 401) {
        throw new Error('Authentication required. Please log in again.')
      }
      
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

// For demonstration purposes, here's how you would make a call with Axios if you prefer
export const fetchMomentWithAxios = async (momentId, token) => {
  try {
    const { data } = await axios.get(`https://eventful-moments-api.onrender.com/api/v1/moment/${momentId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return data
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Authentication required. Please log in again.')
    }
    throw error
  }
}