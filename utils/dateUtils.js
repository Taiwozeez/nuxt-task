// utils/dateUtils.js

/**
 * Format a date string to MM/DD/YYYY format
 * @param {string} dateString - The date string to format
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
    if (!dateString) return ''
    
    const date = new Date(dateString)
    
    // Check if date is valid
    if (isNaN(date.getTime())) return 'Invalid date'
    
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const year = date.getFullYear()
    
    return `${month}/${day}/${year}`
  }
  
  /**
   * Calculate time remaining until a future date
   * @param {string} futureDate - The future date string
   * @returns {Object} Object containing days, hours, minutes remaining
   */
  export const getTimeRemaining = (futureDate) => {
    if (!futureDate) return { days: 0, hours: 0, minutes: 0 }
    
    const future = new Date(futureDate)
    const now = new Date()
    
    // Check if date is valid
    if (isNaN(future.getTime())) return { days: 0, hours: 0, minutes: 0 }
    
    // If date is in the past
    if (future < now) return { days: 0, hours: 0, minutes: 0, isPast: true }
    
    const diffMs = future - now
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
    
    return {
      days: diffDays,
      hours: diffHours,
      minutes: diffMinutes,
      isPast: false
    }
  }
  
  /**
   * Format the creation date and time
   * @param {string} dateString - The date string to format
   * @returns {string} Formatted date and time string
   */
  export const formatCreatedAt = (dateString) => {
    if (!dateString) return ''
    
    const date = new Date(dateString)
    
    // Check if date is valid
    if (isNaN(date.getTime())) return 'Invalid date'
    
    return date.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }