"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { useEffect, useState } from "react";
export default function LoginClient() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      router.back();
    }
  }, [open, router]);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-2xl tracking-[-3px] zxczxc">
            Login
          </DrawerTitle>
          <DrawerDescription>
            Enter your credentials to access your account.
          </DrawerDescription>
        </DrawerHeader>
        dsd
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          sds
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
