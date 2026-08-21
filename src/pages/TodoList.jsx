export default function TodoList() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[600px] bg-white px-12 py-10 shadow-lg">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-semibold">
            Todo List
          </h1>

          <button
            type="button"
            className="text-gray-300 hover:text-gray-500"
          >
            🗑️
          </button>
        </div>

        <div className="flex flex-col">
          
          {/* <div className="flex items-center gap-5 py-5 border-b border-gray-200">
            <div className="w-6 h-6 rounded-full border-4 border-blue-600"></div>
            <p className="text-xl text-gray-600">
              Do a very important task
            </p>
          </div> */}

        </div>
      </div>
    </main>
  )
}