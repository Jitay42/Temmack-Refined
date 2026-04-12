import { Helmet } from "react-helmet-async";

const MaintenancePage = () => {
  return (
    <>
      <Helmet>
        <title>We'll Be Back Soon</title>
      </Helmet>

      <div className='min-h-screen flex items-center justify-center bg-white px-6'>
        <div className='text-center max-w-xl'>
          {/* Logo / Brand */}
          <h1 className='text-3xl font-bold text-black mb-4'>Temmack</h1>

          {/* Headline */}
          <h2 className='text-2xl font-semibold text-gray-900 mb-3'>
            We&apos;re improving your experience.
          </h2>

          {/* Message */}
          <p className='text-gray-600 mb-6 leading-relaxed'>
            Our website is currently undergoing scheduled updates to deliver a
            clearer, faster, and more effective experience.
          </p>

          {/* Extra trust message */}
          <p className='text-sm text-gray-500 mb-8'>
            We&apos;ll be back shortly. Thank you for your patience.
          </p>

          {/* Optional CTA */}
          <a
            href='mailto:info@temmack.com.ng'
            className='inline-block px-6 py-3 bg-black text-white rounded-xl text-sm font-medium hover:opacity-90 transition'
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default MaintenancePage;
