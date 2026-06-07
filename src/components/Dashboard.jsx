export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <div className="glass-panel p-6 rounded-xl text-center">
        <div className="text-4xl font-bold text-red-500">1,429+</div>
        <div className="text-xs uppercase tracking-wider text-gray-400">Active Labs</div>
      </div>
      <div className="glass-panel p-6 rounded-xl text-center">
        <div className="text-4xl font-bold text-yellow-500">42%</div>
        <div className="text-xs uppercase tracking-wider text-gray-400">Compute Load</div>
        <div className="w-full bg-gray-700 h-1 rounded mt-2"><div className="bg-yellow-500 h-full w-[42%]"></div></div>
      </div>
      <div className="glass-panel p-6 rounded-xl text-center">
        <div className="text-4xl font-bold text-blue-400">2.4M</div>
        <div className="text-xs uppercase tracking-wider text-gray-400">Data points/sec</div>
      </div>
    </div>
  );
}