"use-client";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function NewDocumentButton() {
  const router = useRouter();

  const [isPending, setUseTransition] = useTransition();
  const handleCreateNewDoc = () => {
    setUseTransition(async () => {
      const { docId } = createNewDocument();
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
