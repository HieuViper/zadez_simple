// 'use client'
// import React, { useState } from 'react'
// import { motion, Variants } from "framer-motion";
// const Partner = () => {
//     const itemVariants = {
//         open: {
//             opacity: 1,
//             y: 0,
//             transition: { type: "spring", stiffness: 300, damping: 24 }
//         },
//         closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
//     };
//     const [isHovered, setIsHovered] = useState(false);
//     const textMotion = {
//         rest: {
//             color: "grey",
//             x: 0,
//             transition: {
//                 duration: 0.1,
//                 type: "tween",
//                 ease: "easeIn"
//             }
//         },
//         hover: {
//             color: "blue",
//             x: 20,
//             transition: {
//                 duration: 0.1,
//                 type: "tween",
//                 ease: "easeOut"
//             }
//         }
//     };

//     const slashMotion = {
//         rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
//         hover: {
//             opacity: 1,
//             transition: {
//                 duration: 0.5,
//                 type: "tween",
//                 ease: "easeIn"
//             },
//             x: 200, opacity: 1
//         },
//         x: -400, opacity: 0

//     };
//     return (
//         <div>Partner

//             {/* <motion.div
//                 className="parent"
//                 whileHover='animate'
//                 style={{
//                     width: 100,
//                     height: 100,
//                     backgroundColor: "red",
//                 }}
//             >
//                 <motion.div
//                     className="child"
//                     initial={{ x: 200, opacity: 0 }}
//                     whileHover={{ x: 100, opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                     style={{
//                         width: 100,
//                         height: 100,
//                         backgroundColor: "blue",
//                     }}
//                 >
//                     abc
//                 </motion.div>
//             </motion.div> */}

//             <nav className="menu " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//                 <motion.button
//                     whileHover={{ scale: 0.97 }}
//                 >
//                     Menu
//                     <motion.div
//                         variants={{
//                             open: { rotate: 180 },
//                             closed: { rotate: 0 }
//                         }}
//                         transition={{ duration: 0.2 }}
//                         style={{ originY: 0.55 }}
//                     >
//                         <svg width="15" height="15" viewBox="0 0 20 20">
//                             <path d="M0 7 L 20 7 L 10 16" />
//                         </svg>
//                     </motion.div>
//                 </motion.button>
//                 <motion.ul
//                     variants={{
//                         open: {
//                             clipPath: "inset(0% 0% 0% 0% round 10px)",
//                             transition: {
//                                 type: "spring",
//                                 bounce: 0,
//                                 duration: 0.7,
//                                 delayChildren: 0.3,
//                                 staggerChildren: 0.05
//                             }
//                         },
//                         closed: {
//                             clipPath: "inset(10% 50% 90% 50% round 10px)",
//                             transition: {
//                                 type: "spring",
//                                 bounce: 0,
//                                 duration: 0.3
//                             }
//                         }
//                     }}
//                     animate={isHovered ? "open" : "closed"}
//                     style={{ pointerEvents: isHovered ? "auto" : "none" }}
//                 >
//                     <motion.div variants={itemVariants}>Item 1 </motion.div>
//                     <motion.div variants={itemVariants}>Item 2 </motion.div>
//                     {/* <motion.div variants={itemVariants}>Item 3 </motion.div> */}
//                     <motion.div variants={itemVariants}>Item 4 </motion.div>
//                     <motion.div variants={itemVariants}>
//                         <motion.div initial="rest" whileHover="hover" animate="rest" className='flex'>
//                             <motion.h1 variants={textMotion}>zadez</motion.h1>
//                             <motion.div variants={slashMotion} className='w-40 h-40 bg-red-500 absolute'>
//                                 xyz
//                             </motion.div>
//                         </motion.div>
//                     </motion.div>
//                     {/*  */}

//                 </motion.ul>
//             </nav>
//             {/* <motion.div initial="rest" whileHover="hover" animate="rest">
//                 <motion.div variants={slashMotion}>
//                     <svg width="1em" height="1em" viewBox="0 0 27 50">
//                         <path
//                             fill="#154FFF"
//                             d="M21.177 0L0 50h5.818L26.995 0z"
//                             fillRule="evenodd"
//                         />
//                     </svg>
//                 </motion.div>
//                 <motion.h1 variants={textMotion}>Hover me!</motion.h1>
//             </motion.div> */}
//         </div>
//     )
// }

// export default Partner