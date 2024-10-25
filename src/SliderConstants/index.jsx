import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxRocket,
} from "react-icons/rx";

import ElectricRacing from "../../images/electricRacing.png";
import Stonks from "../../images/stock.png";
import DootCare from "../../images/DootCare.png";
import Drone from "../../images/badpiggy.png";

export const ServiceData = [
  {
    icon: RxRocket,
    title: "Stock Application",
    content:
      "A stock portfolio application using the API Alpha Vantage Client to trade and view trends in stocks.",
    backgroundImage: Stonks,
    href: "",
    target: ""
  },
  {
    icon: RxDesktop,
    title: "NER Electric Racing",
    content: "A Northeastern club where I designed the features and layout of their calendar page.",
    backgroundImage: ElectricRacing,
    href: "https://finishlinebyner.com/",
    target: "_blank"
  },
  {
    icon: RxPencil2,
    title: "Healthcare Data Automation",
    content:
      "Automated a patient data collection system for a local healtcare company.",
    backgroundImage: DootCare,
    href: "https://ehr2.myehr123.com/amb/default.aspx",
    target:"_blank"
  },
  {
    icon: RxCrop,
    title: "Drone Vision Tracking",
    content: "A drone application using computer vision to allow the drone to follow a user.",
    backgroundImage: Drone,
    href: "",
    target: ""
  },
];
