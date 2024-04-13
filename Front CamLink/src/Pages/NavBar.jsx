import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import GroupsIcon from '@mui/icons-material/Groups';


const svgVariants = {
 close: {
    rotate: 360,
 },
 open: {
    rotate: 180,
 },
};

const containerVariants = {
 close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
 },
 open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
 },
};

function NavBar() {
 const [isOpen, setIsOpen] = useState(true);

 const containerControls = useAnimationControls();
 const svgControls = useAnimationControls();

 useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
 }, [isOpen]);

 const handleOpenClose = () => {
    setIsOpen(!isOpen);
 };

 return (
    <motion.nav>
      <motion.div
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="text-gray-400 text-lg p-4 flex flex-col h-[43rem] justify-start items-start bg-black w-[15rem] bg-opacity-40 m-1 rounded-lg"
      >
        <button
          className="p-1 rounded-full flex"
          onClick={handleOpenClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 stroke-neutral-200"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={svgVariants}
              animate={svgControls}
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            />
          </svg>
        </button>
        <div className="space-y-3">
          {isOpen ? (
            <div className="flex flex-col gap-4">
              <Link to="/Home">
               
               <h1 className="hover:bg-black-200 hover:scale-110 duration-300 hover:text-gray-800 text-xl p-2 rounded-lg w-[12rem] font-thin">Home</h1>
              </Link>
              <Link to="/CamLink"> 
                <h1 className="hover:bg-black-200 hover:scale-110 duration-300 hover:text-gray-800  text-xl p-2 rounded-lg w-[12rem] font-thin">CamLink</h1>
              </Link>
              <Link to="/ScreenShare">
                <h1 className="hover:bg-black-200 hover:scale-110 duration-300 hover:text-gray-800  text-xl p-2 rounded-lg w-[12rem] font-thin">Screen Share</h1>
              </Link>
              <Link to="/About">
                <h1 className=" hover:bg-black-200 hover:scale-110 duration-300 hover:text-gray-800  text-xl p-2 rounded-lg w-[12rem] font-thin">About Us</h1>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <Link to="/Home">
                <motion.div initial={{ scale: 1 }}
                 whileTap={{ scale: 1.2 }}
                 whileHover={{ opacity: 0.1, scale: 1.4 }}
                >
                 <HomeIcon sx={{ fontSize: 30}}/>
                </motion.div>
              </Link>
              <Link to="/CamLink">
                <motion.div initial={{ scale: 1 }}
                 whileTap={{ scale: 1.2 }}
                 whileHover={{ opacity: 0.1, scale: 1.4 }}
                >
                 <LinkedCameraIcon sx={{ fontSize: 30}}/>
                </motion.div>
              </Link>
              <Link to="/ScreenShare">
                <motion.div initial={{ scale: 1 }}
                 whileTap={{ scale: 1.2 }}
                 whileHover={{ opacity: 0.1, scale: 1.4 }}
                >
                 <ScreenshotMonitorIcon sx={{ fontSize: 30}} />
                </motion.div>
              </Link>
              <Link to="/AboutUs">
                <motion.div initial={{ scale: 1 }}
                 whileTap={{ scale: 1.2 }}
                 whileHover={{ opacity: 0.1, scale: 1.4 }}
                >
                 <GroupsIcon sx={{ fontSize: 30}}/>
                </motion.div>
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </motion.nav>
 );
}

export default NavBar;