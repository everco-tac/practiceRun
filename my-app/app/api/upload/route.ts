import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // 1. Get SAS URL
    const sasRes = await fetch(`${process.env.API_BASE_URL}/api/azure/generate-sas`);
    const { sasUrl } = await sasRes.json();

    // 2. Upload to Azure Blob
    const uploadRes = await fetch(sasUrl, {
      method: 'PUT',
      headers: {
        'x-ms-blob-type': 'BlockBlob',
        'Content-Type': file.type,
      },
      body: file,
    });

    if (!uploadRes.ok) {
      throw new Error('Failed to upload to Azure');
    }

    // 3. Process with OpenAI
    const openAIRes = await fetch(`${process.env.API_BASE_URL}/api/parse-contract`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileUrl: sasUrl.split('?')[0] }),
    });

    if (!openAIRes.ok) {
      throw new Error('Failed to process with OpenAI');
    }

    const result = await openAIRes.json();

    return NextResponse.json({ 
      success: true, 
      result 
    });

  } catch (error) {
    console.error('Upload processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process upload' },
      { status: 500 }
    );
  }
} 