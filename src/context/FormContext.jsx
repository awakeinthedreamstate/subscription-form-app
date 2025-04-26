import { createContext, useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import subscriptionService from "../services/subscriptionService";
const FormContext = createContext();

export function FormContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);

  //define state for subscription info fetched from db
  const [subscriptionInfo, setSubscriptionInfo] = useState({});

  // Define the state for the user's selections
  const [userInfo, setUserInfo] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    plan: { name: "", priceMonthly: "", priceYearly: "" },
    monthlyCycle: true,
    addons: [],
  });

  //get react-hook-form utility
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchSubscriptionInfo();
  }, []);

  const fetchSubscriptionInfo = async (retryCount = 3, delay = 1000) => {
    try {
      const plans_response = await subscriptionService.getPlans();
      const addons_response = await subscriptionService.getAddons();

      if (plans_response?.error) {
        console.error("Error fetching plans:", plans.error);
        return;
      } else if (addons_response?.error) {
        console.error("Error fetching addons:", addons.error);
        return;
      } else {
        const plans = await plans_response.json();
        const addons = await addons_response.json();
        setSubscriptionInfo({
          plans: plans.documents,
          addons: addons.documents,
        });
      }
    } catch (error) {
      console.error("Error fetching subscription info:", error);

      if (retryCount > 0) {
        console.log(`Retrying... (${3 - retryCount + 1})`);
        setTimeout(
          () => fetchSubscriptionInfo(retryCount - 1, delay * 2),
          delay
        );
      } else {
        console.error("All retry attempts failed.");
      }
    }
  };

  return (
    <FormContext.Provider
      value={{
        userInfo,
        setUserInfo,
        subscriptionInfo,
        register,
        handleSubmit,
        errors,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);
