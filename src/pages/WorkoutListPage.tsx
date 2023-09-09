import React, { useEffect, useState } from "react";

import { Workout } from "my-types";
import WorkoutCard from "../components/WorkoutCard";

const WorkoutListPage: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("name");
  const [filteredWorkouts, setFilteredWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    // Simulate fetching workouts from an API
    const fetchedWorkouts: Workout[] = [
      // ...
    ];

    setWorkouts(fetchedWorkouts);
  }, []);

  useEffect(() => {
    const filteredAndSorted = workouts
      .filter((workout) =>
        workout.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOption === "name") {
          return a.name.localeCompare(b.name);
        }
        // Add more sorting options here
        return 0;
      });

    setFilteredWorkouts(filteredAndSorted);
  }, [workouts, searchTerm, sortOption]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Workout List</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          className="border rounded px-2 py-1 w-64"
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border rounded px-2 py-1"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          {/* Add more sorting options */}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} darkMode={false} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutListPage;
