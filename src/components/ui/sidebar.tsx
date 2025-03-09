import * as React from "react";
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
import { Button } from "./button";
import { Menu } from "lucide-react";

export function Sidebar({ title = "Menu", children, ...props }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent title={title} {...props}>
        {children}
      </DialogContent>
    </Dialog>
  );
}