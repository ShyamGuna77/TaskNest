

import Link from 'next/link'
import Image from 'next/image';
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section with Blue Gradient */}
      <div className="relative w-full h-screen">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(183deg, #006DBC 2.49%, rgba(60, 143, 203, 0.76) 39.2%, rgba(249, 249, 249, 0.00) 88.88%)",
          }}
        />

        {/* Cloud Images */}
        <Image
          src="/images/cloud1.png"
          alt=""
          className="absolute top-[-188px] right-[-90px] w-[626px] h-[419px] object-cover hidden lg:block"
          style={{ aspectRatio: "124/83" }}
          width={626}
          height={419}
        />
        <Image
          src="/images/cloud2.png"
          alt=""
          className="absolute bottom-[200px] left-[-63px]  object-cover hidden lg:block"
          style={{ aspectRatio: "300/119" }}
          width={1442}
          height={572}
        />
        <Image
          src="/images/cloud3.png"
          alt=""
          className="absolute top-[-142px] left-[-452px] w-[626px] h-[419px] object-cover hidden lg:block"
          style={{ aspectRatio: "124/83" }}
          width={626}
          height={419}
        />

        {/* Main Content Container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Heading */}
            <h1
              className="text-white text-center font-bold mb-6"
              style={{
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "clamp(64px, 12vw, 128px)",
                lineHeight: "clamp(64px, 12vw, 90px)",
                letterSpacing: "-2.56px",
              }}
            >
              404
            </h1>

            {/* Main Heading */}
            <h2
              className="text-white text-center font-semibold mb-6"
              style={{
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "clamp(32px, 6vw, 60px)",
                lineHeight: "clamp(40px, 7vw, 72px)",
                letterSpacing: "-1.2px",
              }}
            >
              Oops! Looks like you&apos;re lost in the future of work.
            </h2>

            {/* Supporting Text */}
            <p
              className="text-white text-center mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: "clamp(24px, 3vw, 30px)",
                fontWeight: "400",
              }}
            >
              The page you&apos;re looking for doesn&apos;t exist or might have moved.
              Don&apos;t worry — we&apos;ll help you get back on track.
            </p>

            {/* Back to Homepage Button */}
            <div className="flex justify-center">
              <Link href="/" className="inline-block" >
                <div
                  className="p-1 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #E9E9E9 0%, #E9E9E9 0.01%, #FFF 100%)",
                    borderRadius: "13.663px",
                  }}
                >
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-white text-black font-semibold text-xs"
                    style={{
                      background:
                        "linear-gradient(180deg, #F4F4F4 0%, #FEFEFE 100%)",
                      boxShadow:
                        "0 0 0.225px 0.225px rgba(0, 0, 0, 0.07), 0 0 0.225px 0.675px rgba(0, 0, 0, 0.05), 0 2.698px 2.923px -1.349px rgba(0, 0, 0, 0.25), 0 0.899px 3.598px 0.899px rgba(0, 0, 0, 0.12)",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "12px",
                      lineHeight: "18px",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M17.653 5.852L12.853 2.49367C11.5447 1.577 9.53633 1.627 8.278 2.602L4.10299 5.86034C3.26966 6.51034 2.61133 7.84367 2.61133 8.89367V14.6437C2.61133 16.7687 4.33633 18.502 6.46133 18.502H15.4447C17.5697 18.502 19.2947 16.777 19.2947 14.652V9.002C19.2947 7.877 18.5697 6.49367 17.653 5.852ZM11.578 15.1687C11.578 15.5103 11.2947 15.7937 10.953 15.7937C10.6113 15.7937 10.328 15.5103 10.328 15.1687V12.6687C10.328 12.327 10.6113 12.0437 10.953 12.0437C11.2947 12.0437 11.578 12.327 11.578 12.6687V15.1687Z"
                        fill="black"
                      />
                    </svg>
                    BACK TO HOMEPAGE
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative bg-white">
        {/* Footer Background */}
        <div
          className="mx-4 sm:mx-8 lg:mx-28 rounded-2xl border border-gray-200 relative overflow-hidden"
          style={{ backgroundColor: "#F2F4F7" }}
        >
          {/* Footer Background Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e66c0bc07258a0c3d24fa449397489eb3d88eb91?width=2868"
            alt=""
            className="absolute bottom-0 left-0 w-full h-auto object-cover opacity-50"
          />

          {/* Footer Content */}
          <div className="relative z-10 px-6 sm:px-12 lg:px-14 py-12 lg:py-24">
            <div className="max-w-6xl mx-auto">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  {/* Logo */}
                  <div className="flex items-center gap-1 mb-3">
                    <svg
                      width="35"
                      height="43"
                      viewBox="0 0 35 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M23.5819 30.0725C19.184 32.8624 13.2891 32.3392 9.45275 28.5028C5.61638 24.6664 5.09317 18.7715 7.88311 14.3737L4.10826 10.5988C-0.696685 17.1055 -0.152624 26.3221 5.74044 32.2151C11.6335 38.1082 20.85 38.6522 27.3567 33.8473L23.5819 30.0725Z"
                        fill="#2F78EE"
                      />
                      <path
                        d="M11.4097 10.8469C15.8076 8.0565 21.7029 8.57959 25.5394 12.4161C29.376 16.2527 29.8991 22.1479 27.1087 26.5459L30.8835 30.3207C35.6889 23.8139 35.145 14.5971 29.2517 8.70382C23.3585 2.81059 14.1416 2.26666 7.63488 7.07205L11.4097 10.8469Z"
                        fill="#2F78EE"
                      />
                      <path
                        opacity="0.2"
                        d="M25.5402 12.4164C21.7036 8.5799 15.8084 8.05682 11.4104 10.8472L9.51883 8.95557C8.84379 9.42488 8.20085 9.96043 7.59906 10.5622C6.99718 11.1641 6.46155 11.8072 5.99219 12.4823L7.88386 14.374C5.09392 18.7719 5.61713 24.6668 9.4535 28.5031C13.2899 32.3395 19.1848 32.8627 23.5826 30.0728L25.478 31.9681C26.1531 31.4987 26.7962 30.9631 27.398 30.3612C27.9998 29.7594 28.5354 29.1165 29.0047 28.4414L27.1095 26.5462C29.8998 22.1483 29.3767 16.253 25.5402 12.4164Z"
                        fill="#2F78EE"
                      />
                    </svg>
                    <span
                      className="text-black text-2xl"
                      style={{
                        fontFamily:
                          "SF Pro Text, -apple-system, Roboto, Helvetica, sans-serif",
                        fontWeight: "600",
                        lineHeight: "20px",
                      }}
                    >
                      Lumify
                    </span>
                  </div>

                  {/* Company Description */}
                  <p
                    className="mb-8"
                    style={{
                      color: "#667085",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    Design amazing digital experiences that create more happy in
                    the world.
                  </p>

                  {/* Social Icons */}
                  <div className="flex items-center gap-4">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 9.6374V12.5374H16.6C16.8 12.5374 16.9 12.7374 16.9 12.9374L16.5 14.8374C16.5 14.9374 16.3 15.0374 16.2 15.0374H14V22.3374H11V15.1374H9.3C9.1 15.1374 9 15.0374 9 14.8374V12.9374C9 12.7374 9.1 12.6374 9.3 12.6374H11V9.3374C11 7.6374 12.3 6.3374 14 6.3374H16.7C16.9 6.3374 17 6.4374 17 6.6374V9.0374C17 9.2374 16.9 9.3374 16.7 9.3374H14.3C14.1 9.3374 14 9.4374 14 9.6374Z"
                        stroke="#17191C"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M15 22.3374H9C4 22.3374 2 20.3374 2 15.3374V9.3374C2 4.3374 4 2.3374 9 2.3374H15C20 2.3374 22 4.3374 22 9.3374V15.3374C22 20.3374 20 22.3374 15 22.3374Z"
                        stroke="#17191C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 22.3374H15C20 22.3374 22 20.3374 22 15.3374V9.3374C22 4.3374 20 2.3374 15 2.3374H9C4 2.3374 2 4.3374 2 9.3374V15.3374C2 20.3374 4 22.3374 9 22.3374Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15.8374C13.933 15.8374 15.5 14.2704 15.5 12.3374C15.5 10.4044 13.933 8.8374 12 8.8374C10.067 8.8374 8.5 10.4044 8.5 12.3374C8.5 14.2704 10.067 15.8374 12 15.8374Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.6361 7.3374H17.6477"
                        stroke="#292D32"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 20.3374H7C4 20.3374 2 18.3374 2 15.3374V9.3374C2 6.3374 4 4.3374 7 4.3374H17C20 4.3374 22 6.3374 22 9.3374V15.3374C22 18.3374 20 20.3374 17 20.3374Z"
                        stroke="#17191C"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3996 9.8374L13.8996 11.3374C14.7996 11.9374 14.7996 12.8374 13.8996 13.4374L11.3996 14.9374C10.3996 15.5374 9.59961 15.0374 9.59961 13.9374V10.9374C9.59961 9.6374 10.3996 9.2374 11.3996 9.8374Z"
                        stroke="#17191C"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9996 10.2374V17.1374C18.9996 17.9374 18.5996 18.6374 17.8996 18.9374L11.3996 22.0374C10.8996 22.2374 10.1996 22.2374 9.69961 22.0374L3.19961 18.9374C2.49961 18.6374 2.09961 17.9374 2.09961 17.1374V9.6374C2.09961 8.8374 2.49961 8.1374 3.19961 7.8374L9.69961 4.7374C10.1996 4.5374 10.8996 4.5374 11.3996 4.7374L13.9996 6.0374C13.9996 6.1374 13.9996 6.2374 13.9996 6.3374C13.9996 8.5374 15.7996 10.3374 17.9996 10.3374C18.3996 10.3374 18.6996 10.3374 18.9996 10.2374Z"
                        stroke="#17191C"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 10.8374V13.8374C7 14.9374 7.9 15.8374 9 15.8374C10.1 15.8374 11 14.9374 11 13.8374V10.8374"
                        stroke="#17191C"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M14 10.8374V15.7374"
                        stroke="#17191C"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22 6.3374C22 8.2374 20.7 9.7374 19 10.2374C18.7 10.3374 18.4 10.3374 18 10.3374C15.8 10.3374 14 8.5374 14 6.3374C14 6.2374 14 6.1374 14 6.0374C14.2 4.0374 15.9 2.3374 18 2.3374C20.2 2.3374 22 4.1374 22 6.3374Z"
                        stroke="#17191C"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M19.1004 6.23739C19.3004 6.03739 19.5004 5.73739 19.5004 5.43739C19.5004 4.63739 18.9004 4.13739 18.0004 4.13739C17.1004 4.13739 16.5004 4.63739 16.5004 5.43739C16.5004 5.73739 16.6004 6.03739 16.9004 6.23739C16.6004 6.43739 16.4004 6.83739 16.4004 7.23739C16.4004 8.03739 17.0004 8.53739 18.0004 8.53739C19.0004 8.53739 19.6004 8.03739 19.6004 7.23739C19.6004 6.83739 19.4004 6.43739 19.1004 6.23739ZM18.0004 5.83739C17.7004 5.83739 17.6004 5.73739 17.6004 5.43739C17.6004 5.13739 17.8004 5.03739 18.0004 5.03739C18.2004 5.03739 18.4004 5.13739 18.4004 5.43739C18.4004 5.73739 18.3004 5.83739 18.0004 5.83739ZM18.0004 6.63739C18.3004 6.63739 18.6004 6.73739 18.6004 7.13739C18.6004 7.43739 18.4004 7.63739 18.0004 7.63739C17.6004 7.63739 17.4004 7.43739 17.4004 7.13739C17.4004 6.73739 17.9004 6.63739 18.0004 6.63739Z"
                        fill="#17191C"
                      />
                    </svg>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {/* Product Links */}
                  <div>
                    <h3
                      className="mb-8"
                      style={{
                        color: "#1D2939",
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      Product
                    </h3>
                    <div className="space-y-3">
                      {["Overview", "Features", "Pricing", "Careers"].map(
                        (item) => (
                          <div
                            key={item}
                            style={{
                              color: "#667085",
                              fontFamily:
                                "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                              fontSize: "16px",
                              lineHeight: "24px",
                            }}
                          >
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Company Links */}
                  <div>
                    <h3
                      className="mb-8"
                      style={{
                        color: "#1D2939",
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      Company
                    </h3>
                    <div className="space-y-3">
                      {["Download", "About", "Contact", "Blog"].map((item) => (
                        <div
                          key={item}
                          style={{
                            color: "#667085",
                            fontFamily:
                              "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                            fontSize: "16px",
                            lineHeight: "24px",
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Support Links */}
                  <div>
                    <h3
                      className="mb-8"
                      style={{
                        color: "#1D2939",
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      Support
                    </h3>
                    <div className="space-y-3">
                      {["Contact", "Terms", "Privacy", "Cookies"].map(
                        (item) => (
                          <div
                            key={item}
                            style={{
                              color: "#667085",
                              fontFamily:
                                "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                              fontSize: "16px",
                              lineHeight: "24px",
                            }}
                          >
                            {item}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* App Store Section */}
                <div className="lg:col-span-1">
                  <h3
                    className="mb-6"
                    style={{
                      color: "#101828",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "20px",
                    }}
                  >
                    Get the app
                  </h3>
                  <div className="space-y-6">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/41c2338d4de66f316c8cf29378166e8257bd4a3f?width=249"
                      alt="Download on App Store"
                      className="w-[124px] h-[40px] rounded-[10px]"
                      style={{
                        boxShadow:
                          "0 5.691px 11.383px 0 rgba(183, 183, 183, 0.08), 0 0.569px 5.691px 0 rgba(183, 183, 183, 0.08)",
                      }}
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/aa80d6881eb0495aef20d4f1c472c6ad31d969d8?width=250"
                      alt="Get it on Microsoft Store"
                      className="w-[125px] h-[40px] rounded-[10px]"
                      style={{
                        boxShadow:
                          "0 5.691px 11.383px 0 rgba(183, 183, 183, 0.08), 0 0.569px 5.691px 0 rgba(183, 183, 183, 0.08)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div
                className="pt-8 border-t text-center"
                style={{
                  borderColor: "#EAECF0",
                  color: "#344054",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                © 2025 Lumify. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}