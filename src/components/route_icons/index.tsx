import { RouteIconsProps } from "./routeIcons";
import { IconsComponent } from "@/constants/icons";

export const TabBarIcon = ({ focused, color, size, name }: RouteIconsProps) => {

    const IconComponent = IconsComponent[name as keyof typeof IconsComponent];

    return <IconComponent focused={focused} color={color} size={size} name={name} />;
}