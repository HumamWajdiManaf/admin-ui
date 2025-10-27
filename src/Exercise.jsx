import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
          name="Humam"
          email="humammanaf10@gmail.com"
          street="Jl Abimanyu No 5"
          city="Semarang Tengah"/>
          
          <UserCard 
          name="Wajdi"
          email="wajdimanaf10@gmail.com"
          street="Jl Abimanyu No 4"
          city="Semarang Utara"/>

          <UserCard 
          name="Manaf"
          email="manafhumam10@gmail.com"
          street="Jl Abimanyu No 7"
          city="Semarang Timur"/>
        </div>
      </div>
    </>
  );
}

export default Exercise;