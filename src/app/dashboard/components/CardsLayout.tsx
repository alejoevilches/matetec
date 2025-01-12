export default function CardsLayout({children}: {children: React.ReactNode}){
    return (
        <article className="my-8 mx-48 p-4 border bg-white">
            {children}
        </article>
    )
}