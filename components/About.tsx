"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-neutral-900 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12">
        {/* About Me Section */}

        {/* Skills Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            My Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                HTML & CSS
              </h4>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                JavaScript
              </h4>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                React
              </h4>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Next.js
              </h4>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Tailwind CSS
              </h4>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-700 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Git & GitHub
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
