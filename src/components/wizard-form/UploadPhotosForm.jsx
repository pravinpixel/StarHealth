import React, {useEffect} from "react";
import {Button, Form} from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";
import {useDropzone} from "react-dropzone";
import {yupResolver} from "@hookform/resolvers/yup";
import DragImage from "../../assets/images/drag-img.png";
import CloseIcon from "../../assets/images/close.png";
import {UploadImagesSchema} from "helpers/validate";

function UploadPhotosForm({onSubmit, onBack, defaultValues, loading}) {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    setError,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(UploadImagesSchema),
    mode: "all",
    reValidateMode: "onSubmit",
    defaultValues,
  });

  const passportPhoto = watch("passport_photo", null);
  const fullSizePhoto = watch("profile_photo", null);
  const familyPhoto = watch("family_photo", null);

  // passport size drop zome
  const {
    getRootProps: getRootPassportPhotoProps,
    getInputProps: getInputPassportPhotoProps,
  } = useDropzone({
    onDrop: (acceptedFile) => {
      setError("passport_photo");
      if (acceptedFile.length > 0) {
        const file = acceptedFile[0];
        setValue(
          "passport_photo",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
    maxFiles: 1,
  });

  // full size drop zone
  const {
    getRootProps: getRootFullSizePhotoProps,
    getInputProps: getInputFullSizePhotoProps,
  } = useDropzone({
    onDrop: (acceptedFile) => {
      setError("profile_photo");
      if (acceptedFile.length > 0) {
        const file = acceptedFile[0];
        setValue(
          "profile_photo",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
    maxFiles: 1,
  });

  // family photo drop zone

  const {
    getRootProps: getRootFamilyPhotoProps,
    getInputProps: getInputFamilyPhotoProps,
  } = useDropzone({
    onDrop: (acceptedFile) => {
      if (acceptedFile.length > 0) {
        const file = acceptedFile[0];
        setValue(
          "family_photo",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
    maxFiles: 1,
  });

  const onDelete = (value) => {
    setValue(value, null);
  };

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  return (
    <section>
      <div className="vstack gap-2 mb-4">
        <div className="fs-28 fw-600 dark-blue">Upload Your Photos</div>
      </div>
      <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="hstack gap-2 flex-wrap uploadphoto-wrap">
          <div>
            <div className="fs-16 roboto-font mb-2">
              Headshot photo<span className="text-danger">*</span>
            </div>
            <Controller
              name="passport_photo"
              control={control}
              defaultValue={null}
              render={() =>
                !passportPhoto && (
                  <div {...getRootPassportPhotoProps({className: "dropzone"})}>
                    <input {...getInputPassportPhotoProps()} />
                    <div>
                      <img src={DragImage} alt="drag" />
                    </div>
                  </div>
                )
              }
            />
            {passportPhoto && (
              <div className="preview position-relative">
                <div className="image-item">
                  <img
                    src={passportPhoto.preview || passportPhoto}
                    alt="preview"
                  />
                  <div
                    className="closeIcon-img cursor"
                    onClick={() => onDelete("passport_photo")}
                  >
                    <img src={CloseIcon} alt="close-icon" />
                  </div>
                </div>
              </div>
            )}
            <div style={{height: "60px"}} className="error-image">
              {errors.passport_photo && (
                <Form.Text className="error-image text-danger">
                  {errors.passport_photo.message}
                </Form.Text>
              )}
              <div className="text-danger">
                The file size of the photo should be less than 5MB
              </div>
            </div>
          </div>
          <div>
            <div className="fs-16 roboto-font mb-2">
              Full sized photo<span className="text-danger">*</span>
            </div>
            <Controller
              name="profile_photo"
              control={control}
              defaultValue={null}
              render={() =>
                !fullSizePhoto && (
                  <div {...getRootFullSizePhotoProps({className: "dropzone"})}>
                    <input {...getInputFullSizePhotoProps()} />
                    <div>
                      <img src={DragImage} alt="drag1" />
                    </div>
                  </div>
                )
              }
            />
            {fullSizePhoto && (
              <div className="preview position-relative">
                <div className="image-item">
                  <img
                    src={fullSizePhoto.preview || fullSizePhoto}
                    alt="preview"
                  />
                  <div
                    className="closeIcon-img cursor"
                    onClick={() => onDelete("profile_photo")}
                  >
                    <img src={CloseIcon} alt="close-icon" />
                  </div>
                </div>
              </div>
            )}
            <div style={{height: "60px"}} className="error-image">
              {errors.profile_photo && (
                <Form.Text className="error-image text-danger">
                  {errors.profile_photo.message}
                </Form.Text>
              )}
              <div className="text-danger">
                The file size of the photo should be less than 5MB
              </div>
            </div>
          </div>
          <div>
            <div className="fs-16 roboto-font mb-2">
              Family photo (Optional)
            </div>
            <Controller
              name="family_photo"
              control={control}
              defaultValue={null}
              render={() =>
                !familyPhoto && (
                  <div {...getRootFamilyPhotoProps({className: "dropzone"})}>
                    <input {...getInputFamilyPhotoProps()} />
                    <div>
                      <img src={DragImage} alt="drag2" />
                    </div>
                  </div>
                )
              }
            />
            {familyPhoto && (
              <div className="preview position-relative">
                <div className="image-item">
                  <img src={familyPhoto.preview || familyPhoto} alt="preview" />
                  <div
                    className="closeIcon-img cursor"
                    onClick={() => onDelete("family_photo")}
                  >
                    <img src={CloseIcon} alt="close-icon" />
                  </div>
                </div>
              </div>
            )}
            <div style={{height: "60px"}} className="error-image">
              <Form.Text className="text-danger">
                The file size of the photo should be less than 5MB
              </Form.Text>
            </div>
          </div>
        </div>
        <div className="my-5 hstack gap-4 justify-content-between">
          <Button
            onClick={() =>
              onBack({
                passport_photo: passportPhoto,
                profile_photo: fullSizePhoto,
                family_photo: familyPhoto,
              })
            }
            className="secondary-button"
          >
            Edit Information
          </Button>
          <Button className="primary-button" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Upload Images"}
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default UploadPhotosForm;
