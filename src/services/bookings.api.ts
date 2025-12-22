import type { Booking, BookingInput, BookingWithRoom } from "../types/Booking";
import type { MeetingRoom } from "../types/MeetingRoom";
import { delay } from "../utils/delay";
import { LS, read, write } from "../utils/storage";

export const createBookingApi = async (input: BookingInput) => {
  await delay();
  const rooms: MeetingRoom[] = read(LS.ROOMS, []);

  const room = rooms.find((r) => r.id == input.roomId);
  if (!room) throw new Error("Room not found");

  const newBooking: Booking = {
    id: crypto.randomUUID(),
    ...input,
  };

  const bookings: Booking[] = read(LS.BOOKINGS, []);
  write(LS.BOOKINGS, [...bookings, newBooking]);

  return {
    ...newBooking,
    room,
  };
};

export const getAllBookingsApi = async (): Promise<BookingWithRoom[]> => {
  await delay();
  const rooms: MeetingRoom[] = read(LS.ROOMS, []);
  const bookings: Booking[] = read(LS.BOOKINGS, []);

  const result: BookingWithRoom[] = [];
  for (const booking of bookings) {
    const room = rooms.find((r) => r.id == booking.roomId);
    if (room)
      result.push({
        ...booking,
        room,
      });
  }

  return result;
};

export const deleteBookingApi = async (id: string) => {
  await delay();
  const bookings: Booking[] = read(LS.BOOKINGS, []);
  const index = bookings.findIndex((booking) => booking.id === id);
  if (index === -1) throw new Error("Not found");
  const deleted = bookings[index];
  bookings.splice(index, 1);
  write(LS.BOOKINGS, bookings);
  return deleted;
};
