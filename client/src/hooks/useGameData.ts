import { useEffect, useState } from "react";
import httpService from "../apis/httpService";
import routes from "../apis/routes.json";

interface IBoard {
  positions: Array<any>;
}
const useGameData = (id: number) => {
  const [board, setData] = useState<IBoard>({ positions: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await httpService.post(routes.NEW_GAME, {
          id,
        });
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    board,
    loading,
  };
};

export default useGameData;
