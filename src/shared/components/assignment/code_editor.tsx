"use client";

import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { sql } from "@codemirror/lang-sql";
import { php } from "@codemirror/lang-php";
import { GoCopy } from "react-icons/go";
import { githubDark } from "@uiw/codemirror-theme-github";

export default function CodeEditor() {
  const [code, setCode] = useState("");
  const [language] = useState("cpp");

  const languageExtensions = {
    cpp: cpp(),
    java: java(),
    sql: sql(),
    php: php(),
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="w-full h-full p-4 text-white rounded-lg shadow-md">
      <div className="flex items-center pb-2 mb-2">
        <div className="px-4 border-l-2 border-white">main.go</div>
        <div className="ml-auto flex gap-5">
          <button className="text-sm cursor-pointer hover:text-gray-400">
            Запустить
          </button>
          <button
            className="text-2xl cursor-pointer hover:text-gray-400"
            onClick={handleCopy}
          >
            <GoCopy />
          </button>
        </div>
      </div>
      <CodeMirror
        value={code}
        height="50vh"
        theme={githubDark}
        extensions={[languageExtensions[language]]}
        onChange={(value) => setCode(value)}
        className="text-sm border border-gray-700 rounded-md"
      />
      <div className="mt-4 h-[25vh]">
        <div className="p-3 text-sm border-t border-gray-700">Результат выполнения</div>
        <div className="border-t border-gray-700 p-3 flex items-center gap-5">
          <span className="text-green-500 text-lg">Принято</span>
          <span className="text-xs text-gray-400">Время запуска: 1.6ms</span>
        </div>
      </div>
    </div>
  );
}

