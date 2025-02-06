import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "My Story",
    "Portfolio",
    "Travel & Experiences",
    "Blog",
    "Contact",
   
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        
          <p className="font-bold text-myGreen">Atelier 17 </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
        
          <p className="font-bold text-myGreen">Atelier 17</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            My Story
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link aria-current="page" color="foreground" href="#">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Travel & Experiences
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
      
        <NavbarItem>
          <Button as={Link} className="bg-gradient-to-tr from-myGreen to-myRed text-white shadow-lg" href="#" variant="flat">
            Work with me
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
            //   color={
            //     index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
            //   }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

