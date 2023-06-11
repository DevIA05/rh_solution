import { createSignal } from "solid-js";

const Modal = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* <!-- You can open the modal using ID.showModal() method --> */}
      <button class="btn" onclick={openModal}>open modal</button>
      <dialog open={isOpen()} onClose={closeModal} class="modal">
        <form method="dialog" class="modal-box w-11/12 max-w-5xl">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">Click the button below to close</p>
          <div class="modal-action">
            {/* <!-- if there is a button, it will close the modal --> */}
            <button class="btn" onClick={closeModal}>Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;