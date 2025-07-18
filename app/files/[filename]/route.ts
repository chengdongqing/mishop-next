import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { readFile } from 'node:fs/promises';

/**
 * 访问本地文件的API
 */
export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;

  const filePath = path.join(process.cwd(), 'public', 'uploads', filename);

  try {
    const fileBuffer = await readFile(filePath);

    let contentType = 'application/octet-stream';
    if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
      contentType = 'image/jpeg';
    } else if (filename.endsWith('.png')) {
      contentType = 'image/png';
    } else if (filename.endsWith('.gif')) {
      contentType = 'image/gif';
    } else if (filename.endsWith('.webp')) {
      contentType = 'image/webp';
    }

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType
      }
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return new NextResponse('File not found', { status: 404 });
    }
    console.error('Error reading file:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
