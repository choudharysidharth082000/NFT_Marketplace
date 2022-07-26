import React from "react";
import Navbar from "../components/Navbar";
import NFTCard from "../components/NFTCard";
import SortIcon from "@mui/icons-material/Sort";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import WindowIcon from "@mui/icons-material/Window";
const nftItemsArray = [
  {
    name: "#2312",
    image:
      "https://lh3.googleusercontent.com/iJptU9GFxi7xwIT-6tn2poNecdoTU8m-R7-M4UB93qTM1e6thQVi8kZAabG24NY1wOhnrPFnjNI15w5kswcaux204smjgR-orZaF=w287",
  },
  {
    name: "#2313",
    image:
      "https://lh3.googleusercontent.com/LMNkj3BqUjLZRtd80IIsmhl4zBQeOs-f4E1qZE61XdZd3zbghJrTiv5IOUAlmzVHKC38rDodji7tHBVPDey6gypep0-NMx8T5FzrCA=w287",
  },
  {
    name: "#2314",
    image:
      "https://img.seadn.io/files/b6f594010c5495fa1322009ee8e3e26f.png?fit=max&auto=format&h=720&w=720",
  },
  {
    name: "#2315",
    image:
      "https://img.seadn.io/files/2afa8322da11642d1d7201f7840e221e.png?fit=max&auto=format&h=720&w=720",
  },
];

const ListNNFT = () => {
  return (
    <div className="List">
      <Navbar />
      <div className="filter w-100 p-4 flex justify-between items-center bg-[#303339] outline-none-border-none">
        <div className="leftLogo p-4 text-white">
          <SortIcon className="cursor-pointer" />
        </div>
        <div className="rightContainor flex justify-center items-center px-3">
          <div className="sortSearch mx-6">
            <input
              type="text"
              placeholder="Sort By"
              className="py-2 px-3 rounded-md border border-gray-500 outline-none text-gray-300 bg-transparent"
            />
          </div>
          <div className="sections flex ">
            <div className="containorIconFirst text-gray-600 p-2 border border-white rounded-l-lg bg-gray-200">
              <WindowIcon />
            </div>
            <div className="containorIconSecond text-gray-200 p-2 border border-gray-300 rounded-r-lg">
              <ViewModuleIcon />
            </div>
          </div>
        </div>
      </div>
      {/* Listing all the Nfts */}
      <div className="containorListing w-full p-4 flex flex-wrap justify-center items-center bg-black">
        {nftItemsArray.map((nftItem, id) => (
          <NFTCard key={id} nftItem={nftItem} title="Bored Ape NFT" />
        ))}
        {nftItemsArray.map((nftItem, id) => (
          <NFTCard key={id} nftItem={nftItem} title="Bored Ape NFT" />
        ))}
      </div>
    </div>
  );
};

export default ListNNFT;
