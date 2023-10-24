"use client";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";

export default function ModeSwitch() {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <Switch
                onCheckedChange={() =>
                    setTheme(theme == "light" ? "dark" : "light")
                }
            />
        </div>
    );
}
