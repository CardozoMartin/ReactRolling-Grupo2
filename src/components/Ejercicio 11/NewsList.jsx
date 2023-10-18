import { useMutation } from "@tanstack/react-query";

// import { toast } from "sonner";

// import NewsCard from "./NewsCard";
import SearchForm from "./SearchForm";
// import { createRandomId } from "../../Utils";

const NewsList = () => {

    const getNews = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?language=es&q=${query}&pageSize=15&apiKey=${API_KEY}`);
        return response.json();
    }

    // const {data, isLoading, isError} = useQuery(['news'], getNews)

    // const addNew = useMutation(postNew);

    // const handleClick = () => {
    //     addNew.mutate({
    //       id: createRandomId(0, 5000),
    //       userId: createRandomId(0, 5000),
    //       title: 'News',
    //       completed: false,
    //     });
    //   };
    
    //   if (isError) {
    //     toast.error('Ocurrió un error');
    //   }
    
    //   if (addNew.isError) {
    //     toast.error('Ocurrió un error al buscar la noticia');
    //   }

  return (
    <section className="news-list text-light text-center">
        <h1 className="mt-5 mb-5">ROLLING NEWS 📰</h1>
        {/* {data.results.map(new => ( */}
          <SearchForm />
        {/* <NewsCard /> */}
        {/* ))} */}
    </section>
  )
}

export default NewsList;