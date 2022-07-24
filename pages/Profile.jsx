import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import { useWeb3 } from "@3rdweb/hooks";
// import { client } from "../../lib/sanityClient";
// import { ThirdwebSDK } from "@3rdweb/sdk";
// import Header from "../../components/Header";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import NFTCard from "../components/NFTCard";

const style = {
  bannerImageContainer: `h-[24vh] w-screen overflow-hidden flex justify-center items-center`,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-white`,
  endRow: `w-full flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
};

const nftItem = 
{
    name: "#2312",
    image: "https://img.seadn.io/files/c9f5411232b6c2bb6c15022298fde50d.png?fit=max&auto=format&h=720&w=720"
}
const nftItemsArray = 
[
    {
        name: "#2312",
        image: "https://img.seadn.io/files/c9f5411232b6c2bb6c15022298fde50d.png?fit=max&auto=format&h=720&w=720"

    },
    {
        name: "#2313",
        image: "https://img.seadn.io/files/07e5cfcfeabc324b17b35a1a89f5d32a.png?fit=max&auto=format&h=720&w=720"

    },
    {
        name: "#2314",
        image: "https://img.seadn.io/files/b6f594010c5495fa1322009ee8e3e26f.png?fit=max&auto=format&h=720&w=720"

    },
    {
        name: "#2315",
        image: "https://img.seadn.io/files/2afa8322da11642d1d7201f7840e221e.png?fit=max&auto=format&h=720&w=720"

    },
    // {
    //     name: "#2316",
    //     image: "https://img.seadn.io/files/2afa8322da11642d1d7201f7840e221e.png?fit=max&auto=format&h=720&w=720"

    // }
]

const Collection = () => {
  return (
    <div className="overflow-hidden bg-[#3b3d42]">
      {/* <Header /> */}
      <Navbar />
      <div className={style.bannerImageContainer}>
        <img
          className={style.bannerImage}
          src="https://lh3.googleusercontent.com/PjfRHGbEICydusUW1ubKBWWSyOAiIDcCpuO3MyORv4qwzZNy3MQVkQRWbc_bP3uCHTGuf3cpsIIXrXf6v-FThfuOIUu0i61kp2_r14Q=h600"
          alt="banner"
        />
      </div>
      <div className={style.infoContainer}>
        <div className={style.midRow}>
          <img
            className={style.profileImg}
            src="data:image/png;base64,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"
            alt="profile image"
          />
        </div>
        <div className={style.endRow}>
          <div className={style.socialIconsContainer}>
            <div className={style.socialIconsWrapper}>
              <div className={style.socialIconsContent}>
                <div className={style.socialIcon}>
                  <CgWebsite />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineInstagram />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineTwitter />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.title}>Bored Ape Yacht Club</div>
        </div>
        <div className={style.midRow}>
          <div className={style.createdBy}>
            Created by{" "}
            <span className="text-[#2081e2]">Sidharth Choudhary</span>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.statsContainer}>
            <div className={style.collectionStat}>
              <div className={style.statValue}>10</div>
              <div className={style.statName}>items</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                72
              </div>
              <div className={style.statName}>owners</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6W00UtQ3fAOw3HNRM64_C9dz1x_1noaQ5hOhW4M&s"
                  alt="eth"
                  className={style.ethLogo}
                />
                23
              </div>
              <div className={style.statName}>floor price</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src="https://w7.pngwing.com/pngs/368/176/png-transparent-ethereum-cryptocurrency-blockchain-bitcoin-logo-bitcoin-angle-triangle-logo-thumbnail.png"
                  alt="eth"
                  className={style.ethLogo}
                />
                5k
              </div>
              <div className={style.statName}>volume traded</div>
            </div>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.description}>The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.</div>
        </div>
      </div>
      <div className="flex flex-wrap ">
      {nftItemsArray.map((nftItem, id) => (
          <NFTCard
            key={id}
            nftItem={nftItem}
            title="Bored Ape NFT"
          />
        ))}
       
      </div>
      </div>
    
  );
};

export default Collection;
