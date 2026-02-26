import data from '../data/data.json';

export default function Home() {
  const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const item = data[dayOfYear % data.length];

  return (
    <main className="min-h-screen bg-white text-black p-8 font-mono border-[12px] border-black">
      <header className="flex justify-between border-b-4 border-black pb-4 mb-8">
        <h1 className="text-2xl font-black">LA LOGIA</h1>
        <span className="bg-black text-white px-2 py-1 text-xs">ONLINE</span>
      </header>
      <section className="space-y-6">
        <div className="border-4 border-black p-4 inline-block uppercase text-xs font-bold">{item.tipo} // {item.vibe}</div>
        <h2 className="text-5xl font-black leading-tight uppercase">{item.titulo}</h2>
        <p className="text-xl font-bold">{item.autor}</p>
        <p className="text-lg leading-relaxed border-l-4 border-black pl-4 py-2 italic">"{item.resena}"</p>
        <div className="pt-8 space-y-4">
          <a href={item.link} className="block bg-black text-white text-center py-6 text-xl font-black border-4 border-black">CONSEGUIR COPIA</a>
          <button className="block w-full border-4 border-black py-4 font-black uppercase">ARCHIVO [🔒]</button>
        </div>
      </section>
    </main>
  );
}
