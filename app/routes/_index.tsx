import { Button, Link, Select, SelectItem } from "@nextui-org/react"
import type { MetaFunction } from "@remix-run/node"
import { useSearchParams } from "@remix-run/react"
import clsx from "clsx"
import { useEffect, useState } from "react"
import Component from "~/components/component"
import {
  alignments,
  backgrounds,
  justifications,
  paddings,
  scaleFactors,
} from "~/configs"

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
  const [background, setBackground] = useState("ash")
  const [scaleFactor, setScaleFactor] = useState("md")

  useEffect(() => {
    setPadding(searchParams.get("padding") ?? "")
    setAlignment(searchParams.get("alignment") ?? "")
    setJustification(searchParams.get("justification") ?? "")
    setBackground(searchParams.get("background") ?? "")
    setScaleFactor(searchParams.get("scaleFactor") ?? "")
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
            label="Background"
            items={backgrounds}
            onChange={setBackground}
            value={background}
          />
          <SelectConfigs
            label="Scale Factor"
            items={scaleFactors}
            onChange={setScaleFactor}
            value={scaleFactor}
          />
          <Button
            className="w-full mt-4"
            color="success"
            onClick={() => {
              fetch(
                `screenshots?padding=${padding}&alignment=${alignment}&justification=${justification}&background=${background}&scaleFactor=${scaleFactor}`,
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
          <Button
            as={Link}
            href="/preview"
            className="w-full mt-4"
            target="_blank"
          >
            Preview in web screen
          </Button>
        </div>
        <div className="flex justify-center w-9/12 items-center">
          <div
            className={clsx(
              "w-[900px] h-[675px] flex flex-col",
              padding,
              alignment,
              justification,
              background
            )}
            id="screen"
          >
            <div className={clsx("w-auto h-auto", scaleFactor)}>
              {/* Render your components here */}
              <Component />
            </div>
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
