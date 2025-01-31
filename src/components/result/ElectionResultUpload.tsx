import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import uploadicon from "../../../public/images/upload.png";
import line from "../../../public/images/line.png";
import { MdCancel } from "react-icons/md";

const ElectionResultsUpload: React.FC = () => {
  const [files, setFiles] = useState<{ file: File; progress: number }[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      progress: 0, // Initialize progress to 0%
    }));
    setFiles(newFiles);
  }, []);

  const removeFile = (name: string) => {
    setFiles(files.filter((f) => f.file.name !== name));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "application/json": [".json"],
    },
  });

  const uploadFile = async (file: File, index: number) => {
    const formData = new FormData();
    formData.append("file", file);

    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "YOUR_UPLOAD_ENDPOINT");

      // Track progress
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded / event.total) * 100);
          setFiles((prevFiles) =>
            prevFiles.map((f, i) =>
              i === index ? { ...f, progress: percent } : f
            )
          );
        }
      };

      xhr.onload = () => resolve(xhr.response);
      xhr.send(formData);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const uploads = files.map((fileObj, index) => uploadFile(fileObj.file, index));
    await Promise.all(uploads);
    console.log("All files uploaded successfully");
  };

  return (
    <div className="h-[85vh] flex justify-center items-center">
      <div className="max-w-[80%] w-[50%] mx-auto p-5 border border-gray-300 rounded-lg bg-[#FFFFFF]">
        <h2 className="text-lg font-semibold mb-3">Upload Election Results</h2>
        <div
          {...getRootProps({
            className: "border-2 border-dashed border-[#FF6600] rounded-md p-6 text-center cursor-pointer flex flex-col justify-between items-center h-[60%]",
          })}
        >
          <Image src={uploadicon} alt="upload-icon" width={50} height={50} />
          <input {...getInputProps()} />
          <p className="text-gray-600 text-[14px]">Drag & drop files here</p>
          <div className="flex items-center justify-center">
            <Image src={line} alt="line" />
            <p className="px-[3%]"> OR </p>
            <Image src={line} alt="line" />
          </div>
          <button className="rounded-lg border border-[#3CB371] text-[#3CB371] px-[2%] py-[1%] w-[30%] text-[12px] font-semibold">
            Browse Files
          </button>
        </div>

        <ul className="mt-3">
          <p>Only supports .csv, .xlsx, and .json files</p>
          {files.map((fileObj, index) => {
            const { file, progress } = fileObj;
            const fileSize = (file.size / 1024).toFixed(2); // Convert to KB

            return (
              <li key={file.name} className="border rounded-md p-2 my-2 flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold">{file.name}</p>
                  <p className="text-xs text-gray-500">{fileSize} KB</p>
                </div>
                <div className="flex items-center space-x-2">
                  {progress > 0 && (
                    <div className="w-24 bg-gray-200 rounded-md overflow-hidden">
                      <div className="bg-green-500 h-2" style={{ width: `${progress}%` }}></div>
                    </div>
                  )}
                  <button onClick={() => removeFile(file.name)}>
                    <MdCancel size={18} className="text-gray-500" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-end space-x-5">
          <button onClick={handleSubmit} className="px-4 py-2 border border-[#CECECE] text-[#6D6D6D] rounded-lg hover:bg-gray-100">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-[#3CB371] text-white rounded-lg hover:bg-green-600">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectionResultsUpload;
