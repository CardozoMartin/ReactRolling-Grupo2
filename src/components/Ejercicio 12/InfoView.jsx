import { useQuery } from "@tanstack/react-query";

import { getInfo } from "./info";

import InfoForm from "./InfoForm";

const InfoView = (props) => {
    const { article } = props;

    // const { data: newsData, isLoading, isError, error } = useQuery(['info', selectedCountry, selectedCategory]

    const { 
        isLoading, 
        isError ,
      } = useQuery({ queryKey: ['info'], queryFn: getInfo });
    
      if (isLoading) {
        return <div className="text-light text-center">Loading...</div>;
      }

      if (isError){
        return (
          <>
          <h1 className="text-center text-light mt-4">Rolling News 📰</h1>
          <hr className="w-50 container" />
          <div className="alert alert-danger w-50 container mt-3">
            Error fetching data</div>
          </>
        )
      }
    
      return (
        <>
        <h1 className="text-center text-light mt-4">Rolling News 📰</h1>
        <hr className="w-50 container" />
        <InfoForm article={article} />
      </>
      )
}
export default InfoView;


