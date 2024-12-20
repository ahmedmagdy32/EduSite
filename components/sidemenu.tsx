"use client";
import { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import * as React from "react";
import {
  LayoutDashboard,
  Users,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MenuItem {
  icon: React.ElementType;
  label: string;
  items?: { label: string; href: string }[];
}

const menuItems: MenuItem[] = [
  {
    icon: LayoutDashboard,
    label: "علوم القرآن",
    items: [
      { label: "تفسير", href: "/lessons/tafseer" },
      { label: "تزكيه و آداب", href: "/lessons/tazkiah" },
      { label: "وعظ", href: "/lessons/waaz" },
    ],
  },
  {
    icon: Users,
    label: "علوم الحديث",
    items: [
      { label: "حديث", href: "/lessons/hadeth" },
      { label: "فقه", href: "/lessons/fekh" },
      { label: "سيره", href: "/lessons/seerah" },
    ],
  },
  {
    icon: Settings,
    label: "تاريخ",
    items: [
      { label: "تاريخ اسلامي", href: "/lessons/tareekh" },
      { label: "Security", href: "#security" },
      { label: "Billing", href: "#billing" },
    ],
  },
  {
    icon: Settings,
    label: "Settings",
    items: [
      { label: "General", href: "#general" },
      { label: "Security", href: "#security" },
      { label: "Billing", href: "#billing" },
    ],
  },
  {
    icon: Settings,
    label: "Settings",
    items: [
      { label: "General", href: "#general" },
      { label: "Security", href: "#security" },
      { label: "Billing", href: "#billing" },
    ],
  },
  {
    icon: Settings,
    label: "Settings",
    items: [
      { label: "General", href: "#general" },
      { label: "Security", href: "#security" },
      { label: "Billing", href: "#billing" },
    ],
  },
  {
    icon: Settings,
    label: "Settings",
    items: [
      { label: "General", href: "#general" },
      { label: "Security", href: "#security" },
      { label: "Billing", href: "#billing" },
    ],
  },
  { icon: HelpCircle, label: "Help" },
  { icon: LogOut, label: "Logout" },
];

export default function Sidemenu() {
  const [show, setShow] = useState(true);
  return (
    <div className='relative'>
      <button
        className=' absolute top-0 -right-4'
        onClick={() => {
          setShow((show) => !show);
        }}
      >
        <LuMenuSquare className='text-2xl text-white' />
      </button>
      <div
        className={
          show
            ? "w-64 min-h-screen bg-gray-100 text-gray-800 transition-all duration-500 ease-in-out mr-2"
            : "w-0 min-h-screen bg-gray-100 text-gray-800 opacity-0 invisible transition-all duration-500 ease-in-out "
        }
      >
        <div className='p-4 relative'>
          <h1 className='text-2xl font-bold mb-4'>Category</h1>
          <Accordion type='multiple' className='w-full'>
            {menuItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                {item.items ? (
                  <AccordionTrigger className='hover:no-underline hover:bg-gray-200'>
                    <MenuItemContent item={item} />
                  </AccordionTrigger>
                ) : (
                  <Button
                    variant='ghost'
                    className='w-full justify-start py-6 px-2'
                  >
                    <MenuItemContent item={item} />
                  </Button>
                )}
                {item.items && (
                  <AccordionContent>
                    <div className='pl-9 py-2'>
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className='block py-2 px-2 text-sm hover:bg-gray-200 rounded'
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

function MenuItemContent({ item }: { item: MenuItem }) {
  const Icon = item.icon;
  return (
    <div className='flex items-center w-full'>
      <Icon className='mr-2 h-4 w-4' />
      <span>{item.label}</span>
    </div>
  );
}
