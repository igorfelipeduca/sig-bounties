import { ImageResponse } from "next/server";
import { getThumbnailHtml } from "./thumbnail";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title");

    if (!title) {
      return new Response("Title required", { status: 400 });
    }

    const imageHtml = getThumbnailHtml(title);

    return new ImageResponse(imageHtml, {
      width: 1200,
      height: 630,
    });
  } catch (exception) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
