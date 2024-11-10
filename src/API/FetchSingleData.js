import { useQuery } from "react-query";
import axios from "axios";

const useFetchSingleData = (collection, id, serviceSlag) => {
      return useQuery(
            ["data", collection, id],
            async () => {
                  const { data } = await axios.get(
                        `${
                              process.env.NEXT_PUBLIC_PRODUCTION_SERVER_API
                        }/${collection}/${id || serviceSlag}`
                  );
                  console.log("Fetched data:", data);
                  return data;
            },
            {
                  refetchOnWindowFocus: false, // Optional: Disable refetching on window focus
            }
      );
};

export default useFetchSingleData;
