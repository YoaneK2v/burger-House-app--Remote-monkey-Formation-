import React from "react";
import Logo from "../../../medias/svg/Logo-burger-house.svg";
import Pictogramme from "../../../medias/svg/picto-burger-house.svg";
import Icon from "../../../medias/svg/ico-bag-clickAndCollect.svg";
import Button from "../../elements/button";

export default function Header() {
  return (
    <div className="relative z-10 flex items-center justify-between py-10">
      <div className="h-20 w-full flex items-center">
        <img
          src={Logo}
          alt="Burger House app "
          className="w-64 hidden md:block"
        />
        <img
          src={Pictogramme}
          alt="Burger House app "
          className="w-10 md:hidden"
        />
      </div>
      <div className="w-full text-secondary">
        <div className="items-center justify-end hidden md:flex">
          <img src={Icon} alt="" className="w-5 h-5 mr-1" />
          <span>Commandez votre repas en ligne</span>
        </div>
        <div className=" md:mt-2 flex items-center justify-end ">
          <Button className="mr-3 tracking-widest">inscription</Button>
          <Button className="tracking-widest" color="secondary">
            connection
          </Button>
        </div>
      </div>
    </div>
  );
}
