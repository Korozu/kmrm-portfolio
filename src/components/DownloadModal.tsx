"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
  passwordHash: string;
  isDownloading?: boolean;
}

export default function DownloadModal({ isOpen, onClose, onDownload, passwordHash, isDownloading = false }: Readonly<DownloadModalProps>) {
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useLanguage();

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setError(false);

    if (value.length > 0) {
      const isCorrect = value === passwordHash;
      setIsPasswordCorrect(isCorrect);

      if (value.length >= 4 && !isCorrect) {
        setError(true);
      }
    } else {
      setIsPasswordCorrect(false);
    }
  };

  const handleDownload = () => {
    if (isPasswordCorrect && !isDownloading) {
      onDownload();
      onClose();
      setPassword("");
      setIsPasswordCorrect(false);
      setError(false);
    }
  };

  const handleClose = () => {
    onClose();
    setPassword("");
    setIsPasswordCorrect(false);
    setError(false);
  };

  const getBorderClass = () => {
    if (error) return "border-red-500/50 focus:ring-red-500/20";
    if (isPasswordCorrect) return "border-green-500/50 focus:ring-green-500/20";
    return "border-zinc-800 focus:ring-primary/20";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-white">
                  {t.download.title}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div className="space-y-3">
                <p className="text-zinc-300 leading-relaxed">
                  {t.download.description}{" "}
                  <a
                    href="https://instagram.com/kmrm.shots"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors font-medium underline decoration-primary/50 hover:decoration-secondary underline-offset-2"
                  >
                    Instagram
                  </a>.
                </p>
                <p className="text-sm text-zinc-400">
                  {t.download.instructionContact}
                </p>
              </div>

              {/* Password Input */}
              <div className="space-y-3">
                <label htmlFor="password" className="block text-sm font-medium text-zinc-300">
                  {t.download.passwordLabel}
                </label>
                <div>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <Lock className={`w-5 h-5 transition-colors ${
                        isPasswordCorrect ? "text-green-500" : "text-zinc-500"
                      }`} />
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => handlePasswordChange(e.target.value)}
                      placeholder={t.download.passwordPlaceholder}
                      className={`w-full pl-11 pr-4 py-3 bg-zinc-950 border rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all ${getBorderClass()}`}
                    />
                  </div>
                  {error && (
                    <p className="mt-2 text-sm text-red-400">
                      {t.download.passwordError}
                    </p>
                  )}
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={!isPasswordCorrect || isDownloading}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  isPasswordCorrect && !isDownloading
                    ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                    : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                }`}
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Téléchargement en cours...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    {t.download.downloadButton}
                  </>
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-800">
              <p className="text-xs text-zinc-500 text-center">
                {t.download.footer}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
