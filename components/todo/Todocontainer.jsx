import Todoform from "./Todoform";
import Todolist from "./Todolist";

const Todocontainer = () => {
  return (
    <div>
      <Todoform />
      <div>
        <Todolist />
        <Todolist />
      </div>
    </div>
  );
};

export default Todocontainer;
