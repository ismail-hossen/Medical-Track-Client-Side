const AddACamp = () => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="campName" className="block text-gray-600">
                Camp Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md "
                name="campName"
                id="campName"
                type="text"
                placeholder="Camp Name"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="campFees" className="block text-gray-600">
                Camp Fees
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md "
                name="campFees"
                id="campFees"
                type="number"
                placeholder="Camp Fees"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="services" className="block text-gray-600">
                Specialized Services Provided
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md "
                name="services"
                id="services"
                type="text"
                placeholder="Services Provided"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="venue" className="block text-gray-600">
                Venue Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md "
                name="venue"
                id="venue"
                type="text"
                placeholder="Location"
                required
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="date" className="block text-gray-600">
                Schedule Date and Time
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md "
                name="date"
                id="date"
                type="datetime-local"
                placeholder="Date and Time"
                required
              />
            </div>

            <div className="p-4 bg-white w-full m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-blue-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-300">
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="professionals" className="block text-gray-600">
                  Health Care Professionals
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border rounded-md "
                  name="professionals"
                  id="professionals"
                  type="text"
                  placeholder="Health Care Professionals"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="targetAudience" className="block text-gray-600">
                  Target Audience
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border rounded-md "
                  name="targetAudience"
                  id="targetAudience"
                  type="text"
                  placeholder="Target Audience"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border"
                name="description"
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default AddACamp;
