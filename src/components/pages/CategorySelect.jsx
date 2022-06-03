import { useStates } from "../../utilities/states";

export default function CategorySelector(props) {
  let s = useStates("main");
  let { bindTo, showAllOption } = props;
  let [bindObject, bindProperty] = bindTo;

  return (
    <select
      {...bindObject.bind(bindProperty)}
      className="dropdown-toggle
          px-6
          py-2.5
          text-gray-700
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap"
    >
      {showAllOption && (
        <option key={0} value={0}>
          Alla
        </option>
      )}
      {s.categories.map(({ name, id }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
