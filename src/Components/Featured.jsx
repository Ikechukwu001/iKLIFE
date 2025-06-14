export default function Featured(){
    return(
        <div className="w-[140px] sm:w-[160px] p-2">
            <div className="mt-4 rounded-4xl flex justify-center items-center">
                <img src="/src/assets/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background.jpg" 
                     alt="#"
                     className="object-contain" 
                />
            </div>                    
            <p className="text-sm font-medium text-gray-800 mt-2 text-left">
                Pain Relief
            </p>
            <div className="mt-4 rounded-4xl flex justify-center items-center">
                <img src="/src/assets/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background.jpg" 
                     alt="#"
                     className="object-contain" 
                />
            </div>                    
            <p className="text-sm font-medium text-gray-800 mt-2 text-left">
                Pain Relief
            </p>
        </div>
    )
}