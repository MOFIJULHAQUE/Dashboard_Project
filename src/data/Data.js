// sidebar icons
import { RiHandCoinLine, RiWallet3Line } from "react-icons/ri";
import { TbLayoutDashboard } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePolicy } from "react-icons/md";

// sidebar links
export const SidebarData = [
  {
    path : '/dashboard',
    icon : <TbLayoutDashboard />,
    title : 'Dashboard'
  },
  {
    path : '/wallet',
    icon : <RiWallet3Line />,
    title : 'Wallet'
  },
  {
    path : '/faq',
    icon : <BsQuestionCircle />,
    title : 'FAQ'
  },
  {
    path : '/blog',
    icon : <FaBlog />,
    title : 'Blog'
  },
  {
    path : '/team',
    icon : <RiHandCoinLine />,
    title : 'Core Team'
  },
  {
    path : '/support',
    icon : <BiSupport />,
    title : 'Support Channel'
  },
  {
    path : '/policy',
    icon : <MdOutlinePolicy />,
    title : 'Privacy Policy'
  },
]
