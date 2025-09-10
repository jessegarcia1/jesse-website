import { RxCrop, RxDesktop, RxPencil2, RxRocket } from "react-icons/rx";

import ElectricRacing from "../../images/electricRacing.png";
import Stonks from "../../images/stock.png";
import DootCare from "../../images/reportwebsite.png";

export const ServiceData = [
  {
    icon: RxRocket,
    title: "Stock Application",
    content:
      "A stock portfolio application using the API Alpha Vantage Client to trade and view trends in stocks.",
    backgroundImage: Stonks,
    projectUrl: "https://www.alphavantage.co/",
  },
  {
    icon: RxDesktop,
    title: "NER Electric Racing",
    content:
      "A Northeastern club where I designed the features and layout of their calendar page.",
    backgroundImage: ElectricRacing,
    projectUrl: "https://finishlinebyner.com/",
  },
  {
    icon: RxPencil2,
    title: "Quick Care Report",
    content:
      "Full stack patient data collection website for a local medical practice.",
    backgroundImage: DootCare,
    projectUrl: "https://quickcarereport.com/",
  },
];
