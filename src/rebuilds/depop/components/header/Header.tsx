import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "../button/Button";
import Dropdown, { DropdownContent, DropdownTrigger } from "../dropdown/Dropdown";
import { Input } from "../input/Input";
import Logo from "../logo/Logo";

const ActionButton = ({ children, className, color, ...props }: { children: React.ReactNode, className?: string, color?: "filled" | "outlined" | "text" }) => (
  <Button {...props} className={`${className || ''}`} color={color}>{children}</Button>
)

const DropdownButton = ({ children, className, ...props }: { children: React.ReactNode, className?: string }) => (
  <Button {...props} className={`font-semibold! px-3! py-4! hover:text-white! hover:bg-black! group-[.active]:bg-black! group-[.active]:text-white! ${className || ''}`} color="text" size="large">{children}</Button>
)

const DropdownContentWrapper = ({ children, name }: { children: React.ReactNode, name: string }) => (
  <DropdownContent name={name} className="bg-gray-100 px-8 py-4">
    {children}
  </DropdownContent>
)

const sections = ["Women", "Men", "Kids", "Brands", "Trending"];

export default function Header() {
  return (
    <header className="w-full z-10">
      <nav className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
        <Logo />
        <Input />
        <div className="flex items-center gap-2">
          <Button title="Favorites" color="text" className="p-0! self-stretch! aspect-square! min-w-0! px-0.5!"><Heart /></Button>
          <Button title="Basket" color="text" className="p-0! self-stretch! aspect-square! min-w-0! px-0.5!"><ShoppingBag /></Button>
          <ActionButton>Sell now</ActionButton>
          <ActionButton color="outlined">Sign up</ActionButton>
          <ActionButton color="text">Log in</ActionButton>
        </div>
      </nav>
      <nav className="">
        <div className="relative px-4">
          <Dropdown className="inline-block">
            <div className="flex items-center">
              {
                sections.map(section => (
                  <DropdownTrigger key={section} name={section.toLowerCase()}>
                    <DropdownButton>{section}</DropdownButton>
                  </DropdownTrigger>
                ))
              }
              <DropdownTrigger name="sale">
                <DropdownButton className="text-red-600! hover:text-white! hover:bg-red-600!">Sale</DropdownButton>
              </DropdownTrigger>
            </div>
            <div className="absolute top-full left-0 w-full">
              <DropdownContentWrapper name="women">
                <h3 className="font-bold mb-2">New in Women</h3>
                <ul>
                  <li>Clothing</li>
                  <li>Accessories</li>
                  <li>Shoes</li>
                </ul>
              </DropdownContentWrapper>
              <DropdownContentWrapper name="men">
                <h3 className="font-bold mb-2">New in Men</h3>
                <ul>
                  <li>Clothing</li>
                  <li>Accessories</li>
                  <li>Shoes</li>
                </ul>
              </DropdownContentWrapper>
              <DropdownContentWrapper name="kids">
                <h3 className="font-bold mb-2">New in Kids</h3>
                <ul>
                  <li>Clothing</li>
                  <li>Accessories</li>
                  <li>Shoes</li>
                </ul>
              </DropdownContentWrapper>
            </div>
          </Dropdown>
        </div>
      </nav>
    </header>
  );
}
