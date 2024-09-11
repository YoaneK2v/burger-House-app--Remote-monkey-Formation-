import React from "react";
import Container from "../../elements/container";
import BackgroundImage from "../../../medias/images/background/bg-footer.jpg";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Logo from "../../../medias/svg/Logo-burger-house-white.svg";
import IconeInsta from "../../../medias/svg/instagram-brands-solid.svg";
import IconeFacebook from "../../../medias/svg/facebook-f-brands-solid.svg";
import IconeTwitter from "../../../medias/svg/x-twitter-brands-solid.svg";
import IconeWhatsapp from "../../../medias/svg/whatsapp-brands-solid.svg";

export default function Footer() {
  return (
    <Container>
      <div className="relative mb-20 p-5 text-white ">
        <img
          src={BackgroundImage}
          alt="plan de travail de cuisine ou l'on conocit un hamburger"
          className="bg-gray-800 absolute top-0 left-0 w-full h-full object-cover Z-0"
        />
        <div className="relative  grid grid-cols-2 z-10">
          <div className=" w-full p-5 mt-20 mb-28">
            {/* contenue left */}
            <img src={Logo} alt="le logo burger house" className="w-2/3" />
            <p className="mt-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              aliquam impedit quos eligendi! Nihil autem earum minima ipsum
              quae. Similique.
            </p>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center">
            {/* contenue right */}
            <div className="flex  items-center">
              <MapPinIcon className="h-10  w-10 mr-5" />
              <span className="uppercase font-extrabold text-lg tracking-tighter">
                15 place bellecour, 6900 lyon
              </span>
            </div>
            <div className="flex  items-center mt-5">
              <EnvelopeIcon className="h-10  w-10 mr-5" />
              <span className="uppercase font-extrabold text-lg tracking-tighter">
                info@burger-house.com
              </span>
            </div>
          </div>
        </div>
        <div className="relative   z-10 flex items-center justify-between">
          <div className="uppercase font-extrabold text-sm tracking-tighter ">
            Burger House 2021, All rights reserved
          </div>
          <div className="flex">
            <div className="group">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  src={IconeInsta}
                  alt=""
                  className="w-9 h-9 mr-2 bg-white group-hover:bg-primary rounded-full p-1 "
                />{" "}
              </a>
            </div>
            <div className="group">
              <a href="/#" target="_blank" rel="noreferrer">
                <img
                  src={IconeFacebook}
                  alt=""
                  className="w-9 h-9 mr-2 bg-white rounded-full p-1 group-hover:bg-primary"
                />
              </a>
            </div>
            <div className="group">
              <a href="/#" target="_blank" rel="noreferrer">
                <img
                  src={IconeTwitter}
                  alt=""
                  className="w-9 h-9 mr-2 bg-white rounded-full p-1 group-hover:bg-primary"
                />
              </a>
            </div>
            <div className="group">
              <a href="/#" target="_blank" rel="noreferrer">
                <img
                  src={IconeWhatsapp}
                  alt=""
                  className="w-9 h-9 bg-white rounded-full p-1 group-hover:bg-primary"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
