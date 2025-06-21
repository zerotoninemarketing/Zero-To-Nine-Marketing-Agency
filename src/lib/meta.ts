export const sendMetaEvent = async (
    eventName: string,
    eventId: string,
    user: { email?: string; phone?: string },
    customData?: Record<string, any>
) => {
    try {
        await fetch('/api/meta', {
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
    } catch (error) {
        console.error('Failed to send Meta event', error);
    }
}; 