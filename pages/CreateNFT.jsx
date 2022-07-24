import React from "react";
import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import { Draggable, Droppable } from 'react-drag-and-drop'

const createNFT = () => {
  
  return (
    <div className="w-full h-screen">
      <Navbar authenticated={false} />
      <div className="middleContainor w-[60%] h-full m-auto">
        <div className="Header text-4xl font-sans font-semiBold w-full h-[18%] flex justify-start items-center px-4">
          <h1 className="font-sans text-5xl font-semibold">Create New Item</h1>
        </div>
        <div className="containorImage w-full h-[50%] flex justify-around border border-slate-500 flex-col">
          <div className="textArea px-4 font-sans">
            <div className="text-slate-500">
              <h1 className="font-semibold text-black font-sans text-lg">Image, Video, Audio, or 3D Model</h1>
              <p className="text-sm py-1">
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
              </p>
            </div>
          </div>
          <div className="imageArea w-56 h-52 mx-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
        
            
          </div>
        </div>
        <div className="formContent w-full my-10 p-4">
        <div className="contanorText py-4">
            <h1 className="font-semibold">Name</h1>
            <p className="text-sm">
            Name of the item
            </p>
          </div>
          <TextField
            id="standard-basic"
            label="Item name"
            variant="outlined"
            className="w-full py-2"
          />
          <div className="contanorText py-4">
           
            <p className="text-sm">
              OpenSea will include a link to this URL on this item's detail
              page, so that users can click to learn more about it. You are
              welcome to link to your own webpage with more details.
            </p>
          </div>
          <TextField
            id="standard-basic"
            label="External URL"
            variant="outlined"
            className="w-full py-2"
          />
          <div className="contanorText py-4">
            <h1 className="font-semibold">Description</h1>
            <p className="text-sm">
              The description will be included on the item's detail page
              underneath its image. Markdown syntax is supported.
            </p>
          </div>
          <TextField
            id="standard-basic"
            label="Description"
            variant="outlined"
            className="w-full py-2"
          />
          <div className="contanorText py-4">
            <h1 className="font-semibold">Author Name</h1>
            <p className="text-sm">
              The Author Name will be included in the NFT marketPlace and will
              be shown to all the users who wish to buy your NFT
            </p>
          </div>
          <TextField
            id="standard-basic"
            label="Author Name"
            variant="outlined"
            className="w-full py-2"
          />
          <button className="w-full py-4 my-10 rounded-md bg-blue-600 text-white transition-all hover:bg-blue-500">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
export default createNFT;
