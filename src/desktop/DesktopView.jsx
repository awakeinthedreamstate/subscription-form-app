import ProgressTracker from "./components/ProgressTracker";
import FormHandler from "./components/form/FormHandler";
import NavButtons from "./components/NavButtons";
import FormArea from "./components/form/FormArea";

export default function DesktopView() {
  return (
    <div className="flex gap-4 margin-clamp p-4 h-[600px] min-w-[847px] max-w-[960px] rounded-2xl bg-alabaster">
      <ProgressTracker />
      <FormHandler>
        <FormArea />
        <NavButtons />
      </FormHandler>
    </div>
  );
}
