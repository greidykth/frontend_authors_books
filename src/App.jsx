import { useEffect, useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";

function App() {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAuthors(manejoErrorList);
    getBooks(manejoErrorList);
  }, []);

  
  const manejoErrorList = (entity) => {
    console.log(`FALLÓ CONSULTA DE ${entity}`);
  };

  const getAuthors = (manejoError) => {
    const url = "http://localhost:8002/authors";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTVjYTIzMGU3YjYzMjcxOTBhNTkxNzIwYjBiZDZkN2M3NGQ2N2U5YjJiNzA1MDQxMThkMTc1NTQwNmI2YjNhNzkzMWQzNmY0YWY5M2NmNDkiLCJpYXQiOjE2NjExNzYxNDguNjQzMDI1LCJuYmYiOjE2NjExNzYxNDguNjQzMDI3LCJleHAiOjE2OTI3MTIxNDguNjI3MjMsInN1YiI6IiIsInNjb3BlcyI6W119.efV9HzqqhUSL-muBoJdL5mAIQkxBmD6lSXJ5iHnHSnejo7-fJUl4r9Gc5lP7PRmapN8fplWfVfVfb4xePoDl5YH9xUiaOwRQ_6Ws6YNTeg0RYM5LpmVnDwtvcumPv34MGO7Qztk-AxZhugoVg2sAxnFSb6rrbYVSlsi4-aWoALR_6G6S_zk_-SoTpP4n_WRXEIDRAznRg5uH5r9GlmGKNAT59mMpWlpyRVwUU1cf5F2q58LmHy7AqjKNMkiFzPveHwzGWbFfmb2e9YZ3dhur3CDVkwxlvihRx60v6R22q6JTq94OsgoLK7As6LCxvt7LgxZvQbT3kYDhh4GkOzvWikQ3KHQXq1Rsr2rBcr_RzI_OgPth5se-cTFbGCmnLqeSQmYIxn-ptu3bDBbR8S__jhGNncm34XlcPN422iD9Q07B4aY5LvM_y2AMdxxmWhwrnBnq3fts7vKu1UmCiQpYj9QGRZup9wjWlx7nVdZQ0iuHTqnEOLPKvhmM8OFL4CC5-bHWabkX0O98-2HMZZopjo9_jqYGiZ34NbujfedHczdr7dRliWcNcnGBKNx8qdSoyH6Kqa2Zx7n4zxeplBKNgGTth9W8swmh9PGxN2JT0-QUdQ2FP-35ujhmavspYrySLjVzQ6D4b_k_W7FB2OtddxS82MtoEIAqGtPLse5C9ew",
      },
    })
      .then((response) => response.json())
      .then((resultado) => {
        console.log(resultado);
        if(resultado.data){
          setAuthors(resultado.data);
        }else{
          let entity = "authors";
          manejoError(entity);
        } 
      })
      .catch((error) => {
        let entity = "authors";
        console.log(error);
        manejoError(entity);
      });
  };

  

  const getBooks = (manejoError) => {
    const url = "http://localhost:8002/books";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTVjYTIzMGU3YjYzMjcxOTBhNTkxNzIwYjBiZDZkN2M3NGQ2N2U5YjJiNzA1MDQxMThkMTc1NTQwNmI2YjNhNzkzMWQzNmY0YWY5M2NmNDkiLCJpYXQiOjE2NjExNzYxNDguNjQzMDI1LCJuYmYiOjE2NjExNzYxNDguNjQzMDI3LCJleHAiOjE2OTI3MTIxNDguNjI3MjMsInN1YiI6IiIsInNjb3BlcyI6W119.efV9HzqqhUSL-muBoJdL5mAIQkxBmD6lSXJ5iHnHSnejo7-fJUl4r9Gc5lP7PRmapN8fplWfVfVfb4xePoDl5YH9xUiaOwRQ_6Ws6YNTeg0RYM5LpmVnDwtvcumPv34MGO7Qztk-AxZhugoVg2sAxnFSb6rrbYVSlsi4-aWoALR_6G6S_zk_-SoTpP4n_WRXEIDRAznRg5uH5r9GlmGKNAT59mMpWlpyRVwUU1cf5F2q58LmHy7AqjKNMkiFzPveHwzGWbFfmb2e9YZ3dhur3CDVkwxlvihRx60v6R22q6JTq94OsgoLK7As6LCxvt7LgxZvQbT3kYDhh4GkOzvWikQ3KHQXq1Rsr2rBcr_RzI_OgPth5se-cTFbGCmnLqeSQmYIxn-ptu3bDBbR8S__jhGNncm34XlcPN422iD9Q07B4aY5LvM_y2AMdxxmWhwrnBnq3fts7vKu1UmCiQpYj9QGRZup9wjWlx7nVdZQ0iuHTqnEOLPKvhmM8OFL4CC5-bHWabkX0O98-2HMZZopjo9_jqYGiZ34NbujfedHczdr7dRliWcNcnGBKNx8qdSoyH6Kqa2Zx7n4zxeplBKNgGTth9W8swmh9PGxN2JT0-QUdQ2FP-35ujhmavspYrySLjVzQ6D4b_k_W7FB2OtddxS82MtoEIAqGtPLse5C9ew",
      },
    })
      .then((response) => response.json())
      .then((resultado) => {
        setBooks(resultado.data);
        if(resultado.data){
          setBooks(resultado.data);
        }else{
          let entity ="books";
          manejoError(entity);
        }
      })
      .catch((error) => {
        console.log(error);
        let entity ="books";
        manejoError(entity);
      });
  };

  return (
    <div className="container mx-auto mt-10 pb-20">
      <h2 className="text-4xl text-center font-bold text-indigo-900">
        Books and Authors
      </h2>
      <div className="mt-12 md:flex">
        <Authors authors={authors} getAuthors={getAuthors} />
        <Books
          books={books}
          getBooks={getBooks}
          getAuthors={getAuthors}
          authors={authors}
        />
      </div>
    </div>
  );
}

export default App;
