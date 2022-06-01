import { useStates } from './utilities/states';

export default function CategorySelector(props) {

  let s = useStates('main');
  let { bindTo, showAllOption } = props;
  let [bindObject, bindProperty] = bindTo;

  return <select {...bindObject.bind(bindProperty)}>
    {showAllOption && <option key={0} value={0}>all</option>}
    {s.kategorier.map(({ hästraser, id }) =>
      <option key={id} value={id}>{hästraser}</option>
    )}
  </select>

}