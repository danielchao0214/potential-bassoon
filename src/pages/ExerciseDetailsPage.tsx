import { Exercise } from "my-types";
import axios from "axios";
import { exerciseOptions } from "../utils/fetchData";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function ExerciseDetailsPage() {
  const { id } = useParams<{ id: string }>(); // Use useParams with type annotation

  const exerciseUrl = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;

  const { data, error, isLoading, isError } = useQuery<Exercise, Error>(
    ["exercise", id],
    async () => {
      const response = await axios.get<Exercise>(exerciseUrl, exerciseOptions);
      return response.data;
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  const exercise = data as Exercise;

  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="mb-4 text-3xl font-semibold">{exercise.name}</h1>
      <div className="mb-4">
        <strong className="text-gray-700">Body Part:</strong>{" "}
        {exercise.bodyPart}
      </div>
      <div className="mb-4">
        <strong className="text-gray-700">Equipment:</strong>{" "}
        {exercise.equipment}
      </div>
      <div className="mb-4">
        <strong className="text-gray-700">Target:</strong> {exercise.target}
      </div>
      <div className="text-center">
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          className="max-w-full rounded-md"
        />
      </div>
    </div>
  );
}

export default ExerciseDetailsPage;
