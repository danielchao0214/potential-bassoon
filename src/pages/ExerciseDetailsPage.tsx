// import { Exercise } from "my-types";

import BodyPartCard from "../components/BodyPartCard";
import CommentCard from "../components/CommentCard";
import Navbar from "../components/Navbar";

// import axios from "axios";
// import { exerciseOptions } from "../utils/fetchData";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";

function ExerciseDetailsPage() {
  // const { id } = useParams<{ id: string }>(); // Use useParams with type annotation

  // const exerciseUrl = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;

  // const { data, error, isLoading, isError } = useQuery<Exercise, Error>(
  //   ["exercise", id],
  //   async () => {
  //     const response = await axios.get<Exercise>(exerciseUrl, exerciseOptions);
  //     return response.data;
  //   }
  // );

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error: {error?.message}</div>;
  // }

  // const exercise = data as Exercise;

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar dropdownButtonText="Exercise" />
        <div className="flex flex-row items-center min-h-screen pt-16">
          <div className="flex flex-col w-1/2 my-4 space-y-4">
            <div className="w-full p-6 pb-2 mx-auto bg-white rounded-lg shadow-lg">
              {/* main card */}
              <div className="flex flex-col mb-4 space-y-1 text-center">
                {/* title text */}
                <h1 className="text-3xl font-semibold">Barbell Back Squat</h1>
                <div className="text-xl">
                  <strong className="text-gray-700">Equipment: </strong>
                  {"Barbell, Squat Rack"}
                </div>
              </div>
              <div className="flex justify-center mb-4">
                {/* gif */}
                <img
                  src={"https://api.exercisedb.io/image/6gPb3n4WVbvDKS"}
                  alt={"Barbell Back Squat"}
                  className="max-w-full border-2 border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                {/* body parts */}
                <h2 className="text-lg font-semibold text-gray-700">
                  Targets:
                </h2>
                <div className="divide-y divide-dashed">
                  <BodyPartCard
                    bodyPart="Quadriceps"
                    upvotes={10}
                    downvotes={2}
                  />
                  <BodyPartCard bodyPart="Glutes" upvotes={8} downvotes={1} />
                  <BodyPartCard
                    bodyPart="Hamstrings"
                    upvotes={5}
                    downvotes={0}
                  />
                </div>
              </div>
            </div>
            <div className="w-full p-4 mx-auto bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <h2 className="text-lg font-semibold">Comments</h2>
                <div className="space-y-4">
                  <CommentCard
                    username="User1"
                    comment="This exercise is great!"
                    likes={5}
                    dislikes={1}
                  />
                  <CommentCard
                    username="User2"
                    comment="I prefer other exercises."
                    likes={3}
                    dislikes={2}
                  />
                  <CommentCard
                    username="User3"
                    comment="It's a good exercise for beginners."
                    likes={4}
                    dislikes={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExerciseDetailsPage;
