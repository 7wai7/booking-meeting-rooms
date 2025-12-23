import type { MeetingRoom } from "./MeetingRoom";
import type { User } from "./User";

export type BookingInput = {
  roomId: string;
  date: string;
  start: string;
  end: string;
  description: string;
};

export type Booking = {
  id: string;
  ownerId: string;
} & BookingInput;

export type BookingFull = {
  room?: MeetingRoom;
  user?: User;
  isOwn?: boolean;
} & Booking;

export type UpdateBookingInput = Partial<BookingInput>;
