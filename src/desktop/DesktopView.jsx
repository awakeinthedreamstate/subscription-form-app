// import FormArea from "./components/form/FormArea";
// import FormHandler from "./components/form/FormHandler";
// import NavButtons from "./components/NavButtons";
// import ProgressTracker from "./components/ProgressTracker";
import ProgressTracker from "./components/ProgressTracker";
import FormHandler from "./components/form/FormHandler";
import NavButtons from "./components/NavButtons";
import FormArea from "./components/form/FormArea";

export default function DesktopView() {
  return (
    <div className="flex gap-4 mx-62.5 my-26.5 p-4 h-[600px] rounded-2xl bg-alabaster">
      <ProgressTracker />
      <FormHandler>
        <FormArea />
        <NavButtons />
      </FormHandler>
    </div>
  );
}
