import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ExerciseDetailsPage from "./pages/ExerciseDetailsPage";
import HomePage from "./pages/HomePage";
import React from "react";
import WorkoutListPage from "./pages/WorkoutListPage";

const AppRouter: React.FC = () => {
  // Create a new instance of QueryClient
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* Provide the client instance */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workouts" element={<WorkoutListPage />} />
          <Route path="/exercise/:id" element={<ExerciseDetailsPage />} />
          {/* Define more routes */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default AppRouter;
