import React from "react";
import Illustration from "../../../medias/images/background/bg-food.jpg";
import Container from "../../elements/container";
import Header from "./header";
import Products from "../../../medias/images/heroTop/burger-hero-top.png";
import Button from "../../elements/button";

export default function HeroTop() {
  return (
    <div className="bg-primary w-full over">
      <div
        className="bg-repeat w-full h-full pb-10 md:pb-20"
        style={{ backgroundImage: `url(${Illustration})` }}
      >
        <Container>
          <Header />
          <div className="relative mt-10 md:mt-24 w-full">
            <img
              src={Products}
              className="hidden lg:block absolute z-0 lg:-top-56 right-0 "
              style={{ width: `502px` }}
              alt="un menu hamberger avec frites avec coca"
            />

            <div className="hidden lg:block absolute right-72 top-40 bg-red-primary w-40 h-40 rounded-full p-2">
              <div className="w-full h-full rounded-full  text-white border-2 border-white border-dashed flex items-center justify-center">
                <div className="text-center">
                  <span className="block font-extrabold">
                    <span className="text-5xl">5</span>.49€
                  </span>
                  <span className="tracking-widest uppercase text-sm">
                    seulement
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 text-secondary uppercase text-left md:text-center lg:text-left">
              <h1 className="mb-4 font-semibold">
                C'est le moment de goûter au bon goût des hamburger
              </h1>
              <h2 className="font-secondary shadowTitleSecondary text-ellipsis">
                <span className="text-7xl md:text-8xl block">Burger</span>
                <span className="text-5xl md:text-6xl">House</span>
                <span className="block text-4xl  ml-0 sm:ml-3 sm:inline">
                  Click<span className="text-red-primary ">&</span>
                  collect
                </span>
              </h2>
            </div>
          </div>
          <Button
            className="mt-5 w-full lg:w-1/3"
            color="secondary"
            theme="big"
          >
            Crée un compte
          </Button>
        </Container>
      </div>
    </div>
  );
}
