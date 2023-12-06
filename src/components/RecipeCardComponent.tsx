
export default function RecipeCardComponent({data}:any) {
  
  
  return (
      <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer">
        <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
        <p className="text-gray-600">
          {data.cuisine}
        </p>
      </div>
  );
}
