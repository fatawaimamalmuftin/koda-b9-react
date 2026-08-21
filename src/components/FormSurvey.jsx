import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addSurvey } from "../Redux/slice/resultsSurveySlice"
import { useSelector } from "react-redux"

export default function FormSurvei() {
  const dispatch = useDispatch()
  const state = useSelector((state)=>state.resultSurveiState.resultForm)

  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) =>{
    const id_Survei = state.length + 1
    data.id = id_Survei
    dispatch(addSurvey(data))
    // name: data.name,
    // age: data.age,
    // gender: data.gender,
    // genre: data.genre,
    // YorN: data.YorN
    // console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className="px-20 py-5 flex flex-col gap-5">
      <div>
        <label>
          Nama : 
          <input
            {...register("name")}
            type="text"
          />
        </label>
      </div>

      <div>
        <label>
          Umur : 
          <input
            {...register("age")}
            type="number"
          />
        </label>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="gender">Jenis Kelamin anda</label>

        <label>
          <input
            {...register("gender")}
            type="radio"
            value="man"
          />
          Laki - Laki
        </label>

        <label>
          <input
            {...register("gender")}
            type="radio"
            value="woman"
          />
          Perempuan
        </label>
      </div>

      <label htmlFor="YorN">
        Apakah anda hobi nonton ?
      </label>

      <select
        {...register("YorN")}
        className="w-fit"
      >
        <option value="n">No</option>
        <option value="y">Yes</option>
      </select>

      <div className="flex flex-col gap-2">
        <label>
          Gendre yang anda sukai
        </label>

        <label>
          <input
            {...register("genre")}
            type="checkbox"
            value="fantasy"
          />
          Fantasy
        </label>

        <label>
          <input
            {...register("genre")}
            type="checkbox"
            value="horor"
          />
          Horor
        </label>

        <label>
          <input
            {...register("genre")}
            type="checkbox"
            value="comedy"
          />
          Comedy
        </label>

        <label>
          <input
            {...register("genre")}
            type="checkbox"
            value="action"
          />
          Action
        </label>
      </div>

      <button
        type="submit"
        className="mr-auto p-2 bg-green-500 rounded-2xl hover:bg-green-300"
      >
        Submit
      </button>
    </form>
  )
}