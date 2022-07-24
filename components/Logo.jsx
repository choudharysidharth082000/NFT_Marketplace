import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Logo = () => {
  return (
    <div className="containorLogo h-14 flex justify-center items-center">
        <div className="containorImage h-11 w-11 flex justify-center items-center">
          <img
            src="https://static.opensea.io/Logos/opensea-pride.svg"
            className="bg-contain"
            alt="logo"
          />
        </div>
        <h2 className="px-2 font-extrabold text-white text-xl font-sans">OpenSea</h2>
      </div>
  )
}

export default Logo