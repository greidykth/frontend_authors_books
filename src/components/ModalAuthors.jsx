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

export const ModalAuthors = ({ openModal, handleOpenModal, setOpenModal, saveAuthor, author}) => {
    
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [gender, setGender] = useState("");

    useEffect(() => {
        if (Object.keys(author).length > 0) {
            setName(author.name);
            setCountry(author.country);
            setGender(author.gender);
        }
    }, [author]);
    

    const handleSave = (e) => {
        e.preventDefault();

        if([name, country, gender].includes("")){
            console.log("Todos los campos son requeridos");
            return;
        }

        setOpenModal(false);

        const objectAuthor = {
            name,
            country,
            gender
        }

        if (author.id){
            objectAuthor.id = author.id;
            saveAuthor(objectAuthor);
        } else {
            saveAuthor(objectAuthor);
        }

        setName("");
        setCountry("");
        setGender("");

    }

  return (
    <Fragment>
      <Dialog open={openModal} handler={handleOpenModal}>
        <DialogHeader>{author.id ? "Edit author" : "Create a new author" }</DialogHeader>
        <DialogBody divider>
            <div className="flex w-full items-end gap-4 flex-col">
              <Input variant="standard" label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
              <Input variant="standard" label="Country" value={country} onChange={(e) => setCountry(e.target.value)}/>
              <Select label="Gender" value={gender} onChange={(e) => setGender(e)}> 
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
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
