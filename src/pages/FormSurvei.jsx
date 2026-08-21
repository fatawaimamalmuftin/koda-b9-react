import FormSurvey from "../components/FormSurvey"
import ShowResults from "../components/ShowResults"

export default function FormSurvei() {
  return (
    <main className="grid grid-cols-[30%_70%] overflow-hidden">
       <div className="overflow-y-auto">
        <FormSurvey/>
       </div>
        <ShowResults/>
    </main>
  )
}
