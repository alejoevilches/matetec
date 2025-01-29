export default function CardsLayout({children}: {children: React.ReactNode}){
    return (
        <article className="bg-white m-4 p-4 border border-slate-400 rounded-xl shadow-md">
            {children}
        </article>
    )
}