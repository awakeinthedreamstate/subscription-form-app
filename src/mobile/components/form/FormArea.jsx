import { motion } from "framer-motion";
import FormHeader from "./FormHeader";
import PersonalInfo from "./form-pages/PersonalInfo";
import SubscriptionPlans from "./form-pages/SubscriptionPlans";
import Addons from "./form-pages/Addons";
import Summary from "./form-pages/Summary";

export default function FormArea() {
  return (
    <section
      className="w-[calc(100%-32px)] bg-alabaster rounded-lg absolute 
    top-[98px] center-position-x h-auto pb-8 mx-auto shadow-md"
    >
      <FormHeader />
      <div>
        <SubscriptionPlans />
      </div>
    </section>
  );
}
