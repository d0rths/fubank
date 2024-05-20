"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const accounts = [
  {
    value: "0",
    label: "Основний",
  },
  {
    value: "1",
    label: "Зарплатний",
  },
  {
    value: "2",
    label: "Пенсійний",
  },
];

interface AccountsComboboxProps {
  onSelect: (value: string) => void;
}

export function AccountsCombobox({ onSelect }: AccountsComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? accounts.find((account) => account.value === value)?.label
            : "Обрати рахунок..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {accounts.map((account) => (
              <CommandList key={account.value}>
                <CommandItem
                  onSelect={() => {
                    const selectedValue =
                      account.value === value ? "" : account.value;
                    setValue(selectedValue);
                    setOpen(false);
                    onSelect(selectedValue);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === account.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {account.label}
                </CommandItem>
              </CommandList>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
