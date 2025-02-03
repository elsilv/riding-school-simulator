import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../store/lessonsSlice.js";

function Lessons({ giveLesson }) {
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons.lessons);
  const status = useSelector((state) => state.lessons.status);
  const error = useSelector((state) => state.lessons.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLessons());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h3>Give Riding Lessons</h3>
      <ul>
        {lessons.map((lesson, idx) => (
          <li key={idx}>{lesson.dateTime} - {lesson.title} - {lesson.maxStudents} - {lesson.currentStudents} - {lesson.price}</li>
        ))}
      </ul>
      <button onClick={giveLesson}>Add new Lesson</button>
    </div>
  );
}

export default Lessons;
