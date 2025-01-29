interface ICardsTitle{
  title: string,
  subtitle: string
}

export default function CardsTitle({title, subtitle}: ICardsTitle){
  return(
      <div className="pb-4">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="text-gray-500">{subtitle}</p>
      </div>
  )
}