import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function AlertModal({openAlertModal, handleOpenAlertModal, author, book, deleteBook, deleteAuthor, entity}) {
  
 
  return (
    <Fragment>
      <Dialog open={openAlertModal} handler={handleOpenAlertModal}>
        <DialogBody divider className="flex items-start justify-end gap-2">
        <div className="flex items-center justify-center mt-1 text-red-900">
            <iconify-icon icon="ant-design:warning-outlined"  width="40"></iconify-icon>
        </div>
            <p>Are you sure you want to remove the {entity} with id #{entity==="author" ? author.id : book.id}?</p>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpenAlertModal}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => (entity==="author" ? deleteAuthor(author.id) : deleteBook(book.id))}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}