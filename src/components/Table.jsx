import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from './redux/todosSlice';


const PAGE_SIZE = 5;

const Table = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);

  // تحديث القائمة وفقاً للصفحة الحالية
  useEffect(() => {
    const paginatedTodos = todos.slice(
      currentPage * PAGE_SIZE,
      (currentPage + 1) * PAGE_SIZE
    );
    setItems(paginatedTodos);
  }, [currentPage, todos]);

  // محاكاة تحميل المهام
  useEffect(() => {
    dispatch(setTodos([
      { id: 1, text: 'Buy groceries' },
      { id: 2, text: 'Walk the dog' },
      { id: 3, text: 'Do laundry' },
      { id: 4, text: 'Work on project' },
      { id: 5, text: 'Read a book' },
      { id: 6, text: 'Cook dinner' },
    ]));
  }, [dispatch]);

  // تغيير الصفحة عند النقر على أزرار الصفحات
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Todo List</h3>
      
      {/* قائمة المهام */}
      <div className="list-group">
        {items.map(todo => (
          <div key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            {todo.text}
            <button className="btn btn-danger btn-sm">Delete</button>
          </div>
        ))}
      </div>

      {/* عرض صفحة التنقل فقط إذا كان عدد المهام أكبر من PAGE_SIZE */}
      {todos.length > PAGE_SIZE && (
        <Pagination pageCount={Math.ceil(todos.length / PAGE_SIZE)} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default Table;
