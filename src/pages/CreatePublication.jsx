import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { uploadPublication, uploadInfo } from "../firebase/firebase";

export function CreatePublication() {
  const [url, setUrl] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleFile = async (e) => {
    console.log(e.target.files[0]);
    setUrl(null);
    try {
      const result = await uploadPublication(e.target.files[0]);
      setUrl(result);
      //console.log(result);
    } catch (error) {
      console.log(error);
      alert("Algo salió mal al subir la imagen, intente otra vez");
    }
  };

  const handleSubmitForm = (data) => {
    setUrl(null);
    try {
      const elements = data;
      // console.log({ ...elements, url: url });
      uploadInfo({ ...elements, img: url });
      navigate("/publicaciones");
    } catch (error) {
      console.log(error);
    }
  };

  const Btn = () => {
    if (url === null) {
      return (
        <button
          disabled
          className="bg-[#272244] text-[#5e5e5f] py-2 rounded-lg"
        >
          Publicar
        </button>
      );
    } else {
      return <button className="bg-[#171426] py-2 rounded-lg">Publicar</button>;
    }
  };

  return (
    <section className="w-full min-h-screen bg-[#171426] text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="bg-[#2d2749] rounded-md p-4 w-[500px] max-[510px]:w-[90%] flex flex-col gap-4 overflow-hidden"
      >
        <div>
          <input
            className="w-full outline-none bg-[#171426] py-2 px-4 rounded-lg"
            placeholder="Ingrese su nombre"
            {...register("name", {
              required: true,
              minLength: 5,
            })}
          />
          {errors.name?.type === "required" && (
            <span className="text-red-500">Campo Requerido</span>
          )}
          {errors.name?.type === "minLength" && (
            <span className="text-red-500">Mínimo 5 caracteres</span>
          )}
        </div>
        <div>
          <textarea
            className="w-full outline-none h-[100px] bg-[#171426] py-2 px-4 rounded-lg resize-none"
            placeholder="Esccriba una breve descripción"
            {...register("description", {
              required: true,
              minLength: 15,
            })}
          />
          {errors.name?.type === "required" && (
            <span className="text-red-500">Campo Requerido</span>
          )}
          {errors.name?.type === "minLength" && (
            <span className="text-red-500">Mínimo 15 caracteres</span>
          )}
        </div>
        <div>
          <label>Elija imagen a publicar</label>
          <input onChange={handleFile} className="text-[14px]" type="file" />
        </div>
        <Btn />
      </form>
    </section>
  );
}
