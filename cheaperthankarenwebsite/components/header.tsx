"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "AI Email Drafter", href: "/ai-email-drafter" },
  { 
    name: "About", 
    href: "/about",
    dropdown: [
      { name: "About", href: "/about" },
      { name: "Our Story", href: "/our-story" },
      { name: "FAQ", href: "/faq" },
    ]
  },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              Cheaper<span className="text-indigo-600">ThanKaren</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {dropdownOpen && (
                      <>
                        {/* Invisible bridge to prevent dropdown from closing */}
                        <div className="absolute top-full left-0 w-48 h-2 bg-transparent"></div>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
          {
            <Button variant="outline" asChild>
              <Link href="https://cheaperthankaren.productlift.dev/">Support</Link>
            </Button>
            }
            <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link href="/ai-email-drafter">Get Started</Link>
            </Button>
          </div>

        

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4">
                  <Link href="/" className="text-xl font-bold text-gray-900" onClick={() => setIsOpen(false)}>
                    Cheaper<span className="text-indigo-600">ThanKaren</span>
                  </Link>
                </div>

                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className="space-y-2">
                          <div className="text-gray-600 font-medium py-2 flex items-center">
                            {item.name}
                            <ChevronDown className="ml-1 h-4 w-4" />
                          </div>
                          <div className="pl-4 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block text-gray-500 hover:text-gray-900 transition-colors duration-200 py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-auto pb-6 space-y-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://cheaperthankaren.productlift.dev/" onClick={() => setIsOpen(false)}>
                      Support
                    </Link>
                  </Button>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
                    <Link href="/ai-email-drafter" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}