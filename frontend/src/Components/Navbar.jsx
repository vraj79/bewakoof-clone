import React, { useEffect } from "react";
import { useState } from "react";
import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineMobile, AiOutlineHeart } from "react-icons/ai";
import { BsSearch, BsBag } from "react-icons/bs";
import { SlUser } from "react-icons/sl";
import { HiMenuAlt1 } from "react-icons/hi";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTokenFromCookies,
  removeTokenFromCookies,
  isTokenExpired,
} from "../utils/token.utils";
import { FaShoppingCart } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

import { getTotalCartProduct } from "../Redux/Cart/action"
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [count, setCount] = useState(0);

  const { isError, msg, isAuth, isLoading } = useSelector(
    (store) => store.authReducer
  );

  const { totalCartProduct } = useSelector((store) => store.cartReducer);
 console.log(totalCartProduct)
  
const [total,setTotal]=useState(totalCartProduct  || 0)
  const token = getTokenFromCookies();

  const toHome = () => {
    navigate("/");
  };

  const onMenPage = () => {
    navigate("/men");
  };
  const onWomenPage = () => {
    navigate("/women");
  };

  const onLoginPage = () => {
    navigate("/user/login");
  };

  const onCartPage = () => {
    navigate("/cart");
  };

  const onWishlistPage = () => {
    navigate("/wishlist");
  };

  const onHomePage = () => {
    navigate("/");
  };

  const onSigupPage = () => {
    navigate("/user/register");
  };

  const handleLogout = () => {
    removeTokenFromCookies();
    navigate("/user/login");
  };

  // useEffect(() => {
  //   // const token = getTokenFromCookies();
  //   if (isTokenExpired(token)) {
  //     handleLogout();
  //   }
  // }, []);

  return (
    <>
      <nav>
        <div id="nav-top">
          <div id="top-sec">
            <div id="top-1">
              <ul>
                <li>Offers</li>
                <li>Fanbook</li>
                <li>
                  {" "}
                  <AiOutlineMobile /> Download App
                </li>
                <li>TriBe Membership</li>
              </ul>
            </div>
            <div id="top-2">
              <ul>
                <li>Contact Us</li>
                <li>Track Order</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="nav-bottom">
          <div id="nav-bottom-in">
            <div id="nav-bottom-in-1">
              <div id="logo" onClick={onHomePage}>
                <img
                  src="https://www.linkpicture.com/q/hrth.png"
                  alt="befour.com"
                />
              </div>
            </div>
            <div id="nav-bottom-in-2">
              <ul>
                <li onClick={onMenPage}>MEN</li>
                <li onClick={onWomenPage}>WOMEN</li>
              </ul>
            </div>
            <div id="nav-bottom-in-3">
              <div id="search">
                <p>
                  <BsSearch />
                </p>
                <input
                  type="text"
                  placeholder="     Search by Product,category or collection"
                />
              </div>
              <div id="func">
                <ul>
                  {/* <li onClick={onLoginPage}>Login</li> */}
                  <li onClick={onWishlistPage}>
                    <AiOutlineHeart style={{ fontSize: "25px" }} />
                  </li>
                  <li className="cart-icon" onClick={onCartPage}>
                    <FaShoppingCart className="icon-grey" />
                    {token && (
                      <span className="badge">{totalCartProduct}</span>
                    )}
                  </li>
                  <li>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<SlUser />}
                        variant="outline"
                      ></MenuButton>
                      <MenuList>
                        {!token && (
                          <MenuItem onClick={onSigupPage}>Signup</MenuItem>
                        )}

                        {!token && (
                          <MenuItem onClick={onLoginPage}>Login</MenuItem>
                        )}
                        {token && <MenuItem>My Order </MenuItem>}
                        {token && <MenuItem>My Wishlist </MenuItem>}
                        {token && <MenuItem>My Cart </MenuItem>}

                        <MenuDivider />
                        <MenuGroup title="Not For User">
                          {/* <MenuItem>Become Seller</MenuItem> */}
                          <MenuItem>Admin Login</MenuItem>
                        </MenuGroup>
                        {token && (
                          <Button variant={"solid"} onClick={handleLogout}>
                            Logout
                          </Button>
                        )}
                      </MenuList>
                    </Menu>
                  </li>
                </ul>
              </div>
            </div>
            <div id="menu-btn">
              <HiMenuAlt1 onClick={onToggle} />
            </div>
            {isOpen && (
              <div id="sideMenu">
                <ul id="sideList">
                  <li>
                    <Link to="/men">MEN</Link>
                  </li>
                  <li>
                    <Link to="/women">WOMEN</Link>
                  </li>
                  <li>
                    <Link to="/wishlist">WISHLIST</Link>
                  </li>
                  <li>
                    <Link to="/cart">CART</Link>
                  </li>
                  <li>
                    <Link to="/profile">PROFILE</Link>
                  </li>
                  <li>
                    <Link to="/user/login">LOGIN</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
