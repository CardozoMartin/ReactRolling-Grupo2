import { useQuery } from "@tanstack/react-query";

import { getInfo } from "./info";

import InfoForm from "./InfoForm";
import InfoList from "./InfoList";

const InfoView = () => {
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
        <InfoForm />
        <InfoList />
      </>
      )
}
export default InfoView;


