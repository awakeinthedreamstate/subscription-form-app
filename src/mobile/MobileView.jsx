import FormArea from "./components/form/FormArea";
import NavButtons from "./components/NavButtons";
import ProgressTracker from "./components/ProgressTracker";

export default function MobileView() {
  return (
    <div className="h-screen bg-magnolia">
      <ProgressTracker />
      <form>
        <FormArea />
        <NavButtons />
      </form>
    </div>
  );
}
