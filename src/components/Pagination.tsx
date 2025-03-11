import { Button } from "@heroui/react";

export default function Pagination({ page, setPage }: { page: number; setPage: (p: number) => void }) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Anterior</Button>
      <Button onClick={() => setPage(page + 1)}>Siguiente</Button>
    </div>
  );
}
