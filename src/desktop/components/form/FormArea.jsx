import { motion } from "framer-motion";
import { useFormContext } from "@/context/FormContext";
import FormHeader from "./FormHeader";
import PersonalInfo from "./form-pages/PersonalInfo";
import SubscriptionPlans from "./form-pages/SubscriptionPlans";
import Addons from "./form-pages/Addons";
import Summary from "./form-pages/Summary";
import PurchaseConfirm from "./form-pages/PurchaseConfirm";
import PlanLoading from "./utility/PlanLoading";
import AddonLoading from "./utility/AddonLoading";

export default function FormArea() {
  const { currentPage } = useFormContext();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SubscriptionPlans />;
      case 3:
        return <Addons />;
      case 4:
        return <Summary />;
      case 5:
        return <PurchaseConfirm />;
      default:
        return null;
    }
  };

  return (
    <motion.section
      className="w-full min-w-[527px] lg:px-[40px] xl:px-[84px] h-auto pb-8 mx-auto"
      aria-label="form area"
      layout
      transition={{
        duration: 0.1, // Adjust duration for smoothness
        ease: "easeInOut", // Easing function
      }}
    >
      {currentPage < 5 ? <FormHeader /> : <></>}
      <motion.div
        key={currentPage}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.2, delay: 0.1 }}
        className=""
      >
        {renderPage()}
      </motion.div>
    </motion.section>
  );
}
