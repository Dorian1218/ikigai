"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link"

export const [file, setFile] = useState();

function page() {
  const router = useRouter();
  const [fileUrl, setFileUrl] = useState();
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    } else {
      setFileUrl(undefined);
    }
  }, [file]);

  const tags = ["Music", "Fiction", "Technology", "Misc"];
  const [checkedState, setCheckedState] = useState(
    new Array(tags.length).fill(false)
  );

  const handleCheckbox = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    console.log(checkedState);
  }, [checkedState]);

  return (
    <div className="w-full h-full flex items-center justify-center flex-col p-4">
      <h1 className="text-3xl">Create Article</h1>
      <div className="w-full flex">
        <div className="w-1/3 p-3">
          <p className="text-xl">Article Title</p>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full my-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className="text-xl">Choose Thumbail</p>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs mt-4"
            onChange={handleFile}
            accept="image/png, image/jpeg, image/tiff, image/bmp, image/jpg"
          />
          {fileUrl && file && (
            <Image
              width={400}
              height={400}
              src={fileUrl}
              alt={file.name}
              className="my-4"
            />
          )}
          <div className="flex items-center mb-3">
            <p className="text-xl">Tags</p>
            <IoMdAdd
              size={25}
              className="ml-2 hover:cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />
          </div>
          <div className="flex">
            {checkedState.map((check, index) => {
              if (check) {
                return (
                  <div key={index} className="mr-2">
                    <div className="badge badge-neutral">{tags[index]}</div>
                  </div>
                );
              }
            })}
          </div>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg mb-3">Tags</h3>
              <div>
                {tags.map((tags, index) => {
                  return (
                    <div className="flex mb-3" key={index}>
                      <input
                        type="checkbox"
                        className="checkbox mr-4"
                        onChange={() => handleCheckbox(index)}
                      />
                      <p>{tags}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </dialog>
        </div>
        <div className="w-2/3 p-3">
          <p className="text-xl">Body</p>
          <textarea
            className="textarea textarea-bordered w-full my-4"
            placeholder="Write Article"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button
            className="btn btn-active btn-secondary"
          >
            <Link href={{ pathname: "/home/createarticle/preview", query: { title: title, imageUrl: fileUrl, body: body, tags: tags, tagState: checkedState } }}>Preview</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;