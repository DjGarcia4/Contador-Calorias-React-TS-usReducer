import { Activity } from "../types";
import { categories } from "../data/categories";
import { useMemo } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ActivityActions } from "../reducers/activity-reducer";

type ActivityListProps = {
  activities: Activity[];
  dispatch: React.Dispatch<ActivityActions>;
};

const ActivityList = ({ activities, dispatch }: ActivityListProps) => {
  const categoryName = useMemo(
    () => (category: Activity["category"]) =>
      categories.map((cat) => (cat.id === category ? cat.name : "")),
    []
  );
  const isEmptyActivities = useMemo(
    () => activities.length === 0,
    [activities]
  );

  return (
    <div className=" bg-gray-50 rounded-lg max-h-[500px] min-h-[500px]">
      <h2 className="text-2xl md:text-4xl font-bold text-slate-500 text-center z-10  p-5">
        Comidas y Actividades
      </h2>

      {!isEmptyActivities ? (
        <div className="px-10 rounded-lg  overflow-scroll">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="px-5 py-5 bg-white flex justify-between shadow-lg rounded-lg my-10"
            >
              <div className=" space-y-2 relative">
                <p
                  className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase text-1xl  font-bold ${
                    activity.category === 1 ? "bg-lime-500" : "bg-orange-500"
                  }`}
                >
                  {categoryName(+activity.category)}
                </p>
                <p className="text-2xl md:text-2xl font-bold pt-5">
                  {activity.name}
                </p>
                <p className="font-black text-2xl md:text-3xl text-lime-500">
                  {activity.calories}
                  <span> Calorias</span>
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <button
                  onClick={() =>
                    dispatch({
                      type: "set-activeId",
                      payload: { id: activity.id },
                    })
                  }
                >
                  <PencilSquareIcon className="h-8 w-8 text-yellow-600 hover:text-yellow-500 transition-all hover:animate-bounce" />
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "delete-activeId",
                      payload: { id: activity.id },
                    })
                  }
                >
                  <TrashIcon className="h-8 w-8 text-red-800 hover:text-red-500 transition-all hover:animate-bounce" />
                </button>
              </div>
            </div>
          ))}{" "}
        </div>
      ) : (
        <p className="text-center">Aún no hay nada...</p>
      )}
    </div>
  );
};

export default ActivityList;
