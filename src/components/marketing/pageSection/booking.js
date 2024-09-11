import React from "react";
import Container from "../../elements/container";
import Assiete from "../../../medias/images/background/Assiette-burger-frites.png";
import Burger from "../../../medias/images/background/Burger.png";
import Sauce from "../../../medias/images/background/Sauce-pimente.png";
import Heading from "../../elements/displayTitles/heading";

export default function Booking() {
  return (
    <Container>
      <div className="relative mb-20">
        <img
          src={Burger}
          alt="Un hamberger"
          className="absolute -top-20 -left-36 z-10"
        />
        <img
          src={Sauce}
          alt="une Sauce pimenté"
          className="absolute bottom-0 left-0"
        />
        <img
          src={Assiete}
          alt="une assiete burger frite"
          className="absolute -bottom-52 -right-96"
        />
        <div className="max-w-3xl mx-auto px-10 py-20">
          <Heading variant="h3" alignement="center">
            Reservation
          </Heading>
          <Heading alignement="center" theme="secondary" className="mt-5">
            Reservez votre table
          </Heading>
          <form className="grid grid-cols-2 gap-x-7 gap-y-6 mt-20">
            <div>
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                name="name"
                id="name"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                placeholder="john Doe"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                placeholder="john.Doe@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="email">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div>
              <label htmlFor="email">Heure</label>
              <input
                type="time"
                name="time"
                id="time"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div>
              <label htmlFor="customer">Nombre de personne</label>
              <input
                type="text"
                name="customer"
                id="customer"
                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5"
                placeholder="5"
              />
            </div>
            <div>
              <label htmlFor="sendBooking" className="invisible">
                Trouvez une table
              </label>
              <input
                type="button"
                name="sendBooking"
                id="sendBooking"
                className="bg-red-primary hover:bg-red-primary-hover w-full text-white font-secondary tracking-widest uppercase py-5 rounded-md cursor-pointer  animate"
                value="Trouvez une table"
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
