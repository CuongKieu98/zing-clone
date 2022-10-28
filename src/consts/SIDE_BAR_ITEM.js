import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import BarChartIcon from "@mui/icons-material/BarChart";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import ArticleIcon from '@mui/icons-material/Article';
import images from "../assets/images";


const SIDE_BAR_ITEM_1 = [
  {
    title: "Cá Nhân",
    path: "/profile",
    icon:"icon  ic-24-LibraryTab",
  },
  {
    title: "Khám Phá",
    path: "/",
    icon: "icon  ic-24-HomeTab",
  },
  {
    title: "#zingchart",
    path: "/zing-chart",
    icon:"icon  ic-24-ChartTab",
  },
  {
    title: "Radio",
    path: "/radio",
    icon: "icon  ic-24-RadioTab",
    img:images.live
  },
  {
    title: "Theo Dõi",
    path: "/follow",
    icon:"icon  ic-24-FeedTab",
  },
];
const SIDE_BAR_ITEM_2 = [];

export { SIDE_BAR_ITEM_1, SIDE_BAR_ITEM_2 };
