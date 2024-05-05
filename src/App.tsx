import { useEffect, useMemo } from "react";

import Form from "./components/Form";
import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";
import { useActivity } from "./hooks/useActivity";

function App() {
  const { state, dispatch } = useActivity();

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestart = useMemo(() => state.activities.length, [state.activities]);
  return (
    <>
      <header className="bg-lime-600 py-3 justify-between flex">
        <div className="  flex justify-around w-full items-center">
          <h1 className=" text-lg font-bold text-white uppercase">
            Contador de Calorias
          </h1>
          <button
            className="bg-gray-600 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg transition-all disabled:opacity-10 disabled:cursor-default"
            disabled={!canRestart}
            onClick={() => dispatch({ type: "restart-app" })}
          >
            Reiniciar App
          </button>
        </div>
      </header>
      <section className="bg-lime-500 py-10 md:py-20 px-5">
        <div className=" max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <Form />
          <ActivityList />
        </div>
      </section>
      <section className="bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker />
        </div>
      </section>
    </>
  );
}

export default App;
