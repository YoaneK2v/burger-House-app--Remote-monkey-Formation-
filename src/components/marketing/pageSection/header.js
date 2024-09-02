import React from "react";
import Logo from "../../../medias/svg/Logo-burger-house.svg";
import Icon from "../../../medias/svg/ico-bag-clickAndCollect.svg";
import Button from "../../elements/button";

export default function Header() {
  return (
    <div className="relative z-10 flex items-center justify-between py-10">
      <div className="h-20 w-full">
        <img src={Logo} alt="Burger House app " className="w-64" />
      </div>
      <div className="w-full text-secondary">
        <div className="flex items-center justify-end">
          <img src={Icon} alt="" className="w-5 h-5 mr-1" />
          <span>Commandez votre repas en ligne</span>
        </div>
        <div className="flex items-center justify-end mt-2">
          <Button className="mr-3 tracking-widest">inscription</Button>
          <Button className="tracking-widest" color="secondary">
            connection
          </Button>
        </div>
      </div>
    </div>
  );
}
