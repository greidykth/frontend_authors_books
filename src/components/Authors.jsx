import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";
import AlertModal from "./AlertModal";
import { ModalAuthors } from "./ModalAuthors";

const Authors = ({ authors, getAuthors}) => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [entity, setEntity] = useState("");
  const [author, setAuthor] = useState({});
  
  const handleOpenAlertModal = () => setOpenAlertModal(!openAlertModal);

  const handleOpenAccordion = (value) => {
    setOpenAccordion(openAccordion === value ? 0 : value);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    setAuthor({});
  }

  const saveAuthor = (authorSave) => {
    console.log(authorSave);
    let url = "";
    let method = "";

    if (authorSave.id){
        url=`http://localhost:8002/authors/${authorSave.id}`;
        method = "PUT"
    } else {
        url="http://localhost:8002/authors"
        method = "POST"
    }

      fetch(url, {
        method: method,
        headers: {
          "Content-type": "application/json;charset=UTF-8",
          "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTVjYTIzMGU3YjYzMjcxOTBhNTkxNzIwYjBiZDZkN2M3NGQ2N2U5YjJiNzA1MDQxMThkMTc1NTQwNmI2YjNhNzkzMWQzNmY0YWY5M2NmNDkiLCJpYXQiOjE2NjExNzYxNDguNjQzMDI1LCJuYmYiOjE2NjExNzYxNDguNjQzMDI3LCJleHAiOjE2OTI3MTIxNDguNjI3MjMsInN1YiI6IiIsInNjb3BlcyI6W119.efV9HzqqhUSL-muBoJdL5mAIQkxBmD6lSXJ5iHnHSnejo7-fJUl4r9Gc5lP7PRmapN8fplWfVfVfb4xePoDl5YH9xUiaOwRQ_6Ws6YNTeg0RYM5LpmVnDwtvcumPv34MGO7Qztk-AxZhugoVg2sAxnFSb6rrbYVSlsi4-aWoALR_6G6S_zk_-SoTpP4n_WRXEIDRAznRg5uH5r9GlmGKNAT59mMpWlpyRVwUU1cf5F2q58LmHy7AqjKNMkiFzPveHwzGWbFfmb2e9YZ3dhur3CDVkwxlvihRx60v6R22q6JTq94OsgoLK7As6LCxvt7LgxZvQbT3kYDhh4GkOzvWikQ3KHQXq1Rsr2rBcr_RzI_OgPth5se-cTFbGCmnLqeSQmYIxn-ptu3bDBbR8S__jhGNncm34XlcPN422iD9Q07B4aY5LvM_y2AMdxxmWhwrnBnq3fts7vKu1UmCiQpYj9QGRZup9wjWlx7nVdZQ0iuHTqnEOLPKvhmM8OFL4CC5-bHWabkX0O98-2HMZZopjo9_jqYGiZ34NbujfedHczdr7dRliWcNcnGBKNx8qdSoyH6Kqa2Zx7n4zxeplBKNgGTth9W8swmh9PGxN2JT0-QUdQ2FP-35ujhmavspYrySLjVzQ6D4b_k_W7FB2OtddxS82MtoEIAqGtPLse5C9ew"

      },
        body: JSON.stringify(authorSave),
      })
      .then(response => response.json())
          .then(resultado => {
            getAuthors(() => manejoError);
      })
      .catch((error) => {
        
        console.log(error);
    })
  }

  const manejoError = () => {
    console.log("FALLÓ CONSULTA DE AUTORES");
  }

  const handleEditAuthor = (author_id) => {
    const url=`http://localhost:8002/authors/${author_id}`
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTVjYTIzMGU3YjYzMjcxOTBhNTkxNzIwYjBiZDZkN2M3NGQ2N2U5YjJiNzA1MDQxMThkMTc1NTQwNmI2YjNhNzkzMWQzNmY0YWY5M2NmNDkiLCJpYXQiOjE2NjExNzYxNDguNjQzMDI1LCJuYmYiOjE2NjExNzYxNDguNjQzMDI3LCJleHAiOjE2OTI3MTIxNDguNjI3MjMsInN1YiI6IiIsInNjb3BlcyI6W119.efV9HzqqhUSL-muBoJdL5mAIQkxBmD6lSXJ5iHnHSnejo7-fJUl4r9Gc5lP7PRmapN8fplWfVfVfb4xePoDl5YH9xUiaOwRQ_6Ws6YNTeg0RYM5LpmVnDwtvcumPv34MGO7Qztk-AxZhugoVg2sAxnFSb6rrbYVSlsi4-aWoALR_6G6S_zk_-SoTpP4n_WRXEIDRAznRg5uH5r9GlmGKNAT59mMpWlpyRVwUU1cf5F2q58LmHy7AqjKNMkiFzPveHwzGWbFfmb2e9YZ3dhur3CDVkwxlvihRx60v6R22q6JTq94OsgoLK7As6LCxvt7LgxZvQbT3kYDhh4GkOzvWikQ3KHQXq1Rsr2rBcr_RzI_OgPth5se-cTFbGCmnLqeSQmYIxn-ptu3bDBbR8S__jhGNncm34XlcPN422iD9Q07B4aY5LvM_y2AMdxxmWhwrnBnq3fts7vKu1UmCiQpYj9QGRZup9wjWlx7nVdZQ0iuHTqnEOLPKvhmM8OFL4CC5-bHWabkX0O98-2HMZZopjo9_jqYGiZ34NbujfedHczdr7dRliWcNcnGBKNx8qdSoyH6Kqa2Zx7n4zxeplBKNgGTth9W8swmh9PGxN2JT0-QUdQ2FP-35ujhmavspYrySLjVzQ6D4b_k_W7FB2OtddxS82MtoEIAqGtPLse5C9ew"
    },
    })
    .then(response => response.json())
        .then(resultado => {
          setAuthor(resultado.data);
          setOpenModal(true);
    })
    .catch((error) => {
      console.log(error);
  })
  }

  const handleDeleteAuthor = (author) => {
    setOpenAlertModal(true);
    setAuthor(author);
    setEntity("author");
}

const deleteAuthor = (author_id) => {
    const url=`http://localhost:8002/authors/${author_id}`
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTVjYTIzMGU3YjYzMjcxOTBhNTkxNzIwYjBiZDZkN2M3NGQ2N2U5YjJiNzA1MDQxMThkMTc1NTQwNmI2YjNhNzkzMWQzNmY0YWY5M2NmNDkiLCJpYXQiOjE2NjExNzYxNDguNjQzMDI1LCJuYmYiOjE2NjExNzYxNDguNjQzMDI3LCJleHAiOjE2OTI3MTIxNDguNjI3MjMsInN1YiI6IiIsInNjb3BlcyI6W119.efV9HzqqhUSL-muBoJdL5mAIQkxBmD6lSXJ5iHnHSnejo7-fJUl4r9Gc5lP7PRmapN8fplWfVfVfb4xePoDl5YH9xUiaOwRQ_6Ws6YNTeg0RYM5LpmVnDwtvcumPv34MGO7Qztk-AxZhugoVg2sAxnFSb6rrbYVSlsi4-aWoALR_6G6S_zk_-SoTpP4n_WRXEIDRAznRg5uH5r9GlmGKNAT59mMpWlpyRVwUU1cf5F2q58LmHy7AqjKNMkiFzPveHwzGWbFfmb2e9YZ3dhur3CDVkwxlvihRx60v6R22q6JTq94OsgoLK7As6LCxvt7LgxZvQbT3kYDhh4GkOzvWikQ3KHQXq1Rsr2rBcr_RzI_OgPth5se-cTFbGCmnLqeSQmYIxn-ptu3bDBbR8S__jhGNncm34XlcPN422iD9Q07B4aY5LvM_y2AMdxxmWhwrnBnq3fts7vKu1UmCiQpYj9QGRZup9wjWlx7nVdZQ0iuHTqnEOLPKvhmM8OFL4CC5-bHWabkX0O98-2HMZZopjo9_jqYGiZ34NbujfedHczdr7dRliWcNcnGBKNx8qdSoyH6Kqa2Zx7n4zxeplBKNgGTth9W8swmh9PGxN2JT0-QUdQ2FP-35ujhmavspYrySLjVzQ6D4b_k_W7FB2OtddxS82MtoEIAqGtPLse5C9ew"
    },
    })
    .then(response => response.json())
        .then(resultado => {
          setOpenAlertModal(false);
          getAuthors(() => manejoError);
    })
    .catch((error) => {
      console.log(error);
  })
  }

  return (
    <div className="md:w-1/2 lg:w-1/2 mx-5">
      <h2 className="text-xl font-bold text-indigo-900">Authors</h2>
      <div className="flex items-end flex-col">
        <Button 
        className="mt-4" 
        color="green" 
        size="sm" 
        variant="filled"
        onClick={handleOpenModal}>
          New Author
        </Button>
      </div>
      <div className="mt-4">
        {
            authors && authors.length ? (
        
        authors.map((author) => (
          <Fragment key={author.id}>
            <Accordion
              open={openAccordion === author.id}
              onClick={() => handleOpenAccordion(author.id)}
            >
              <AccordionHeader className="text-lg text-indigo-900">
              {author.id}. {author.name}
              </AccordionHeader>
              <AccordionBody>
                <p className="text-lg text-gray-900">
                  <strong>Gender: </strong>
                  {author.gender}
                </p>
                <p className="text-lg text-gray-900">
                  <strong>Country: </strong>
                  {author.country}
                </p>
                <div className="flex items-center justify-end">
                <Button
                  className="mt-4 mr-1"
                  color="blue"
                  size="sm"
                  variant="filled"
                  onClick={() => handleEditAuthor(author.id)}
                  >
                  Editar
                </Button>
                <Button
                  className="mt-4"
                  color="red"
                  size="sm"
                  variant="text"
                  onClick={() => handleDeleteAuthor(author)}
                  >
                  Eliminar
                </Button>
                </div>
              </AccordionBody>
            </Accordion>
          </Fragment>
        ))) : (
            <h2 className="text-md">
          There is not authors. Create a new author and it will appear in the
          list.
        </h2>
        )}
        {openModal && 
            <ModalAuthors
                openModal={openModal}
                setOpenModal={setOpenModal}
                handleOpenModal={handleOpenModal}
                saveAuthor={saveAuthor}
                author={author}
            />
        }
        {openAlertModal && 
            <AlertModal
                openAlertModal={openAlertModal}
                handleOpenAlertModal={handleOpenAlertModal}
                author={author}
                deleteAuthor={deleteAuthor}
                entity={entity}
            />
        }
      </div>
    </div>
  );
};

export default Authors;
