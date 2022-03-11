import React from 'react'

export const ToggleColumns = (props) => {

  React.useState(() => {
    console.log(props.columns);
  }, [props.columns])
  const onCheckboxClick = (e) => {
    // TODO: implement checkbox click handler
    console.log(e.target.name, e.target.checked);
    props.onCheckboxClick(e.target.name, e.target.checked);
  }

  const renderColumns = React.useCallback((column) => {
    
    return <input
              id={column}
              name={column}
              type="checkbox" onChange={onCheckboxClick} checked={props.columns[column]} />
  }, [props.columns])

  // TODO: Bind handlers and props
  return (
    <div className="toggle-columns">
      { 
        Object.keys(props.columns).map((column, index) => {
          return ( 
          <div key={index}>
            <label htmlFor={column}>
              {column}
            </label>
           {renderColumns(column)}
          </div>)
        })
      }
    </div>
  );
}
