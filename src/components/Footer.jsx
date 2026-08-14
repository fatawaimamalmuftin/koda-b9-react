import { useEffect, useState } from "react"

export default function Footer() {
    const [feedback, setFeedback] = useState([])
    const [inpFeedback, setInpFeedback] = useState("")

    useEffect(() => {
    (()=>{
    setFeedback(JSON.parse(localStorage.getItem("feedback") || "[]"))
    })()
    }, [])

    // useEffect((e)=>{
    //     e.preventDefault()
        
    // })

    function handleInput(e) {
        e.preventDefault()
        
        setFeedback((f) => {
            return [...f, inpFeedback]
        })
        localStorage.setItem(
            "feedback",
            JSON.stringify(feedback)
        )
        setInpFeedback("")
    }

    return (
        <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-8">
            <div className="rounded-lg bg-gray-800 p-6">

            <h2 className="mb-2 text-lg font-semibold">
                Ada feedback?
            </h2>

            <p className="mb-4 text-sm text-gray-400">
                Kasih tahu kami pendapat tentang website ini
            </p>
            <div className="mb-4 space-y-2">
                {feedback.map((feed, index) => (
                <div
                    key={index}
                    className="rounded-md bg-gray-900 px-4 py-3 text-sm text-gray-300"
                >
                    {feed}
                </div>
                ))}
            </div>
            <form
                onSubmit={handleInput}
                className="flex flex-col gap-3 sm:flex-row"
            >
                <input
                name="feedback"
                type="text"
                value={inpFeedback}
                onChange={(e) => {
                    setInpFeedback(e.target.value)
                }}
                placeholder="Tulis feedback kamu..."
                className="flex-1 rounded-md border border-gray-700 bg-gray-900 px-4 py-2 text-sm outline-none focus:border-purple-500"
                />

                <button
                className="rounded-md bg-purple-600 px-5 py-2 text-sm font-medium hover:bg-purple-700"
                type="submit"
                >
                Kirim
                </button>
            </form>

            </div>
        </div>

        <div className="border-t border-gray-800">
            <div className="mx-auto flex max-w-5xl justify-center px-6 py-5 text-sm text-gray-400">
            <p>Footer 2026 Website</p>
            </div>
        </div>
        </footer>
    )
}