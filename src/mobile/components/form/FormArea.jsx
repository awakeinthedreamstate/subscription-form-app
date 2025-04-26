import { motion } from "framer-motion";
import { useFormContext } from "@/context/FormContext";
import FormHeader from "./FormHeader";
import PersonalInfo from "./form-pages/PersonalInfo";
import SubscriptionPlans from "./form-pages/SubscriptionPlans";
import Addons from "./form-pages/Addons";
import Summary from "./form-pages/Summary";
import PurchaseConfirm from "./form-pages/PurchaseConfirm";

export default function FormArea() {
  const { currentPage } = useFormContext();

  //animation variants
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
      className="w-[calc(100%-2rem)] sm:w-[calc(100%-8rem)] bg-alabaster rounded-lg relative top-[-72px] h-auto pb-8 mx-auto shadow-md"
      layout
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {currentPage < 5 ? <FormHeader /> : <></>}
      <motion.div
        key={currentPage}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.2 }}
      >
        {renderPage()}
      </motion.div>
    </motion.section>
  );
}
