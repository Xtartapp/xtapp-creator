import { Button, Select, SelectItem } from "@nextui-org/react"
import type { MetaFunction } from "@remix-run/node"
import { useSearchParams } from "@remix-run/react"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { ProductCard } from "~/components/product-card"
import { alignments, gradients, justifications, paddings } from "~/configs"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const [searchParams] = useSearchParams()

  const [padding, setPadding] = useState("")
  const [alignment, setAlignment] = useState("")
  const [justification, setJustification] = useState("")
  const [gradient, setGradient] = useState("")

  useEffect(() => {
    setPadding(searchParams.get("padding") ?? "")
    setAlignment(searchParams.get("alignment") ?? "")
    setJustification(searchParams.get("justification") ?? "")
    setGradient(searchParams.get("gradient") ?? "")
  }, [searchParams])

  return (
    <div className="flex min-h-screen justify-center w-screen">
      <div className="flex justify-between w-full">
        <div className="w-3/12 p-4 bg-gray-50">
          <h1 className="text-2xl font-light text-gray-600 mb-9">
            Customize your screenshot
          </h1>
          <SelectConfigs
            label="Padding"
            items={paddings}
            onChange={setPadding}
            value={padding}
          />

          <SelectConfigs
            label="Alignment"
            items={alignments}
            onChange={setAlignment}
            value={alignment}
          />
          <SelectConfigs
            label="Justification"
            items={justifications}
            onChange={setJustification}
            value={justification}
          />
          <SelectConfigs
            label="Gradient"
            items={gradients}
            onChange={setGradient}
            value={gradient}
          />
          <Button
            className="w-full mt-4"
            onClick={() => {
              fetch(
                `screenshots?padding=${padding}&alignment=${alignment}&justification=${justification}&gradient=${gradient}`,
                {
                  method: "GET",
                }
              ).then((res) => {
                if (res.ok) {
                  res.blob().then((blob) => {
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement("a")
                    a.href = url
                    a.download = "screenshot.webp"
                    a.click()
                  })
                }
              })
            }}
          >
            Download
          </Button>
        </div>
        <div className="flex justify-center w-9/12 items-center">
          <div
            className={clsx(
              "w-[900px] h-[675px] bg-gray-300 flex flex-col",
              padding,
              alignment,
              justification,
              gradient
            )}
            id="screen"
          >
            {/* Render your components here */}
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  )
}

function SelectConfigs({
  label,
  items,
  onChange,
  value,
}: {
  label: string
  items: { key: string; value: string }[]
  onChange: (value: string) => void
  value?: string
}) {
  return (
    <Select
      fullWidth
      className="w-full my-4"
      label={label}
      onSelectionChange={(e) => onChange(e.currentKey ?? "")}
      selectedKeys={value ? [value] : []}
    >
      {items.map((item) => (
        <SelectItem key={item.value}>{item.key}</SelectItem>
      ))}
    </Select>
  )
}
