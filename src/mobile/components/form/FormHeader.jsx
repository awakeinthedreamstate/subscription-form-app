import { useFormContext } from "@/context/FormContext";

export default function FormHeader() {
  const { currentPage } = useFormContext();

  const headers = [
    "Personal info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
  ];
  const subHeaders = [
    "Please provide your name, email address, and phone number.",
    "You have the option of monthly or yearly billing.",
    "Add-ons help enhance your gaming experience.",
    "Double-check everything looks OK before confirming.",
  ];

  return (
    <header className="w-[calc(100%-48px)] mx-auto mt-7 mb-[16px]">
      <h1 className="mb-2 text-2xl text-marine">{headers[currentPage - 1]}</h1>
      <p className="font-light text-cool-gray">{subHeaders[currentPage - 1]}</p>
    </header>
  );
}
