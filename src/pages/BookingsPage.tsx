import { useState } from "react";
import { BookingsList } from "../components/BookingsList";
import css from "../styles/BookingsPage.module.css";
import CreateBookingModal from "../components/CreateBookingModal";

export default function BookingsPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <h1 className={css.header}>Bookings</h1>
      <button
        className={css.create_booking_btn}
        onClick={() => setIsOpenModal(true)}
      >
        New booking
      </button>
      <BookingsList />
      <CreateBookingModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </>
  );
}
