import React from "react";
import Container from "../../elements/container";
import HeadingTitles from "../../elements/displayTitles/headingTitles";
import Heading from "../../elements/displayTitles/heading";
import Button from "../../elements/button";
import Product1 from "../../../medias/images/products/Product-1.jpg";
import Product2 from "../../../medias/images/products/Product-2.jpg";
import Product3 from "../../../medias/images/products/Product-3.jpg";

export default function Products() {
  return (
    <Container>
      <HeadingTitles>Toujours des delicieux burgers</HeadingTitles>
      <Heading
        theme="secondary"
        alignement="center"
        className="my-5 text-center"
      >
        Choisissez et Savourez
      </Heading>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at magna
        et dui vulputate sagittis a eget mi. Nam eu lacus vel lorem vehicula
        faucibus. Etiam eu condimentum magna. Nulla facilisi. Curabitur molestie
        sed orci.
      </p>
      <div className="grid lg:grid-cols-3 gap-x-1 mb-20 mt-10">
        <div className="w-full md:w-2/3 lg:w-full h-full mx-auto">
          <div className="relative w-full h-72">
            <img
              src={Product1}
              alt=""
              className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" className="my-5">
              Lorem ipsum dolor
            </Heading>
            <p className="text-center">
              Lorem ipsum dolor is simply text for designer and developper
            </p>
            <Button color="danger" className="font-secondary mb-10 lg:mb-0">
              Commandez
            </Button>
          </div>
        </div>

        <div className="w-full md:w-2/3 lg:w-full h-full mx-auto">
          <div className="relative w-full h-72 ">
            <img
              src={Product2}
              alt=""
              className="bg-primary absolute top-0 left-0  w-full h-full object-cover z-0"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" className="my-5">
              Lorem ipsum dolor
            </Heading>
            <p className="text-center">
              Lorem ipsum dolor is simply text for designer and developper
            </p>
            <Button color="danger" className="font-secondary mb-10 lg:mb-0">
              Commandez
            </Button>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-full h-full mx-auto">
          <div className="relative w-full h-72">
            <img
              src={Product3}
              alt=""
              className="bg-primary absolute top-0 left-0  w-full h-full object-cover z-0"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" className="my-5">
              Lorem ipsum dolor
            </Heading>
            <p className="text-center">
              Lorem ipsum dolor is simply text for designer and developper
            </p>
            <Button color="danger" className="font-secondary lg:mb-0">
              Commandez
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
