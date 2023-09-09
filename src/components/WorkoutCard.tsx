import React from "react";
import { Workout } from "my-types";

interface WorkoutCardProps {
  workout: Workout;
  darkMode?: boolean;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  workout,
  darkMode = false,
}) => {
  const backgroundClass = darkMode ? "bg-darkBackground" : "bg-background";
  const textClass = darkMode ? "text-darkText" : "text-text";

  return (
    <div className={`p-4 rounded shadow-md ${backgroundClass} ${textClass}`}>
      <h2 className="mb-2 text-xl font-semibold">{workout.name}</h2>
      <p className={`text-gray-600 ${darkMode ? "dark:text-gray-400" : ""}`}>
        Created: {workout.createdDate}
      </p>
      <p className={`text-gray-600 ${darkMode ? "dark:text-gray-400" : ""}`}>
        Last Done: {workout.lastDoneDate}
      </p>
      <p className={`text-gray-600 ${darkMode ? "dark:text-gray-400" : ""}`}>
        Duration: {workout.durationMinutes} minutes
      </p>
      <div
        className={`flex space-x-2 ${
          darkMode ? "dark:text-gray-400" : "text-gray-600"
        }`}
      >
        <span>Exercises:</span>
        {workout.sets.map((exercise, index) => (
          <span key={index}>{exercise.name}</span>
        ))}
      </div>
      <div
        className={`flex space-x-2 ${
          darkMode ? "dark:text-gray-400" : "text-gray-600"
        }`}
      >
        <span>Muscles Targeted:</span>
        {workout.musclesTargeted.map((muscle, index) => (
          <span key={index}>{muscle.name}</span>
        ))}
      </div>
      <div
        className={`flex space-x-2 ${
          darkMode ? "dark:text-gray-400" : "text-gray-600"
        }`}
      >
        <span>Tags:</span>
        {workout.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <p className={`text-gray-600 ${darkMode ? "dark:text-gray-400" : ""}`}>
        Notes: {workout.notes}
      </p>
    </div>
  );
};

export default WorkoutCard;
