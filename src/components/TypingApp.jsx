export default function TypingApp() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Top Banner Ad */}
      <div className="w-full h-20 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-400">Ad Space (Top Banner 728x90)</span>
      </div>

      <div className="flex flex-1">
        {/* Left Sidebar Ad */}
        <div className="w-48 bg-gray-800 flex items-center justify-center">
          <span className="text-gray-400 rotate-90">Ad Space (160x600)</span>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Typing Practice</h1>

          {/* Typing text */}
          <div className="bg-gray-700 p-4 rounded-xl mb-4">
            <p className="text-lg">earlier rare alien line rear line</p>
          </div>

          {/* Keyboard Area */}
          <div className="bg-gray-800 p-4 rounded-xl">
            <span className="text-gray-400">[Keyboard Visualization Here]</span>
          </div>
        </div>

        {/* Right Sidebar Ad */}
        <div className="w-48 bg-gray-800 flex items-center justify-center">
          <span className="text-gray-400 rotate-90">Ad Space (160x600)</span>
        </div>
      </div>

      {/* Bottom Banner Ad */}
      <div className="w-full h-20 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-400">Ad Space (Bottom Banner 728x90)</span>
      </div>
    </div>
  );
}
