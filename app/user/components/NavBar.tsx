'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Dashboard as DashboardIcon, Group as GroupIcon, DeliveryDining as DeliveryDiningIcon, MoneyOff as MoneyOffIcon } from "@mui/icons-material";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="space-y-2">
    <div className="flex justify-between mr-5 mt-2">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-10">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="dashboard">
                <Button variant="ghost">
                  <DashboardIcon />
                  Dashboard
                </Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="clients">
                <Button variant="ghost">
                  <GroupIcon />
                  Clientes
                </Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="delivery">
                <Button variant="ghost">
                  <DeliveryDiningIcon />
                  Pedidos
                </Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="debtor">
                <Button variant="ghost">
                  <MoneyOffIcon />
                  Fiados
                </Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Usuário" />
        <AvatarFallback>Usuário</AvatarFallback>
      </Avatar>
    </div>
      <Separator />
</div>
  );
}
