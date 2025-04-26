import checkmarkIcon from "/assets/images/icon-thank-you.svg";

export default function PurchaseConfirm() {
  return (
    <div className="w-[calc(100%-48px)] h-auto mx-auto mt-[166px] mb-[46px] text-center flex flex-col items-center justify-center">
      <img className="w-18" src={checkmarkIcon} alt="checkmark-icon" />
      <h1 className="text-3xl font-bold mt-[34px] mb-[16px] text-marine leading-none">
        Thank you!
      </h1>
      <p className="font-light mx-[-20px] text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
