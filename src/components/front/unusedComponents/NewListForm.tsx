
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../../store/listSlice';
import { List } from '../../../types/listsType';

export const NewListForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      const newList: List = {
        id: Date.now().toString(),
        title: title.trim(),
        description: description.trim(),
        icon: 'default-icon',
        products: []
      };
      dispatch(addList(newList));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="שם הרשימה"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="תיאור"
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        צור רשימה חדשה
      </button>
    </form>
  );
};
