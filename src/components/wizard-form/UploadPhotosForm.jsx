import React, {useEffect} from "react";
import {Button, Form} from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";
import {useDropzone} from "react-dropzone";
import {yupResolver} from "@hookform/resolvers/yup";
import DragImage from "../../assets/images/drag-img.png";
import CloseIcon from "../../assets/images/close.png";
import {UploadImagesSchema} from "helpers/validate";

function UploadPhotosForm({
  onSubmit,
  onBack,
  defaultValues,
  loading,
  imageLoading,
}) {
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
    mode: "onTouched",
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
      if (acceptedFile.length === 0) {
        setError("passport_photo", {
          type: "custom",
          message: "Unsupported Format. Only PNG, JPEG, and JPG are allowed.",
        });
      }
      if (
        acceptedFile[0]?.type === "image/png" ||
        acceptedFile[0]?.type === "image/jpg" ||
        acceptedFile[0]?.type === "image/jpeg"
      ) {
        const file = acceptedFile[0];
        setError("passport_photo", null);
        setValue(
          "passport_photo",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      } else {
        setError("passport_photo", {
          type: "custom",
          message: "Unsupported Format. Only PNG, JPEG, and JPG are allowed.",
        });
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
      if (acceptedFile.length === 0) {
        setError("profile_photo", {
          type: "custom",
          message: "Unsupported Format. Only PNG, JPEG, and JPG are allowed.",
        });
      }
      if (
        acceptedFile[0]?.type === "image/png" ||
        acceptedFile[0]?.type === "image/jpg" ||
        acceptedFile[0]?.type === "image/jpeg"
      ) {
        const file = acceptedFile[0];
        setError("profile_photo", null);
        setValue(
          "profile_photo",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      } else if (acceptedFile.length > 0) {
        setError("profile_photo", {
          type: "custom",
          message: "Unsupported Format. Only PNG, JPEG, and JPG are allowed.",
        });
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
      if (acceptedFile.length === 0) {
        setError("family_photo", {
          type: "custom",
          message: "Unsupported Format. Only PNG, JPEG, and JPG are allowed.",
        });
      }
      if (
        acceptedFile[0]?.type === "image/png" ||
        acceptedFile[0]?.type === "image/jpg" ||
        acceptedFile[0]?.type === "image/jpeg"
      ) {
        const file = acceptedFile[0];
        setError("family_photo", null);
        setValue(
          "family_photo",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      } else if (acceptedFile.length > 0) {
        setError("family_photo", {
          type: "custom",
          message: "Unsupported Format. Only PNG, JPEG, and JPG are allowed.",
        });
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
        <div className="hstack gap-3 flex-wrap uploadphoto-wrap align-items-start">
          <div>
            <div className="fs-16 roboto-font mb-2">
              Headshot photo{" "}
              <span className="text-danger fs-10">(Mandatory)</span>
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
                      <img
                        src={DragImage}
                        alt="drag"
                        className="dragImageCtr"
                      />
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
            <div className="error-image">
              {errors.passport_photo && (
                <Form.Text className="error-image text-danger">
                  {errors.passport_photo.message}
                </Form.Text>
              )}
            </div>
          </div>
          <div>
            <div className="fs-16 roboto-font mb-2">
              Full sized photo{" "}
              <span className="text-danger fs-10">(Mandatory)</span>
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
                      <img
                        src={DragImage}
                        alt="drag1"
                        className="dragImageCtr"
                      />
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
                    // src={fullSizePhoto.preview || fullSizePhoto}
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
            <div className="error-image">
              {errors.profile_photo && (
                <Form.Text className="error-image text-danger">
                  {errors.profile_photo.message}
                </Form.Text>
              )}
            </div>
          </div>
          <div>
            <div className="fs-16 roboto-font mb-2">
              Family photo <span className="fs-10">(Non-mandatory)</span>
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
                      <img
                        src={DragImage}
                        alt="drag2"
                        className="dragImageCtr"
                      />
                    </div>
                  </div>
                )
              }
            />
            {familyPhoto && (
              <div className="preview position-relative">
                <div className="image-item">
                  <img
                    src={familyPhoto.preview || familyPhoto}
                    // src={familyPhoto.preview || familyPhoto}
                    alt="preview"
                  />
                  <div
                    className="closeIcon-img cursor"
                    onClick={() => onDelete("family_photo")}
                  >
                    <img src={CloseIcon} alt="close-icon" />
                  </div>
                </div>
              </div>
            )}
            <div className="error-image">
              {errors.family_photo && (
                <Form.Text className="error-image text-danger">
                  {errors.family_photo.message}
                </Form.Text>
              )}
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
            disabled={imageLoading}
          >
            {imageLoading ? "Loading..." : "Edit Information"}
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
