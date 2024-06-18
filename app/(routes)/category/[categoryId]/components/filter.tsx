"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

export function Filter({ data, name, valueKey }: FilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  function onClick(id: string) {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
      //valueKey can be colorId or sizeId
      //only one id for each valueKey
      //remove the valueKey in the query if it is the same as the selected value
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex gap-2 flex-wrap">
        {data.map((data) => (
          <div key={data.id} className="flex items-center justify-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === data.id && "bg-black text-white"
              )}
              onClick={() => onClick(data.id)}
            >
              {data.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
