import React from 'react';
import { Todo } from '../../types/todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }: Props) => (
  <section className="TodoList">
    {
      todos.map(todo => {
        return (
          <TodoInfo
            key={todo.id}
            todo={todo}
          />
        );
      })
    }
  </section>
);