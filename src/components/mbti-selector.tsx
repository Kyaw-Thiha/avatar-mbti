"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "infj",
    label: "INFJ",
  },
  {
    value: "enfj",
    label: "ENFJ",
  },
  {
    value: "isfp",
    label: "ISFP",
  },
  {
    value: "infp",
    label: "INFP",
  },
  {
    value: "isfj",
    label: "ISFJ",
  },
  {
    value: "enfp",
    label: "ENFP",
  },
  {
    value: "intp",
    label: "INTP",
  },
  {
    value: "entj",
    label: "ENTJ",
  },
  {
    value: "estj",
    label: "ESTJ",
  },
];

interface Props {
  value: string;
  setValue: (val: string) => void;
}
export const MBTISelector: React.FC<Props> = (props) => {
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {props.value
            ? frameworks.find((framework) => framework.value === props.value)
                ?.label
            : "Select MBTI..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty className="bg-primary text-primary-foreground">
            No framework found.
          </CommandEmpty>
          <CommandGroup className="bg-primary text-primary-foreground">
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  props.setValue(
                    currentValue == props.value ? "" : currentValue,
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    props.value === framework.value
                      ? "opacity-100"
                      : "opacity-0",
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
