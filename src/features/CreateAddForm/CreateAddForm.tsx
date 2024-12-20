"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { Button, Form, Image, Input, Select, UploadFile } from "antd";
import { UploadChangeParam } from "antd/es/upload";
import Dragger from "antd/es/upload/Dragger";
import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ImFilePicture } from "react-icons/im";
import { motion } from "framer-motion";
import useCategory from "@/hooks/useCategory";
import { createAdd } from "@/services/createAdd";
import { useAtomValue } from "jotai";
import { Subway, subwaysAtom } from "@/atoms/subways";
import { DefaultOptionType } from "antd/es/select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
import { handlePreventScroll } from "@/services/utils/helpers/preventMove";
import { Announce } from "@/atoms/announcements";
import { BASE_IMAGE_URL } from "@/utils/const/env";
import { removeServerImage } from "@/services/removeServerImage";
import { addNewImage } from "@/services/addNewImage";
import { editAnnoune } from "@/services/editAnnoune";
import { useRouter } from "nextjs-toploader/app";
import { useLocale, useTranslations } from "next-intl";
import { citiesAtom, City } from "@/atoms/cities";

export interface CategoryOptionProps {
  label: string;
  value: number;
}
export type CreateFieldsType = {
  address: string;
  category: number;
  description: string;
  phone: string;
  slug: string;
  // station: number;
  city: number;
  sub_category: number;
  title: string;
  images: UploadChangeParam<UploadFile<[]>>;
};
export const CreateAddForm = ({
  announce,
  cities,
}: {
  announce?: Announce;
  cities: City[];
}) => {
  const t = useTranslations("root");

  const router = useRouter();
  const locale = useLocale();
  const [categoryOptions, setCategoryOptions] = useState<CategoryOptionProps[]>(
    []
  );

  const [subCategoriesOption, setSubCategoriesOption] = useState<
    CategoryOptionProps[]
  >([]);
  const [images, setImages] = useState<UploadChangeParam<UploadFile<[]>>>({
    fileList: [],
    file: {
      name: "",
      uid: "",
    },
  });
  const [serverImages, setServerImages] = useState(announce?.images);

  const { categories, isLoad } = useCategory();

  const [form] = Form.useForm();
  const handleRemoveImage = useCallback(
    (file: UploadFile) => {
      const newImages = {
        ...images,
        fileList: images.fileList.filter((item) => item.uid !== file.uid),
      };
      setImages(newImages);
      if (newImages.fileList.length) {
        form.setFieldValue("images", {
          ...newImages,
          fileList: newImages.fileList.filter((item) => item.uid !== file.uid),
        });
      } else {
        form.setFieldValue("images", undefined);
      }
    },
    [form, images]
  );

  useEffect(() => {
    setCategoryOptions(
      categories.map((cat) => ({ label: cat.title, value: cat.id }))
    );
  }, [isLoad, categories]);

  const handleChange = async (info: UploadChangeParam<UploadFile<[]>>) => {
    if (announce) {
      const image = await addNewImage(info.file, announce.id);
      if (image) {
        setServerImages((prev) => (prev?.length ? [...prev, image] : [image]));
      }
    } else {
      setImages(info);
    }
  };
  const mainCategoryChange = useCallback(
    (id: number) => {
      const parentCategory = categories.find((cat) => cat.id === id);
      const options = parentCategory?.sub_categories.map((subCat) => ({
        label: subCat.title,
        value: subCat.id,
      }));

      setSubCategoriesOption(options || []);
    },
    [categories]
  );

  const handleRemoveServerImages = useCallback(
    async (id: number) => {
      if (announce) {
        await removeServerImage(id);
        setServerImages((prev) => prev?.filter((item) => item.id !== id));
      }
    },
    [announce]
  );

  useEffect(() => {
    if (announce) {
      mainCategoryChange(announce.category.id);
    }
  }, [announce, mainCategoryChange]);

  const onSubmit = useCallback(
    async (values: CreateFieldsType) => {
      if (announce) {
        const toastId = toast.loading(t("main.loading"));
        const status = await editAnnoune(
          {
            ...values,
          },
          announce.id
        );
        toast.dismiss(toastId);
        if (status) {
          router.push(`/${locale}/items/${announce.id}`);
        }
      } else {
        const toastId = toast.loading(t("main.loading"));
        const status = await createAdd({
          ...values,
          phone: `+${values.phone}`,
        });
        toast.dismiss(toastId);
        if (status) {
          form.resetFields();
          setImages({
            fileList: [],
            file: {
              name: "",
              uid: "",
            },
          });
        }
      }
    },
    [announce, t, router, locale, form]
  );

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      layout="vertical"
      className="flex flex-col items-end gap-[30px] w-full "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[200px] w-full mt-[22px]">
        <div className="w-full space-y-[16px] md:space-y-[30px]">
          <Form.Item
            initialValue={announce?.category.id}
            className="w-full"
            name="category_id"
            label={t("main.category")}
            rules={[
              {
                required: true,
                message: t("errors.category"),
              },
            ]}
          >
            <Select
              dropdownRender={(menu) => (
                <div
                  className="max-h-[300px] overflow-auto"
                  onTouchMove={handlePreventScroll}
                >
                  {menu}
                </div>
              )}
              showSearch
              filterOption={(input: string, option?: DefaultOptionType) =>
                ((option?.label as string) ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              notFoundContent={"Пусто"}
              rootClassName="w-full"
              options={categoryOptions}
              loading={isLoad}
              className="!w-full !h-[50px] !border-none"
              onChange={mainCategoryChange}
            />
          </Form.Item>
          <Form.Item
            initialValue={announce?.title}
            className="w-full"
            name="title"
            label={t("main.title")}
            rules={[
              {
                required: true,
                message: t("errors.title"),
              },
            ]}
          >
            <Input
              rootClassName="w-full"
              name="title"
              className="!w-full !h-[50px]"
            />
          </Form.Item>
          {/* <Form.Item
            initialValue={announce?.subway?.id}
            className="w-full"
            name="city_id"
            label={t("main.station")}
          >
            <Select
              dropdownRender={(menu) => (
                <div
                  className="max-h-[300px] overflow-auto"
                  onTouchMove={handlePreventScroll}
                >
                  {menu}
                </div>
              )}
              showSearch
              filterOption={(input: string, option?: DefaultOptionType) =>
                ((option?.label as string) ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              notFoundContent={"Пусто"}
              rootClassName="w-full"
              options={subways.map((item) => ({
                value: item.id,
                label: item.title,
              }))}
              className="!w-full !h-[50px]"
            />
          </Form.Item> */}

          <Form.Item
            initialValue={announce?.city?.id}
            className="w-full"
            name="city_id"
            label={t("main.city")}
          >
            <Select
              dropdownRender={(menu) => (
                <div
                  className="max-h-[300px] overflow-auto"
                  onTouchMove={handlePreventScroll}
                >
                  {menu}
                </div>
              )}
              showSearch
              filterOption={(input: string, option?: DefaultOptionType) =>
                ((option?.label as string) ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              notFoundContent={"Пусто"}
              rootClassName="w-full"
              options={cities.map((item) => ({
                value: item.id,
                label: item.title,
              }))}
              className="!w-full !h-[50px]"
            />
          </Form.Item>
          <Form.Item
            initialValue={announce?.address}
            className="w-full"
            name="address"
            label={t("main.address")}
            rules={[
              {
                required: true,
                message: t("errors.address"),
              },
            ]}
          >
            <Input
              rootClassName="w-full"
              name="address"
              className="!w-full !h-[50px]"
            />
          </Form.Item>
          <Form.Item
            initialValue={announce?.phone}
            className="w-full"
            name="phone"
            label={t("main.phone")}
            rules={[
              {
                required: true,
                message: t("errors.phone"),
              },
            ]}
          >
            <PhoneInput
              onlyCountries={["kg", "ru"]}
              inputClass="!w-full !h-[50px] rounded-[8px]"
              inputProps={{
                name: "phone",
              }}
              country="kg"
            />
          </Form.Item>
        </div>
        <div className="w-full space-y-[16px] md:space-y-[30px] max-[767px]:mt-[16px]">
          <Form.Item
            initialValue={announce?.subcategory?.id}
            className="w-full"
            name="sub_category_id"
            label={t("main.subcategory")}
          >
            <Select
              dropdownRender={(menu) => (
                <div
                  className="max-h-[300px] overflow-auto"
                  onTouchMove={handlePreventScroll}
                >
                  {menu}
                </div>
              )}
              showSearch
              filterOption={(input: string, option?: DefaultOptionType) =>
                ((option?.label as string) ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              notFoundContent="Подкатегории не найдены"
              rootClassName="w-full"
              options={subCategoriesOption}
              className="!w-full !h-[50px]"
            />
          </Form.Item>
          <Form.Item
            initialValue={announce?.description}
            className="w-full"
            name="description"
            label={t("main.description")}
            rules={[
              {
                required: true,
                message: t("errors.description"),
              },
            ]}
          >
            <Input.TextArea
              name="description"
              autoSize={{ minRows: 21, maxRows: 24 }}
            ></Input.TextArea>
          </Form.Item>
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex gap-[25px] flex-wrap w-full justify-center">
          <Form.Item
            name="images"
            rules={[
              {
                required: announce ? false : true,
                message: t("errors.images"),
              },
            ]}
          >
            <Dragger
              fileList={images.fileList}
              className="!bg-white"
              multiple
              accept="image/jpeg, image/png"
              showUploadList={false}
              customRequest={() => {}}
              onRemove={handleRemoveImage}
              onChange={handleChange}
            >
              <div className="px-[24px] py-[60px] flex flex-col gap-[30px] cursor-pointer items-center">
                <p className="text-[30px] text-[#98A0B4]">
                  <ImFilePicture />
                </p>
                <p className="text-[20px] font-[500]">
                  <span className="text-primary">{t("main.press")}</span>,{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("announceForm.uploadImage"),
                    }}
                  />
                </p>
              </div>
            </Dragger>
          </Form.Item>

          {images && (
            <div className="flex flex-col gap-[20px]">
              <AnimatePresence>
                {serverImages?.length
                  ? serverImages.map((item) => (
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -100,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          x: -100,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="px-[23px] py-[15px] bg-[#F2F4F7] rounded-[10px] flex   gap-[40px] items-center md:flex-wrap"
                        key={item.id}
                      >
                        <div className="flex gap-[20px] md:flex-wrap items-center">
                          <ImFilePicture className="text-primary text-[20px]" />

                          <Image
                            className="max-h-[100px] w-auto object-contain"
                            src={BASE_IMAGE_URL + item.path}
                            alt="image"
                          />
                        </div>
                        <div className="flex gap-[20px] items-center">
                          <TrashIcon
                            className="text-primary text-[20px] size-[20px] cursor-pointer"
                            onClick={() => handleRemoveServerImages(item.id)}
                          />
                        </div>
                      </motion.div>
                    ))
                  : undefined}
                {images.fileList.map((item, idx) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -100,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      x: -100,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="px-[23px] py-[15px] bg-[#F2F4F7] rounded-[10px] flex   gap-[40px] items-center md:flex-wrap"
                    key={item.uid}
                  >
                    <div className="flex gap-[20px] md:flex-wrap items-center">
                      <ImFilePicture className="text-primary text-[20px]" />
                      <p className="whitespace-nowrap w-[100px] overflow-hidden text-ellipsis">
                        {" "}
                        {item.originFileObj?.name}
                      </p>
                      <Image
                        className="max-h-[100px] w-auto object-contain"
                        src={URL.createObjectURL(item.originFileObj as Blob)}
                        alt="image"
                      />
                    </div>
                    <div className="flex gap-[20px] items-center">
                      <TrashIcon
                        className="text-primary text-[20px] size-[20px] cursor-pointer"
                        onClick={() => handleRemoveImage(item)}
                      />
                      <p className="whitespace-nowrap">
                        {item.size && (item.size / 1000 / 1000).toFixed(2)} МБ
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
      <Button className="!h-[40px]" type="primary" htmlType="submit">
        {announce ? t("main.edit") : t("main.create")}
      </Button>
    </Form>
  );
};
