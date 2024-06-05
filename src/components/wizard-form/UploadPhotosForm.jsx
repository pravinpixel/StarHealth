import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm, Controller } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import DragImage from "../../assets/images/drag-img.png";
import CloseIcon from "../../assets/images/close.png";

function UploadPhotosForm({ onSubmit, onBack, defaultValues }) {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: {errors},
  // } = useForm({defaultValues});
  const { control, handleSubmit, setValue, watch } = useForm();
  const image = watch('image', null);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setValue('image', Object.assign(file, {
        preview: URL.createObjectURL(file),
      }));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', maxFiles: 1 });

  const onDelete = () => {
    setValue('image', null);
  };

  // const onSubmit = (data) => {
  //   console.log('Form data:', data);
  //   if (data.image) {
  //     URL.revokeObjectURL(data.image.preview);
  //   }
  // };

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image.preview);
      }
    };
  }, [image]);

  return (
    <section>
      <div className="vstack gap-2">
        <div className="fs-28 fw-600 dark-blue">Upload Your Photos</div>
        <div className="fs-18 grey-color roboto-font">
          To get started, please upload the following 3 photos:
        </div>
        <div className="fs-18 grey-color roboto-font">
          1. A clear passport-sized photo of yourself.
        </div>
        <div className="fs-18 grey-color roboto-font">
          2. A full-body photo of yourself.
        </div>
        <div className="fs-18 grey-color roboto-font">
          3. A lovely photo with your family.
        </div>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="image"
          control={control}
          defaultValue={null}
          render={() => (
            !image &&
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <div>
                <img src={DragImage} alt="DragImage" />
              </div>
            </div>
          )}
        />
        {image && (
          <div className="preview position-relative">
            <div className="image-item">
              <img src={image.preview} alt="preview" />
              <div className="closeIcon-img cursor" onClick={onDelete}>
                <img src={CloseIcon} alt="CloseIcon" />
              </div>
              {/* <button type="button" onClick={onDelete}>Delete</button> */}
            </div>
          </div>
        )}
        <div className="my-5 hstack gap-4 justify-content-between">
          <Button onClick={() => onBack()} className="secondary-button">
            Edit Information
          </Button>
          <Button className="primary-button" type="submit">
            Upload Images
          </Button>
        </div>
      </Form>
    </section>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <div>
    //     <label>Email</label>
    //     <input
    //       {...register("email", {
    //         // required: "Email is required",
    //         // pattern: {value: /^\S+@\S+$/i, message: "Invalid email address"},
    //       })}
    //     />
    //     {errors.email && <p>{errors.email.message}</p>}
    //   </div>
    //   <div>
    //     <label>Age</label>
    //     <input
    //       type="number"
    //       {...register("age", {
    //         // required: "Age is required",
    //         // min: {value: 18, message: "You must be at least 18 years old"},
    //       })}
    //     />
    //     {errors.age && <p>{errors.age.message}</p>}
    //   </div>
    //   <div>
    //     <label>Image 1</label>
    //     <input
    //       type="file"
    //       {...register(
    //         "image1"
    //         //  {required: "Image 1 is required"}
    //       )}
    //     />
    //     {errors.image1 && <p>{errors.image1.message}</p>}
    //   </div>
    //   <div>
    //     <label>Image 2</label>
    //     <input
    //       type="file"
    //       {...register(
    //         "image2"
    //         // {required: "Image 2 is required"}
    //       )}
    //     />
    //     {errors.image2 && <p>{errors.image2.message}</p>}
    //   </div>
    //   <button type="button" onClick={onBack}>
    //     Back
    //   </button>
    //   <button type="submit">Next</button>
    // </form>
  );
}

export default UploadPhotosForm;
