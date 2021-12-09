import React from 'react';

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className='completeArea'>
      <p className='title'>complete</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className='listRow'>
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>back</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
