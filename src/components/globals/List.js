import React from 'react'

function List({items, title}) {
  return (
    <div className='list__container'>
      {title && <h4>{title}</h4>}
      <ul className='list'>
        {
          items.map((item, index) => {
            const {title, Icon} = item;
            return (
              <li key={Math.random() + index}>{Icon && <span className='list__icon'>{<Icon/>}</span>}{title}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List;