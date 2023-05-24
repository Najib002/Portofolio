import React from "react";

function DetailsItemBody({
  nickname,
  age,
  quote,
  thumbnail,
  ability,
  isOpen,
  toggleModal,
}) {
  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-gray-800/90 ${
          isOpen ? "" : "hidden"
        }`}
        onClick={toggleModal}
      >
        <div className="relative rounded-lg shadow-xl bg-white max-w-4xl mx-8 my-12 sm:my-8 py-3 sm:py-4 lg:py-8">
          <div className="flex flex-col md:grid md:grid-cols-2 xsm:gap-2 md:gap-0 p-6">
            <div className="flex flex-col md:grid md:grid-cols-1 py-6">
              <img
                src={thumbnail.default}
                alt={nickname}
                className="rounded-lg bg-white max-w-xsm sm:max-w-sm my-8"
              ></img>
              <h3 className="text-gray-900 text-lg sm:text-2xl font-bold text-center mb-2">
                {nickname}
              </h3>
              <h4 className="text-md sm:text-xl font-semibold text-red-400 text-center mb-2">
                {age} years old
              </h4>
              <p className="italic text-gray-700 text-sm sm:text-lg text-center my-1">
                "{quote}"
              </p>
            </div>
            <div className="hidden md:grid md:grid-cols-1 py-6">
              <div className="overflow-hidden border-gray-400 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        colSpan={2}
                      >
                        Ability
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {ability.map((item) => (
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {item.type}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full bg-black"
                                src={item.icon}
                                alt={item.title}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {item.title}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-900 mt-2">
                            {item.desc}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button
            className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 sm:px-5 sm:py-3 rounded mt-4 ml-auto"
            onClick={toggleModal}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailsItemBody;
