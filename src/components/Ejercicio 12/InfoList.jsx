import { useQuery } from "@tanstack/react-query";

import { getInfo } from "./info";

import InfoCard from "./InfoCard";


const InfoList = () => {

  const {data} = useQuery({queryKey: ['info'], queryFn: getInfo});

  const news = data.results

  console.log(news)
    return (
      <section className="container">
      <div className='row mt-3 w-100'>
      {data.results.map((article, index) => (
        <InfoCard key={index} article={article} />
      ))}
    </div>
    </section>
    )
}
export default InfoList;