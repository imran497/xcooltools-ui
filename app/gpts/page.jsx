'use client';

import { getGptsListAPI } from "@/lib/services/gpts";
import { useEffect, useState } from "react";
import { AddGptModal } from "@/app/gpts/components/AddGptModal";
import { GPTsList } from "@/app/gpts/components/GptsList";

const Gpts = () => {
  const [gptsData, setGptsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    if (!showAddModal) getGptsList();
  }, [showAddModal]);

  const getGptsList = async () => {
    setIsLoading(true);
    const data = await getGptsListAPI();
    setGptsData(data);
    setIsLoading(false);
  }

  return (
    <div className="container mx-auto">
      {/* <div className="navbar bg-base-100 mt-4">
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
        </div>
      </div> */}

      <div className="flex justify-between items-center my-6">
        <h3 className="text-lg">GPTs Directory</h3>
        <button className="btn btn-active btn-accent" onClick={() => setShowAddModal(true)}>Add GPT</button>
      </div>
      {
        isLoading
        ? (
          <div class="flex justify-center items-center h-screen">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-slate-900"></div>
          </div>
        )
        : <GPTsList gptsList={gptsData} />
      }

      <AddGptModal showAddModal={showAddModal} closeModal={() => setShowAddModal(false)}/>
    </div>
  );
};

export default Gpts;
