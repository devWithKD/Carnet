"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GoSun, GoMoon } from "react-icons/go";
import { PiMoonThin, PiSunThin } from "react-icons/pi";

function ThemeSwitcher({
  variant,
  size,
  type,
}: {
  variant?: "default" | "ghost" | "outline" | "secondary";
  size?: number;
  type?: "default" | "thin";
}) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={size || 24}
        height={size || 24}
        sizes="24x24"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  if (resolvedTheme === "dark")
    return (
      <Button
        variant={variant ? variant : "outline"}
        size="icon"
        onClick={() => setTheme("light")}
      >
        {type == "default" ? (
          <GoSun size={size || 20} />
        ) : (
          <PiSunThin size={size || 20} />
        )}
      </Button>
    );
  if (resolvedTheme === "light")
    return (
      <Button variant="outline" size="icon" onClick={() => setTheme("dark")} className="bg-transparent border-none">
        {type == "default" ? (
          <GoMoon size={size || 20} />
        ) : (
          <PiMoonThin size={size || 20} />
        )}
      </Button>
    );
}

export default ThemeSwitcher;
