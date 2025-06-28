import { GoQuestion } from "react-icons/go";
import { MdInfoOutline,MdOutlineWhatsapp  } from "react-icons/md";
import { IoBriefcaseOutline,IoSchoolOutline  } from "react-icons/io5";
import { RiBloggerLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiHandshakeThin ,PiLinkedinLogo } from "react-icons/pi";
import { RiHome5Line } from "react-icons/ri";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { BsTelephone,BsCodeSlash  } from "react-icons/bs";
import { FiInstagram,FiGithub  } from "react-icons/fi";

export const items = [
  {
    category: "Menu Links",
    tools: [
      { name: "Home", path: "/", icon: RiHome5Line },
      { name: "Skills", path: "/skills", icon: BsCodeSlash  },
      { name: "Education", path: "/education", icon: IoSchoolOutline  },
      { name: "Projects", path: "/projects", icon: LiaProjectDiagramSolid },
      { name: "Blogs", path: "/blogs", icon: RiBloggerLine },
    ]
  },
  {
    category: "Get In Touch",
    tools: [
      { name: "Contact Us", path: "/contact", icon: BsTelephone },
      { name: "About Us", path: "/about", icon: MdInfoOutline },
      { name: "Hire Me", path: "/hire", icon: IoBriefcaseOutline },
      { name: "Help", path: "/help", icon: PiHandshakeThin },
      { name: "FAQ", path: "/faq", icon: GoQuestion },
    ]
  },
  {
    category: "Social Media",
    tools: [
      { name: "Facebook", path: "https://facebook.com", icon:RiFacebookCircleLine },
      { name: "Instagram", path: "https://instagram.com", icon:FiInstagram },
      { name: "Linkedin", path: "https://linkedin.com", icon: PiLinkedinLogo },
      { name: "Github", path: "https://github.com", icon:FiGithub  },
      { name: "Whatsapp", path: "https://wa.me/8080987767", icon: MdOutlineWhatsapp  },
    ]
  },
];
