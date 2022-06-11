import Header from "./Header";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col justify-between items-stretch">
      <div>
        <Header />
        <motion.main
          key={router.route}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear", duration: 1 }} // Set the transition to linear
          className="h-full mt-12"
        >
          {children}
        </motion.main>
      </div>
      <div className="my-4 text-sm text-center text-gray-400">
        ©2022 Serkan Urgancı
      </div>
    </div>
  );
}
