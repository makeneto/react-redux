import * as Collapsible from "@radix-ui/react-collapsible"

import { ChevronDown } from "lucide-react"
import Lesson from "./Lesson"

interface ModuleProps {
    moduleIndex: number
    title: string
    amountOfLessons: number
}

export default function Module({
    moduleIndex,
    title,
    amountOfLessons,
}: ModuleProps) {
    return (
        <Collapsible.Root className="group rounded border border-zinc-700 mb-2">
            <Collapsible.Trigger className="flex w-full items-center gap-3 p-4 hover:bg-zinc-800 cursor-pointer">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                    <strong>{moduleIndex + 1}</strong>
                </div>

                <div className="flex flex-col gap-1 text-left">
                    <strong className="text-sm">{title}</strong>
                    <span className="text-xs text-zinc-400">
                        {amountOfLessons} aulas
                    </span>
                </div>

                <ChevronDown className="w-4 h-4 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
            </Collapsible.Trigger>

            <Collapsible.Content>
                <nav className="relative flex flex-col gap-4 p-6">
                    <Lesson title="Fundamentos do Redux" duration="09:30" />
                    <Lesson title="Fundamentos do Redux" duration="09:30" />
                    <Lesson title="Fundamentos do Redux" duration="09:30" />
                </nav>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}
