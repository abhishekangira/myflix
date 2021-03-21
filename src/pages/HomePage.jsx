import { useEffect, useState } from "react";
import axios from "axios";

import NowShowing from "../components/NowShowing";

export default function HomePage() {
  const [nowShowingList, setNowShowingList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://api.tvmaze.com/schedule?country=US");
      setNowShowingList(response.data);
      console.log(response.data)
    })();
  }, []);

  return (
    <div>
      <NowShowing list={nowShowingList} />
    </div>
  );
}
