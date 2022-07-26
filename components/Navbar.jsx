import React from "react";
import Link from "next/link";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import {useMoralis} from "react-moralis";
//components
import Logo from "./Logo"

const Navbar = (props) => {
  // const {isAuthenticated, user} = useMoralis();
  // const authenticate = () =>
  // {
  //   authenticate();
  // }
  return (
    <div className="Navbar flex justify-between items-center h-20 w-full bg-[#04111d] px-11">
      <Logo />
      <div className="searchBar w-[50%]">
        <input type="text" placeholder="Search items, collections and accounts"  className="w-full text-[#e6e8eb] placeholder:text-[#8a939b] bg-transparent py-2 px-2 rounded-md border border-slate-500 outline-none"/>
      </div>
      <div className="links flex justify-around items-center text-white">
        <Link href="/ListNNFT"><h1 className="px-2 font-medium cursor-pointer">Explore</h1></Link>
        <h1 className="px-2 font-medium cursor-pointer">Stats</h1>
        <h1 className="px-2 font-medium cursor-pointer">Resource</h1>
        <h1 className="px-2 font-medium cursor-pointer">Create</h1>
      </div>
      <AccountBalanceWalletIcon className="cursor-pointer text-white" />
      <Link href="/Profile"><a><AccountCircleIcon className="cursor-pointer text-white"/></a></Link>
    
    
    </div>
  );
};

export default Navbar;
