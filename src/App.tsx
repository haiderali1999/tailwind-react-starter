/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ChangeEvent } from "react";
import "./App.css";

function App() {
  const switchTheme = (event: ChangeEvent) => {
    const { checked } = event.target as HTMLInputElement;

    const root = document.querySelector("html");
    checked ? root?.classList.add("dark") : root?.classList.remove("dark");
    console.log(root);
    console.log(checked);
  };
  return (
    <main className="p-2 h-screen dark:bg-primary">
      <h1 className="text-secondary xsm:text-xs sm:text-sm md:text-4xl font-bold underline text-center">
        Hello world!
      </h1>
      <form className="flex flex-col gap-2">
        <div>
          <label
            htmlFor="username"
            className="text-secondary block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-secondary block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-secondary block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-indigo-600" />
            <span className="ml-2 text-sm text-gray-700 text-secondary">
              I agree to the terms and conditions
            </span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600"
              onChange={switchTheme}
            />
            <span className="ml-2 text-sm text-gray-700 text-secondary">
              Switch Theme
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white bg-secondary px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default App;
