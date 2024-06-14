import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Form from "./components/Form";
import ChatComponent from "./components/Chat";
import { db } from "@/lib/db";
import { getServerAuthSession } from "@/server/auth";

async function getData() {
  const session = await getServerAuthSession();
  const id=""
  // const prisma2 = new PrismaClient2();
  const userType = session?.user.image?.type;
  const email=session?.user?.email
  const userId=session?.user?.id
  let data;
  if (userType == "client") {
    data = await db.message.findMany({
        where: {
            clientId:userId,
            lawyerId:id
          },
      select: {
        message: true,
        id: true,
        client: {
          select: {
            full_name: true,
          },
        },
        lawyer: {
            select: {
              full_name: true,
              photo: true,
            },
          }
      },
      orderBy: {
        createdAt: "asc",
      },
      take: 50,
    });
  } else {
    data = await db.message.findMany({
        where: {
            clientId:id,
            lawyerId:userId
          },
      select: {
        message: true,
        id: true,
        lawyer: {
          select: {
            full_name: true,
            photo: true,
          },
        },
        client: {
            select: {
              full_name: true,
            },
          }
      },
      orderBy: {
        createdAt: "asc",
      },
      take: 50,
    });
  }

  return data;
}

// Add
export const dynamic = "force-dynamic";

export default async function Chathomepage() {
  const session = await getServerAuthSession();
  const data = await getData();

  if (!session) {
    redirect("/signin");
  }

  console.log(`session is: ${session.user.email}`);

  return (
    <div className="h-screen bg-gray-200 flex flex-col">
      <ChatComponent data={data as any} />
      <Form />
    </div>
  );
}