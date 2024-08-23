"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { Button, Form, Image, Input, Select, UploadFile } from "antd";
import { UploadChangeParam } from "antd/es/upload";
import Dragger from "antd/es/upload/Dragger";
import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import { ImFilePicture } from "react-icons/im";

import { motion } from "framer-motion";

const options = [
  {
    value: "1",
    label: 1,
  },
  {
    value: "2",
    lavel: 2,
  },
];
export const CreateAddForm = () => {
  const [images, setImages] = useState<UploadChangeParam<UploadFile<[]>>>({
    fileList: [],
    file: {
      name: "",
      uid: "",
    },
  });

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

  const handleChange = (info: UploadChangeParam<UploadFile<[]>>) => {
    // Обновляем состояние с новыми файлами
    setImages(info);
  };

  return (
    <Form
      form={form}
      onFinish={(values) => console.log(values)}
      layout="vertical"
      className="flex flex-col items-end gap-[30px] w-full "
    >
      <div className="grid grid-cols-2 gap-[200px] w-full mt-[22px]">
        <div className="w-full space-y-[30px]">
          <Form.Item
            className="w-full"
            name="category"
            label="Категория"
            rules={[
              {
                required: true,
                message: "Выберите категорию",
              },
            ]}
          >
            <Select
              rootClassName="w-full"
              options={options}
              className="!w-full !h-[50px] !border-none"
            />
          </Form.Item>
          <Form.Item
            className="w-full"
            name="title"
            label="Заголовок"
            rules={[
              {
                required: true,
                message: "Введите заголовк",
              },
            ]}
          >
            <Input
              rootClassName="w-full"
              name="title"
              className="!w-full !h-[50px]"
            />
          </Form.Item>
          <Form.Item
            className="w-full"
            name="station"
            label="Метро"
            rules={[
              {
                required: true,
                message: "Выберите Метро",
              },
            ]}
          >
            <Select
              rootClassName="w-full"
              options={options}
              className="!w-full !h-[50px]"
            />
          </Form.Item>
          <Form.Item
            className="w-full"
            name="address"
            label="Адрес"
            rules={[
              {
                required: true,
                message: "Введите адрес",
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
            className="w-full"
            name="phone"
            label="Телефон"
            rules={[
              {
                required: true,
                message: "Введите телефон",
              },
            ]}
          >
            <Input
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              rootClassName="w-full"
              name="phone"
              className="!w-full !h-[50px]"
            />
          </Form.Item>
        </div>
        <div className="w-full space-y-[30px]">
          <Form.Item
            className="w-full"
            name="sub_category"
            label="Подкатегория"
            rules={[
              {
                required: true,
                message: "Выберите подкатегорию",
              },
            ]}
          >
            <Select
              rootClassName="w-full"
              options={options}
              className="!w-full !h-[50px]"
            />
          </Form.Item>
          <Form.Item
            className="w-full"
            name="description"
            label="Описание"
            rules={[
              {
                required: true,
                message: "Введите описание",
              },
            ]}
          >
            <Input.TextArea
              name="description"
              autoSize={{ minRows: 16, maxRows: 20 }}
            ></Input.TextArea>
          </Form.Item>
        </div>
      </div>
      <div className="flex gap-[25px] flex-wrap w-full justify-center">
        <Form.Item
          name="images"
          rules={[
            {
              required: true,
              message: "Загрузите фотографии",
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
                <span className="text-primary">Нажмите</span>, чтобы загрузить{" "}
                <br />
                фотографии, или перетащите их сюда
              </p>
            </div>
          </Dragger>
        </Form.Item>
        {images && (
          <div className="flex flex-col gap-[20px]">
            <AnimatePresence>
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
                  className="px-[23px] py-[15px] bg-[#F2F4F7] rounded-[10px] flex   gap-[40px] items-center flex-wrap"
                  key={item.uid}
                >
                  <div className="flex gap-[20px] flex-wrap items-center">
                    <ImFilePicture className="text-primary text-[20px]" />
                    <p className="whitespace-nowrap w-[100px] overflow-hidden text-ellipsis">
                      {" "}
                      {item.originFileObj?.name}
                    </p>
                    <Image
                    className="max-h-[100px]"
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
      <Button
        onClick={() => console.log(form.getFieldValue("images"))}
        className="!h-[40px]"
        type="primary"
        htmlType="submit"
      >
        Создать
      </Button>
    </Form>
  );
};
