// src/components/Toast.jsx
import { Toaster, toast } from "react-hot-toast";
import { Share2, CheckCircle2, XCircle } from "lucide-react";

export function ToastContainer() {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      toastOptions={{
        duration: 2500,
        style: {
          borderRadius: "12px",
          background: "#fff",
          color: "#333",
          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
          border: "1px solid #eee",
          padding: "12px 16px",
        },
      }}
    />
  );
}

export const showToast = {
  success: (message) =>
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } flex items-center gap-3 bg-maroon text-white rounded-xl px-4 py-3 shadow-lg border border-maroon/80`}
        >
          <CheckCircle2 size={20} className="text-white" />
          <span className="font-medium">{message}</span>
        </div>
      ),
      { duration: 2000 }
    ),

  error: (message) =>
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } flex items-center gap-3 bg-white border border-red-200 rounded-xl px-4 py-3 shadow-md`}
        >
          <XCircle size={20} className="text-red-600" />
          <span className="text-gray-800 font-medium">{message}</span>
        </div>
      ),
      { duration: 2500 }
    ),

  info: (message) =>
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } flex items-center  gap-3 bg-maroon border border-white rounded-xl px-4 py-3 shadow-md`}
        >
          <Share2 size={20} className="text-white" />
          <span className="text-white font-medium">{message}</span>
        </div>
      ),
      { duration: 2000 }
    ),
};
