import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";
import AlertModal from "./AlertModal";
import { ModalBooks } from "./ModalBooks";

const Books = ({ books, getBooks, getAuthors, authors}) => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [entity, setEntity] = useState("");
  const [book, setBook] = useState({});
  
  const handleOpenAlertModal = () => setOpenAlertModal(!openAlertModal);

  const handleOpenAccordion = (value) => {
    setOpenAccordion(openAccordion === value ? 0 : value);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    setBook({});
  }

  const saveBook = (bookSave) => {
    console.log(bookSave);
    let url = "";
    let method = "";

    if (bookSave.id){
        url=`http://localhost:8002/books/${bookSave.id}`;
        method = "PUT"
    } else {
        url="http://localhost:8002/books"
        method = "POST"
    }

      fetch(url, {
        method: method,
        headers: {
          "Content-type": "application/json;charset=UTF-8",
          "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTVjYTIzMGU3YjYzMjcxOTBhNTkxNzIwYjBiZDZkN2M3NGQ2N2U5YjJiNzA1MDQxMThkMTc1NTQwNmI2YjNhNzkzMWQzNmY0YWY5M2NmNDkiLCJpYXQiOjE2NjExNzYxNDguNjQzMDI1LCJuYmYiOjE2NjExNzYxNDguNjQzMDI3LCJleHAiOjE2OTI3MTIxNDguNjI3MjMsInN1YiI6IiIsInNjb3BlcyI6W119.efV9HzqqhUSL-muBoJdL5mAIQkxBmD6lSXJ5iHnHSnejo7-fJUl4r9Gc5lP7PRmapN8fplWfVfVfb4xePoDl5YH9xUiaOwRQ_6Ws6YNTeg0RYM5LpmVnDwtvcumPv34MGO7Qztk-AxZhugoVg2sAxnFSb6rrbYVSlsi4-aWoALR_6G6S_zk_-SoTpP4n_WRXEIDRAznRg5uH5r9GlmGKNAT59mMpWlpyRVwUU1cf5F2q58LmHy7AqjKNMkiFzPveHwzGWbFfmb2e9YZ3dhur3CDVkwxlvihRx60v6R22q6JTq94OsgoLK7As6LCxvt7LgxZvQbT3kYDhh4GkOzvWikQ3KHQXq1Rsr2rBcr_RzI_OgPth5se-cTFbGCmnLqeSQmYIxn-ptu3bDBbR8S__jhGNncm34XlcPN422iD9Q07B4aY5LvM_y2AMdxxmWhwrnBnq3fts7vKu1UmCiQpYj9QGRZup9wjWlx7nVdZQ0iuHTqnEOLPKvhmM8OFL4CC5-bHWabkX0O98-2HMZZopjo9_jqYGiZ34NbujfedHczdr7dRliWcNcnGBKNx8qdSoyH6Kqa2Zx7n4zxeplBKNgGTth9W8swmh9PGxN2JT0-QUdQ2FP-35ujhmavspYrySLjVzQ6D4b_k_W7FB2OtddxS82MtoEIAqGtPLse5C9ew"

      },
        body: JSON.stringify(bookSave),
      })
      .then(response => response.json())
          .then(resultado => {
            getBooks();
      })
      .catch((error) => {
        
        console.log(error);
    })
  }

  const manejoErrorGetBook = () => {
    console.log(`FALLÓ CONSULTA DE LIBRO`);
  };

  const handleEditBook = (book_id, manejoError) => {
    console.log(book_id);
    const url=`http://localhost:8002/books/${book_id}`
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTVjYTIzMGU3YjYzMjcxOTBhNTkxNzIwYjBiZDZkN2M3NGQ2N2U5YjJiNzA1MDQxMThkMTc1NTQwNmI2YjNhNzkzMWQzNmY0YWY5M2NmNDkiLCJpYXQiOjE2NjExNzYxNDguNjQzMDI1LCJuYmYiOjE2NjExNzYxNDguNjQzMDI3LCJleHAiOjE2OTI3MTIxNDguNjI3MjMsInN1YiI6IiIsInNjb3BlcyI6W119.efV9HzqqhUSL-muBoJdL5mAIQkxBmD6lSXJ5iHnHSnejo7-fJUl4r9Gc5lP7PRmapN8fplWfVfVfb4xePoDl5YH9xUiaOwRQ_6Ws6YNTeg0RYM5LpmVnDwtvcumPv34MGO7Qztk-AxZhugoVg2sAxnFSb6rrbYVSlsi4-aWoALR_6G6S_zk_-SoTpP4n_WRXEIDRAznRg5uH5r9GlmGKNAT59mMpWlpyRVwUU1cf5F2q58LmHy7AqjKNMkiFzPveHwzGWbFfmb2e9YZ3dhur3CDVkwxlvihRx60v6R22q6JTq94OsgoLK7As6LCxvt7LgxZvQbT3kYDhh4GkOzvWikQ3KHQXq1Rsr2rBcr_RzI_OgPth5se-cTFbGCmnLqeSQmYIxn-ptu3bDBbR8S__jhGNncm34XlcPN422iD9Q07B4aY5LvM_y2AMdxxmWhwrnBnq3fts7vKu1UmCiQpYj9QGRZup9wjWlx7nVdZQ0iuHTqnEOLPKvhmM8OFL4CC5-bHWabkX0O98-2HMZZopjo9_jqYGiZ34NbujfedHczdr7dRliWcNcnGBKNx8qdSoyH6Kqa2Zx7n4zxeplBKNgGTth9W8swmh9PGxN2JT0-QUdQ2FP-35ujhmavspYrySLjVzQ6D4b_k_W7FB2OtddxS82MtoEIAqGtPLse5C9ew"
    },
    })
    .then(response => response.json())
        .then(resultado => {
          if(resultado.data){
          setBook(resultado.data);
          setOpenModal(true);
          } else {
            manejoError();
          }
    })
    .catch((error) => {
      console.log(error);
      manejoError();
  })
  }


  const handleDeleteBook = (book) => {
    setOpenAlertModal(true);
    setBook(book);
    setEntity("book");
}

const deleteBook = (book_id) => {
    const url=`http://localhost:8002/books/${book_id}`
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
          getBooks();
    })
    .catch((error) => {
      console.log(error);
  })
  }

  return (
    <div className="md:w-1/2 lg:w-1/2 mx-5">
      <h2 className="text-xl font-bold text-green-900">Books</h2>
      <div className="flex items-end flex-col">
        <Button 
        className="mt-4" 
        color="green" 
        size="sm" 
        variant="filled"
        onClick={handleOpenModal}>
          New Book
        </Button>
      </div>
      <div className="mt-4">
        {
            books && books.length ? (
        
        books.map((book) => (
          <Fragment key={book.id}>
            <Accordion
              open={openAccordion === book.id}
              onClick={() => handleOpenAccordion(book.id)}
            >
              <AccordionHeader className="text-lg text-green-900 text-left">
              {book.id}. {book.title}
              </AccordionHeader>
              <AccordionBody>
                <p className="text-lg text-gray-900">
                  <strong>Description: </strong>
                  {book.description}
                </p>
                <p className="text-lg text-gray-900">
                  <strong>Price: </strong>
                  {book.price}
                </p>
                <p className="text-lg text-gray-900">
                  <strong>Author: </strong>
                  {book.author_id}
                </p>
                <div className="flex items-center justify-end">
                <Button
                  className="mt-4 mr-1"
                  color="blue"
                  size="sm"
                  variant="filled"
                  onClick={() => handleEditBook(book.id, manejoErrorGetBook)}
                  >
                  Editar
                </Button>
                <Button
                  className="mt-4"
                  color="red"
                  size="sm"
                  variant="text"
                  onClick={() => handleDeleteBook(book)}
                  >
                  Eliminar
                </Button>
                </div>
              </AccordionBody>
            </Accordion>
          </Fragment>
        ))) : (
            <h2 className="text-md">
          There is not books. Create a new book and it will appear in the
          list.
        </h2>
        )}
        {openModal && 
            <ModalBooks
                openModal={openModal}
                setOpenModal={setOpenModal}
                handleOpenModal={handleOpenModal}
                saveBook={saveBook}
                book={book}
                getAuthors={getAuthors}
                authors={authors}
            />
        }
        {openAlertModal && 
            <AlertModal
                openAlertModal={openAlertModal}
                handleOpenAlertModal={handleOpenAlertModal}
                book={book}
                deleteBook={deleteBook}
                entity={entity}
            />
        }
      </div>
    </div>
  );
};

export default Books;
