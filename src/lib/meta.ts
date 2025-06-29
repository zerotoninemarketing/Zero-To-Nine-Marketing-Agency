interface MetaEventData {
  eventName: string;
  eventId: string;
  user: {
    email?: string;
    phone?: string;
  };
  customData?: Record<string, any>;
}

export async function sendMetaEvent(
  eventName: string,
  eventId: string,
  user: { email?: string; phone?: string },
  customData?: Record<string, any>
): Promise<void> {
  try {
    const response = await fetch('/api/meta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventId,
        user,
        customData,
      }),
    });

    if (!response.ok) {
      console.error('Failed to send Meta event:', response.statusText);
    }
  } catch (error) {
    console.error('Error sending Meta event:', error);
  }
} 