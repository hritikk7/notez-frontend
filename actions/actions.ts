"use server";

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "../firebase-admin";

export async function createNewDocument() {
  auth.protect();

  const { sessionClaims } = await auth();
  const docCollectionRef = adminDb.collection("documents");
  const docRef = docCollectionRef.add({
    title: "New Doc",
  });

  await adminDb
    .collection("users")
    .doc(sessionClaims?.email!)
    .collection("rooms")
    .doc((await docRef).id)
    .set({
      userId: sessionClaims?.email!,
      role: "owner",
      createdAt: new Date(),
      roomId: (await docRef).id,
    });

  return { docId: (await docRef).id };
}
