"use client";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon, MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import authService from "@/appwrite/auth";
import { logout } from "@/store/authSlice";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

const filters = [
  {
    id: "home",
    name: "Home",
    options: [
      { value: "modal", label: "Modal", checked: false },
      { value: "heroBanner", label: "Hero Banner", checked: false },
      { value: "events", label: "events", checked: false },
      { value: "atlCorner", label: "Atl Corner", checked: false },
      { value: "calendar", label: "Calendar", checked: false },
    ],
  },
  {
    id: "aboutUs",
    name: "About us",
    options: [
      { value: "infrastructure", label: "Infrastructure", checked: false },
    ],
  },
  {
    id: "admission",
    name: "Admission",
    options: [
      { value: "admissionProcess", label: "Admission Process", checked: false },
      { value: "admissionEnquiry", label: "Admission Enquiry", checked: false },
      {
        value: "preSchoolAdmission",
        label: "Pre School Admission",
        checked: false,
      },
    ],
  },
  {
    id: "academics",
    name: "Academics",
    options: [
      {
        value: "previousYearPaper",
        label: "Previous year paper",
        checked: false,
      },
      { value: "academicUpdate", label: "Academic Update", checked: false },
      { value: "primary", label: "Primary", checked: false },
      { value: "middle", label: "Middle", checked: false },
      { value: "secondary", label: "Secondary", checked: false },
      { value: "seniorSecondary", label: "Senior Secondary", checked: false },
      { value: "cbseResult-X", label: "Class X CBSE Result", checked: false },
      {
        value: "cbseResult-XII",
        label: "Class XII CBSE Result",
        checked: false,
      },
    ],
  },
  {
    id: "beyondCurriculum",
    name: "Beyond Curriculum",
    options: [
      {
        value: "studentEnrichmentPrograme",
        label: "Student Enrichment Programe",
        checked: false,
      },
      {
        value: "communityOutreachProgram",
        label: "Community Outreach Program",
        checked: false,
      },
      { value: "eNewsLetter", label: "E-Newsletter", checked: false },
      {
        value: "nationalAndInternationalDays",
        label: "National And International Days",
        checked: false,
      },
      { value: "campusHappening", label: "Campus Happening", checked: false },
      { value: "gallery", label: "Gallery", checked: true },
      { value: "galleryVideo", label: "Gallery Video", checked: true },
    ],
  },
  {
    id: "faculty",
    name: "Faculty",
    options: [
      {
        value: "teacherCareAndDevelopment",
        label: "Teacher Care And Development",
        checked: false,
      },
      { value: "nkbgsFamily", label: "NKBGS Family", checked: false },
      { value: "vacancy", label: "Vacancy", checked: false },
    ],
  },
];

export default function AdminNav({ children }) {
  const pathName = usePathname();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    pathName.split("/").reverse()[0]
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    authService.logout().then(() => dispatch(logout()));
    router.push("/admin/login");
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen}>
          <Dialog
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 z-40 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      checked={selectedOption === option.value}
                                      onClick={() => {
                                        setMobileFiltersOpen(false);
                                        router.push(
                                          `/admin/dashboard/${option.value}`
                                        );
                                      }}
                                      onChange={() =>
                                        setSelectedOption(option.value)
                                      }
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                type="button"
                className="-m-2 ml-5 p-2 rounded-full bg-rose-400 text-white  hover:bg-rose-500 sm:ml-7"
              >
                Logout
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  checked={selectedOption === option.value}
                                  onClick={() =>
                                    router.push(
                                      `/admin/dashboard/${option.value}`
                                    )
                                  }
                                  onChange={() =>
                                    setSelectedOption(option.value)
                                  }
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">{children}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
