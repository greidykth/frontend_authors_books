import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { Fragment, useEffect, useState } from "react";

export const ModalBooks = ({
  openModal,
  handleOpenModal,
  setOpenModal,
  saveBook,
  book,
  getAuthors,
  authors,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (Object.keys(book).length > 0) {
      setTitle(book.title);
      setDescription(book.description);
      setAuthor(book.author.id);
      setPrice(book.price);
    }
    getAuthors(manejoError);
  }, [book]);

  const manejoError = () => {
    console.log("FALLÓ CONSULTA DE AUTORES");
  }

  const handleSave = (e) => {
    e.preventDefault();

    if ([title, description, author, price].includes("")) {
      console.log("Todos los campos son requeridos");
      return;
    }

    setOpenModal(false);

    const objectBook = {
      title,
      description,
      author_id: author,
      price,
    };

    if (book.id) {
      objectBook.id = book.id;
      saveBook(objectBook);
    } else {
      saveBook(objectBook);
    }

    setTitle("");
    setDescription("");
    setPrice("");
    setAuthor("");
  };

  return (
    <Fragment>
      <Dialog open={openModal} handler={handleOpenModal}>
        <DialogHeader>
          {book.id ? "Edit book" : "Create a new book"}
        </DialogHeader>
        <DialogBody divider>
          <div className="flex w-full items-end gap-4 flex-col">
            <Input
              variant="standard"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              variant="standard"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              variant="standard"
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Select
              label="Author"
              value={author}
              onChange={(e) => setAuthor(e)}
            >
              {authors &&
                authors.map((authorMap) => (
                  <Option key={authorMap.id} value={authorMap.id}>{authorMap.name}</Option>
                ))}
            </Select>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="gray"
            onClick={handleOpenModal}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
          <Button variant="gradient" color="blue" onClick={handleSave}>
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};
