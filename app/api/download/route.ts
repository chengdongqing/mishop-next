import { NextRequest, NextResponse } from 'next/server';

const maxSize = 5 * 1024 * 1024; // 限制5MB

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const remoteUrl = searchParams.get('remoteUrl');
  const filename = searchParams.get('filename');

  if (!remoteUrl) {
    return new NextResponse('Remote URL is required', { status: 400 });
  }

  try {
    const response = await fetch(remoteUrl);

    if (!response.ok) {
      return new NextResponse('Failed to fetch remote file', {
        status: response.status
      });
    }

    const contentLength = response.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > maxSize) {
      return new NextResponse('File size exceeds 5MB', { status: 413 });
    }

    const fileData = await response.arrayBuffer();
    const contentType =
      response.headers.get('content-type') || 'application/octet-stream';

    return new NextResponse(fileData, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename || ''}"`
      }
    });
  } catch (error) {
    console.error('Error downloading remote file:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
