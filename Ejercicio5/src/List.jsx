import "./list.css"

export const List = (props) => {
    const { item, setItem } = props;
  return (
    <li className='list-group-item mt-2 hoverList'>
      <p className='mb-0'>{item.text}</p>
      
    </li>
  )
}
