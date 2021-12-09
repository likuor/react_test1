import React from 'react';

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className='incompleteArea'>
      <p className='title'>incomplete</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className='listRow'>
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>complete</button>
              <button onClick={() => onClickDelete(index)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
