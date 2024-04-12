"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Dashboard as DashboardIcon } from "@mui/icons-material";
import Link from "next/link";

export default function Dashboard() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-10">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="dashboard">
              <DashboardIcon />
              <Button variant="ghost">Dashboard</Button>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="clientes">
              <Button variant="ghost">Clientes</Button>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="pedidos">
              <Button variant="ghost">Pedidos</Button>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="fiados">
              <Button variant="ghost">Fiados</Button>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
