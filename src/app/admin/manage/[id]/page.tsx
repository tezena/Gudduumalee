"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { verifyLawyer, fetchLawyerById } from "../../api/lawyers";
import { useRouter } from "next/navigation";

// async function fetchLawyer(id: any) {
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization: "Bearer ....",
//     },
//   };

//   const response = await fetch(
//     `http://localhost:3000/api/lawyers/${id}`,
//     options
//   );
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// }

// async function AcceptLawyer(id: string) {
//   console.log("clecked");

//   const options = {
//     method: "POST",
//     headers: {
//       accept: "application/json",
//       Authorization: "Bearer ....",
//     },
//   };

//   const response = await fetch(
//     `http://localhost:3000/api/lawyers/${id}/verify`,
//     options
//   );
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// }

const queryClient = new QueryClient();

export function Detail() {
  const router = useRouter();

  const param = useParams();
  const { id } = param;
  const { data, isLoading, error } = useQuery({
    queryKey: ["lawyer"],
    queryFn: () => fetchLawyerById(id),
  });

  const { mutateAsync } = useMutation({
    mutationFn: () => verifyLawyer(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lawyer"] });
      router.back()
    },
  });

  if (isLoading) return <div className="w-full font-sans min-h-screen pt-24 pl-10 lg:pl-72 bg-[#f2f6fa]">
     <div
      
          className="w-full h-full pt-28 flex gap-5 items-center justify-center m-auto"
        >
          <Icon icon="eos-icons:loading" width="80" height="80" color="green" />
          <p className="text-2xl text-green-500">...Loading</p>
        </div>
  </div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="min-h-screen bg-[#f2f6fa] text-black flex items-center justify-center font-sans pt-24 px-10">
      <div className="w-full max-w-4xl p-8 pt-16 bg-white border border-gray-300 rounded-xl shadow-md relative">
        <Link
          href="/admin/manage"
          className="absolute left-2 top-3 cursor-pointer"
        >
          <Icon
            icon="tdesign:arrow-left"
            style={{ color: "black" }}
            width={30}
            height={27}
          />
        </Link>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg">Name: </h1>
            <p className="text-gray-700">{data?.email}</p>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg">Profile Image:</h1>
            <a
              className="text-blue-500 hover:underline"
              href={data?.resume}
              target="_blank"
            >
              {data?.resume}
            </a>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg">Working Language:</h1>
            <p className="text-gray-700">Amharic, Tigray, Oromifa</p>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg">Working Area:</h1>
            <p className="text-gray-700">Suprim Court, High Court</p>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg">Lawyer Document:</h1>
            <a
              className="text-blue-500 hover:underline"
              href={data?.qualification}
              target="_blank"
            >
              {data?.qualification}
            </a>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg">Kebele ID:</h1>
            <a
              className="text-blue-500 hover:underline"
              href={data?.identification_card}
              target="_blank"
            >
              {data?.identification_card}
            </a>
          </div>
          <hr className="border-gray-300" />
        </div>
        <div className="flex items-center justify-between p-4 mt-4 ">
          <button className="px-6 py-2  rounded-2xl outline outline-[#c156f3] text-[#61207f]">
            REJECT
          </button>
          <button
            className="px-6 py-2  rounded-2xl outline bg-[#5e207b] text-white"
            onClick={async () => {
              try {
                mutateAsync();

              } catch (e) {
                console.log(e);
              }
            }}
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
