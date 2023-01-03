import React, { useCallback } from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';
import {List} from 'react-virtualized'

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style} />
      );
    },
    [onRemove, onToggle, todos]
  );

  return (
    <List
      className={'TodoList'}
      width={512} // 리스트 가로 크기
      height={513} // 리스트 높이
      rowCount={todos.length} // 항목 갯수
      rowHeight={57} // 리스트 각 높이
      rowRenderer={rowRenderer} // 렌더링 할 때 사용 함수
      list={todos} // 리스트 배열
      style={{outline:'none'}} // 스타일
    />
  );
};

export default React.memo(TodoList);
