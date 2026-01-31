import { NextRequest ,NextResponse } from "next/server";
import { PDFParse } from "pdf-parse";

export async function POST(request: NextRequest) {
    try {
      // Get the uploaded file from FormData
         const formData = await request.formData();
         const file = formData.get('file') as File;
         if (!file) {
            return NextResponse.json({error:'No file uploded'},{status:400});
         }



    } catch (error) {
        console.error('PDF parsing error:', error);
    return NextResponse.json(
      { error: 'Failed to parse PDF' },
      { status: 500 }
    )}

}