import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">Your Health, Our Concern</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Comprehensive Care for Your Well-being
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                At iKLIFE Pharmacy, we are dedicated to providing you with the best healthcare solutions. From essential medications to personalized health advice, we are here to support your journey to better health.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="/src/assets/Pharmacy.jpg"
            className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                At iKLIFE Pharmacy, we believe in providing more than just medications. Our team of experienced pharmacists is committed to offering personalized care and advice to help you manage your health effectively. Whether you need prescription medications, over-the-counter products, or health consultations, we are here for you.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <HeartIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Why Your Health-Care is Crucial</strong> Your health deserves more than guesswork. At iKLIFE, we ensure you receive accurate medications, professional advice, and compassionate care that supports your well-being every day. Our commitment to your health isn't just a service — it's a promise.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HomeIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Licensed Professionals</strong> Our team consists of licensed pharmacists and healthcare professionals who are dedicated to providing you with the highest quality of care. We stay updated with the latest advancements in healthcare to ensure you receive the best possible service.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowDownCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Reliable Medication Management</strong> From accurate prescriptions to automated refill reminders, we make sure you never miss a dose. Our advanced systems keep your medical records secure and accessible, ensuring continuity of care across every visit.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                <strong className="font-semibold text-gray-900">Join us at iKLIFE Pharmacy</strong> and experience a new standard of healthcare. Whether you need essential medications, health consultations, or wellness products, we are here to support you every step of the way. Your health is our priority, and we are committed to helping you achieve your wellness goals.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No Cash? No problem.</h2>
              <p className="mt-6">
                Your health shouldn't have to wait. At [Your Pharmacy Name], we offer flexible payment options—including Buy Now, Pay Later—so you can get your medications and health essentials without delay.  
                Whether it's through insurance, bank transfers, or installment plans, we make it easy to prioritize your health today and handle the payments at your pace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
