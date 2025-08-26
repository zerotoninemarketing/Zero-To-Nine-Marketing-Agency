import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { path } = await request.json();
    
    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path });
    } else {
      // Revalidate all blog paths
      revalidatePath('/blog');
      revalidatePath('/blog/[slug]');
      return NextResponse.json({ revalidated: true, path: '/blog' });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error revalidating' }, { status: 500 });
  }
}
