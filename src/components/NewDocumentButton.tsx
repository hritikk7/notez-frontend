"use client";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "../../actions/actions";

function NewDocumentButton() {

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const handleCreateNewDoc = () => {
    startTransition(async () => {
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  };

  return (
    <Button onClick={handleCreateNewDoc} disabled={isPending}>
      {isPending ? `Creating...` : `New Document`}
    </Button>
  );
}

export default NewDocumentButton;
