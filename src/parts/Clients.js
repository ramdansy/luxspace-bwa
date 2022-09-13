import React from "react";

import logoAdobe from "../assets/images/content/logo-adobe.svg";
import logoIkea from "../assets/images/content/logo-ikea.svg";
import logoHermanmiller from "../assets/images/content/logo-hermanmiller.svg";
import logoMiele from "../assets/images/content/logo-miele.svg";

export default function Clients() {
  return (
    <section className="container mx-auto">
      <div className="flex justify-center flex-wrap">
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={logoAdobe} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={logoIkea} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={logoHermanmiller} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={logoMiele} alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
