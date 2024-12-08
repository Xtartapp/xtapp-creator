import { LoaderFunctionArgs } from "@remix-run/node"
import puppeteer from "puppeteer"

export async function loader({ request }: LoaderFunctionArgs) {
  const browser = await puppeteer.launch({
    headless: true,
  })
  const page = await browser.newPage()
  const searchParams = new URL(request.url).searchParams

  await page.setViewport({ width: 1528, height: 740, deviceScaleFactor: 2 })
  await page.goto("http://localhost:5173?" + searchParams.toString())
  await page.waitForSelector("#screen")

  const element = await page.$("#screen")
  if (!element) {
    throw new Error("Element not found")
  }

  const imgUint8Array = await element.screenshot({
    type: "webp",
    path: "screenshot.webp",
    quality: 100,
  })

  console.log("Screenshot saved as screenshot.png")

  await browser.close()

  return new Response(imgUint8Array, {
    headers: {
      "Content-Type": "image/png",
    },
  })
}
