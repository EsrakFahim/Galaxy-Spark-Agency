import { useQuery } from "react-query";

const fetchSingleDataFromDB = async (collection, id) => {
      const { data, isError, isLoading } = useQuery({
            queryKey: ["data", collection],
            queryFn: async () => {
                  const response = await fetch(
                        `http://localhost:5000/api/v1/${collection}:${id}`
                  );
                  const data = await response.json();
                  console.log("data from inside", data);
                  return data;
            },
            refetchOnWindowFocus: false,
      });
      console.log("data from outside", data);
      return { data, isError, isLoading };
};

export default fetchSingleDataFromDB;
