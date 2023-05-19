export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-cyan-700">
      <div className="z-10 h-60 w-40 rounded-b-3xl rounded-t-full bg-lime-200 shadow-xl" />
      <div className="relative -mt-6 h-20 w-8 rounded-xl bg-rose-500" />
      <div className="absolute bottom-[270px] z-10 h-4 w-8 bg-zinc-800/50" />
    </div>
  )
}
