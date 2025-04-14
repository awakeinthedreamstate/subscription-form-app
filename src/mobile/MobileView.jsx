import FormArea from "./components/form/FormArea";
import FormHandler from "./components/form/FormHandler";
import NavButtons from "./components/NavButtons";
import ProgressTracker from "./components/ProgressTracker";

export default function MobileView() {
  return (
    <div className="h-screen bg-magnolia">
      <ProgressTracker />
      <FormHandler>
        <FormArea />
        <NavButtons />
      </FormHandler>
    </div>
  );
}
