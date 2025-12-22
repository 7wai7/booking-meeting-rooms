import { type FormEvent, type ReactNode } from "react";
import css from "../styles/Modal.module.css";
import LoadingSpinner from "./LoadingSpinner";
import { useMutation } from "@tanstack/react-query";

interface GenericModalProps<T> {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  mutationFn: (input: T) => Promise<unknown>;
  onSuccess: (data: T) => void;
  getInput: () => T;
  children: ReactNode; // Поля форми
}

export default function GenericModal<T>({
  isOpen,
  setIsOpen,
  mutationFn,
  onSuccess,
  getInput,
  children,
}: GenericModalProps<T>) {
  const { mutate, isPending, error } = useMutation({
    mutationFn,
    onSuccess: (data) => {
      onSuccess(data as T);
      setIsOpen(false);
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    mutate(getInput());
  };

  if (!isOpen) return null;

  return (
    <section className={css.modal} onClick={() => setIsOpen(false)}>
      <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        {children}
        {error && <p className={css.error_message}>{error.message}</p>}
        {isPending && (
          <div className={css.pending_panel}>
            <LoadingSpinner size={4} description="none" />
          </div>
        )}
      </form>
    </section>
  );
}
