import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { eventName, eventId, user, customData } = body;

    const pixelId = '750531040973198';
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!accessToken) {
        console.error('Facebook Access Token is not set');
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

    const url = `https://graph.facebook.com/v18.0/${pixelId}/events`;

    const eventData = {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        user_data: {
            em: user.email ? [user.email] : undefined,
            ph: user.phone ? [user.phone] : undefined,
            fbc: req.cookies.get('_fbc')?.value,
            fbp: req.cookies.get('_fbp')?.value,
            client_ip_address: req.ip,
            client_user_agent: req.headers.get('user-agent'),
        },
        custom_data: customData,
        action_source: 'website',
    };

    const payload = {
        data: [eventData],
        access_token: accessToken,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const jsonResponse = await response.json();

        if (!response.ok) {
            console.error('Failed to send event to Meta:', jsonResponse);
            return NextResponse.json({ error: 'Failed to send event' }, { status: response.status });
        }

        return NextResponse.json(jsonResponse, { status: 200 });

    } catch (error) {
        console.error('Error sending event to Meta:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
} 