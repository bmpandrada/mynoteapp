const Note = ({data, deleteNote}) => {
    return ( 

        <div key={data.id} 
                className={`p-4 rounded-lg bg-white shadow-md border-l-4 text-left`} 
                style={{
                    borderColor: 
                    data.priority === "High" 
                    ? "red" 
                    : data.priority === "Medium" 
                    ? "orange" 
                    : "green"
                }} >
                    <h3 className="text-lg font-bold">
                        {data.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                        <strong>Category:</strong> {data.category}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Priority:</strong> {data.priority}
                    </p>
                    <p className="mt-2">
                        {data.description}
                    </p>
                    <button onClick={()=> deleteNote(data.id)} className="w-full text-center mt-3 text-red-500 cursor-pointer hover:text-red-700">
                        Delete 🗑️
                    </button>
                </div>

     );
}
 
export default Note;