// app/dashboard/loading.tsx
export default function Loader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="relative w-24 h-24">
        <div className="absolute w-full h-full bg-blue-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute w-full h-full bg-purple-500 rounded-full animate-ping delay-150 opacity-75"></div>
        <div className="absolute w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg">
          <span className="text-blue-600 font-bold animate-pulse">🔐</span>
        </div>
      </div>
      <p className="absolute bottom-12 text-gray-700 font-medium text-lg animate-pulse">
        Checking Auth...
      </p>
    </div>
  );
}
