import { useSelector, useDispatch } from "react-redux"
import { clearFormSurvey, removeFromSurvey } from "../Redux/slice/resultsSurveySlice"

export default function ShowResults() {
  const state = useSelector((state) => state.resultSurveiState.resultForm)
  const dispatch = useDispatch()

  console.log(state)

  return (
    <main className="p-5">
      <div className="grid grid-cols-6 border-b-2 border-gray-300 p-3 font-bold">
        <div>Nama</div>
        <div>Umur</div>
        <div>Gender</div>
        <div>Hobi Nonton</div>
        <div>Genre</div>
        <div>Action</div>
      </div>

      {state.map((e, i) => {
        return (
          <div
            key={i}
            className="grid grid-cols-6 items-center border-b border-gray-200 px-5"
          >
            <div>{e.name}</div>
            <div>{e.age}</div>
            <div>{e.gender}</div>
            <div>{e.YorN}</div>
            <div>{e.genre.join(", ")}</div>

            <div>
              <button onClick={()=>dispatch(removeFromSurvey(e.id))}
                type="button"
                className="rounded-md bg-red-500 px-3 py-1 text-white hover:bg-red-400"
              >
                Hapus
              </button>
            </div>
          </div>
        )
      })}

      <div>
        <button onClick={()=>dispatch(clearFormSurvey())}
          type="button"
          className="rounded-md bg-red-500 px-3 py-1 text-white hover:bg-red-400 mt-2"
        >
          Hapus Semua
        </button>
      </div>

    </main>
  )
}