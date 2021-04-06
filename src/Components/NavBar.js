import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Input,
  Button
} from 'reactstrap';
import { SiShopify } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { BsBookmarksFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';



const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/"><SiShopify className="mr-2" /><b><i>My Shopping Site</i></b></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Fashion
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://www.myntra.com/shop/men" target="_blank">
                  <i> Men </i>
                </DropdownItem>
                <DropdownItem href="https://www.myntra.com/shop/women" target="_blank">
                  <i> Women </i>
                </DropdownItem>
                <DropdownItem href="https://www.myntra.com/shop/kids" target="_blank">
                  <i> Kid </i>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Electronics
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://www.amazon.in/s?k=mobile&ref=nb_sb_noss_2" target="_blank">
                  <i> Mobile </i>
                </DropdownItem>
                <DropdownItem href="https://www.amazon.in/s?k=mobile+accessories&ref=nb_sb_noss_2" target="_blank">
                  <i> Mobile Accessories </i>
                </DropdownItem>
                <DropdownItem href="https://www.amazon.in/s?k=laptop&ref=nb_sb_noss_2" target="_blank">
                  <i>Laptop</i>
                </DropdownItem>
                <DropdownItem href="https://www.amazon.in/s?k=speaker&crid=15EG6RFHLTTKJ&sprefix=spea%2Caps%2C-1&ref=nb_sb_noss_2" target="_blank">
                  <i> Speakers </i>
                </DropdownItem>
                <DropdownItem href="https://www.amazon.in/s?k=computer+accessories&crid=I97QHL4TD20W&sprefix=computer+acc%2Caps%2C392&ref=nb_sb_ss_ts-a-p_1_12" target="_blank">
                  <i> Computer Accessories </i>
                </DropdownItem>
                <DropdownItem href="https://www.amazon.in/s?k=camera&ref=nb_sb_noss_1" target="_blank">
                  <i>  Camera </i>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                TVs and Appliances
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://www.amazon.in/s?k=television&ref=nb_sb_noss_2" target="_blank">
                  <i> Television </i>
                </DropdownItem>
                <DropdownItem href="https://www.amazon.in/s?k=washing+machine&crid=1G5HJMEMCTVKL&sprefix=washing+ma%2Caps%2C476&ref=nb_sb_noss_2" target="_blank">
                  <i> Washing Machine </i>
                </DropdownItem>
                <DropdownItem href="https://www.amazon.in/s?k=kichen+applicece&i=kitchen&crid=20EBB0E1BPXYO&sprefix=kittchen+app%2Ckitchen%2C370&ref=nb_sb_ss_sc_1_12" target="_blank">
                  <i> Kitchen Appliances </i>
                </DropdownItem>
                <DropdownItem href="https://www.amazon.in/s?k=kichen+applicece&i=kitchen&crid=20EBB0E1BPXYO&sprefix=kittchen+app%2Ckitchen%2C370&ref=nb_sb_ss_sc_1_12" target="_blank">
                  <i> Air Conditioners </i>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Home and Furniture
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://www.amazon.in/s?k=living+room+furniture&i=kitchen&crid=3B81F4L1C8OB8&sprefix=living+room+fur%2Ckitchen%2C384&ref=nb_sb_ss_ts-a-p_1_15" target="_blank">
                  <i> Living Room Furniture </i>
                </DropdownItem>
                <DropdownItem href="https://www.amazon.in/s?k=bed+room+fur&i=kitchen&ref=nb_sb_noss_2" target="_blank">
                  <i> Bed Room Furniture</i>
                </DropdownItem>
                <DropdownItem href="https://www.amazon.in/s?k=home+decor+items&i=kitchen&crid=CHQ26EZRSADY&sprefix=home+decor%2Ckitchen%2C383&ref=nb_sb_ss_ts-a-p_1_10" target="_blank">
                  <i> Home Decor </i>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://www.myntra.com/shop/offers" target="_blank">Offer Zone</NavLink>
            </NavItem>
            <Form className="d-flex">
              <Input className="form-control ml-5" style={{ width: "350px" }} type="search" placeholder="Search for products,brands or more... " aria-label="Search" />
              <Button className="btn btn-outline-warning ml-5" type="submit">Search</Button>
            </Form>
            <NavbarBrand><CgProfile className="ml-4" /> <BsBookmarksFill className="ml-4" /> <AiOutlineShoppingCart className="ml-4" /></NavbarBrand>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );

};

export default NavBar;
