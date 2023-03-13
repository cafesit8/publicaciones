import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { Link } from "react-router-dom";
import Article from "../components/Article";

export function Publication() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const queryCollection = collection(db, "publications");
    getDocs(queryCollection).then((res) => {
      const results = res.docs.map((item) => ({ id: item.id, ...item.data() }));
      setData(results);
    });
  }, []);

  return (
    <section className="w-full bg-[#171426] py-10 min-h-screen text-white flex items-center justify-center">
      <div className="w-[1000px] max-[1100px]:w-[92%]">
        <h1 className="text-center text-[20px] mb-5">Red Social</h1>
        <div className="w-[700px] m-auto max-[780px]:w-full mb-5">
          <Link to="/createPublication">
            <button className="bg-[#2b2744] py-2 px-4 rounded-lg">
              Crear Publicación
            </button>
          </Link>
        </div>
        <div className="w-[700px] flex flex-col gap-5 m-auto max-[780px]:w-full">
          {data.length === 0 ? (
            <h1 className="text-center text-lg">Cargando</h1>
          ) : (
            data.map((item) => <Article key={item.id} item={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
