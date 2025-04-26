import { useFormContext } from "@/context/FormContext";

export default function PersonalInfo() {
  const { register, errors } = useFormContext();

  const ALERT_MESSAGE = "This field is required";

  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  return (
    <div className="w-full h-auto mx-auto">
      <div className="mb-[20px]">
        <span className="flex justify-between pt-[1.5px] pb-[5px]">
          <label htmlFor="name" className="text-sm font-light text-marine">
            Name
          </label>
          {errors.personalInfo?.name && (
            <p className="text-sm font-medium text-strawberry">
              {errors.personalInfo?.name.message}
            </p>
          )}
        </span>
        <input
          className={`personal-info-input ${errors.personalInfo?.name ? "input-error-state" : "input-no-error-state"} placeholder-weight-bold`}
          {...register("personalInfo.name", { required: ALERT_MESSAGE })}
          placeholder="e.g. Stephen King"
        ></input>
      </div>
      <div className="mb-[20px]">
        <span className="flex justify-between pt-[1.5px] pb-[5px]">
          <label
            htmlFor="email-input"
            className="text-sm font-light text-marine"
          >
            Email
          </label>
          {errors.personalInfo?.email && (
            <p className="text-sm font-medium text-strawberry">
              {errors.personalInfo?.email.message}
            </p>
          )}
        </span>
        <input
          className={`personal-info-input ${errors.personalInfo?.name ? "input-error-state" : "input-no-error-state"} placeholder-weight-bold`}
          type="email"
          {...register("personalInfo.email", {
            required: ALERT_MESSAGE,
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must include @";
              }
              if (!emailRegex.test(value)) {
                return "Enter valid email";
              }
              return true;
            },
          })}
          placeholder="e.g. stephenking@lorem.com"
        ></input>
      </div>
      <div className="">
        <span className="flex justify-between pt-[1.5px] pb-[5px]">
          <label
            htmlFor="phone-input"
            className="text-sm font-light text-marine"
          >
            Phone Number
          </label>
          {errors.personalInfo?.phone && (
            <p className="text-sm font-medium text-strawberry">
              {errors.personalInfo?.phone.message}
            </p>
          )}
        </span>
        <input
          className={`personal-info-input ${errors.personalInfo?.phone ? "input-error-state" : "input-no-error-state"} placeholder-weight-bold`}
          type="tel"
          {...register("personalInfo.phone", {
            required: ALERT_MESSAGE,
            pattern: {
              value: /^\+?[1-9]\d{1,14}$/,
              message: "Enter valid phone number",
            },
          })}
          placeholder="e.g. +1 234 567 890"
        ></input>
      </div>
    </div>
  );
}
