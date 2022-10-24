import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import BarChartIcon from "@mui/icons-material/BarChart";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import ArticleIcon from '@mui/icons-material/Article';


const SIDE_BAR_ITEM_1 = [
  {
    title: "Cá Nhân",
    path: "/profile",
    icon: <AccountCircleRoundedIcon />,
  },
  {
    title: "Khám Phá",
    path: "/",
    icon: <AdjustRoundedIcon />,
  },
  {
    title: "#zingchart",
    path: "/zing-chart",
    icon: <BarChartIcon />,
  },
  {
    title: "Radio",
    path: "/radio",
    icon: <GraphicEqIcon />,
  },
  {
    title: "Theo Dõi",
    path: "/follow",
    icon: <ArticleIcon />,
  },
];
const SIDE_BAR_ITEM_2 = [];

export { SIDE_BAR_ITEM_1, SIDE_BAR_ITEM_2 };
