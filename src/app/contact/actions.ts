'use server'

import { sendMetaEvent } from '@/lib/meta';
import { randomUUID } from 'crypto';

interface ContactFormData {
  name: string
  email: string
  countryCode: string
  phone: string
  requirements: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Here you would typically send this data to your backend service
    // For now, we'll just log it and return success
    console.log('Form submission:', formData)
    
    // You can add email sending logic here using your preferred email service
    // Example: Send email to zerotoninemarketing@gmail.com
    
    // --- BEGIN META EVENT TRACKING ---
    await sendMetaEvent(
      'Contact',
      randomUUID(),
      { email: formData.email, phone: formData.phone },
      { content_name: 'Contact Form Submission' }
    );
    // --- END META EVENT TRACKING ---

    return { success: true, message: 'Thank you for your message. We will get back to you soon!' }
  } catch (error) {
    console.error('Form submission error:', error)
    return { success: false, message: 'There was an error submitting your message. Please try again.' }
  }
} 