"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

// Proper SVG logos for technologies
const HTML5Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
  </svg>
);

const CSS3Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
  </svg>
);

const JavaScriptLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
  </svg>
);

const TypeScriptLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
  </svg>
);

const ReactLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.471 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.988-1.36-1.56z" />
  </svg>
);

const NextJSLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.394.702-.394 1.524-.394 2.33s0 1.628.394 2.33c.6762 3.045 2.85 5.65 5.8135 7.09.8828.4292 1.8474.6729 2.9153.7825.5497.0573 1.9581.0573 2.5078 0 1.0679-.1096 2.0325-.3533 2.9153-.7825 2.9635-1.44 5.1373-4.045 5.8135-7.09.394-.702.394-1.524.394-2.33s0-1.628-.394-2.33C22.8012 6.584 22.0810 4.8014 21.8090 2.9128 21.6052 1.7676 21.2062.7725 20.6518 0H11.5725z" />
    <path d="M12.0789 20.8851c-4.8618 0-8.8051-3.9433-8.8051-8.8051S7.2171 3.2749 12.0789 3.2749s8.8051 3.9433 8.8051 8.8051-3.9433 8.8051-8.8051 8.8051zm4.8944-13.5024c-.1470-.8851-.7353-1.6191-1.6191-1.9118-.3676-.1225-.7353-.1470-1.1274-.0490-.3676.0980-.6862.3431-.8577.6862-.0735.1470-.0980.3186-.0735.4901.0735.5147.4656.8577.9803.8577.2696 0 .5147-.1225.6862-.3186.1470-.1715.2206-.3921.2206-.6127 0-.2451-.0980-.4656-.2696-.6372-.1470-.1470-.3431-.2206-.5392-.2206-.1960 0-.3921.0735-.5392.2206-.1715.1715-.2696.3921-.2696.6372 0 .2206.0735.4412.2206.6127.1715.1960.4166.3186.6862.3186.5147 0 .9068-.3431.9803-.8577.0245-.1715 0-.3431-.0735-.4901-.1715-.3431-.4901-.5882-.8577-.6862-.3921-.0980-.7598-.0735-1.1274.0490-.8838.2927-1.4720 1.0267-1.6191 1.9118l-.0245.1470v5.8823h1.2990V8.6618l.0245-.1470z" />
  </svg>
);

const TailwindLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
);

const FigmaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117v-6.038H8.148zm7.704 0c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49 4.49-2.014 4.49-4.49-2.014-4.49-4.49-4.49zm0 7.509c-1.665 0-3.019-1.355-3.019-3.019s1.355-3.019 3.019-3.019 3.019 1.355 3.019 3.019-1.354 3.019-3.019 3.019z" />
  </svg>
);

const FramerMotionLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
  </svg>
);

const GitLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
  </svg>
);

const GitHubLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const NPMLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
  </svg>
);

const PrettierLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M8.571 23.429A.571.571 0 0 1 8 22.857V1.143a.571.571 0 0 1 .571-.571H9.14a.571.571 0 0 1 .572.571V22.857a.571.571 0 0 1-.572.572zm2.858 0a.571.571 0 0 1-.572-.572V1.143a.571.571 0 0 1 .572-.571h.571a.571.571 0 0 1 .572.571V22.857a.571.571 0 0 1-.572.572zm2.857 0a.571.571 0 0 1-.571-.572V1.143a.571.571 0 0 1 .571-.571H15.43a.571.571 0 0 1 .571.571V22.857a.571.571 0 0 1-.571.572zM.571 1.143a.571.571 0 0 1 .572-.571H2.286a.571.571 0 0 1 .571.571v21.714a.571.571 0 0 1-.571.572H1.143a.571.571 0 0 1-.572-.572zm5.715 0a.571.571 0 0 1 .571-.571h1.143a.571.571 0 0 1 .571.571v21.714a.571.571 0 0 1-.571.572H6.857a.571.571 0 0 1-.571-.572zm11.428 0a.571.571 0 0 1 .572-.571h4.571a.571.571 0 0 1 .572.571v21.714a.571.571 0 0 1-.572.572h-4.571a.571.571 0 0 1-.572-.572zm2.857 0a.571.571 0 0 1 .572-.571H22.286a.571.571 0 0 1 .571.571v21.714a.571.571 0 0 1-.571.572H21.143a.571.571 0 0 1-.572-.572z" />
  </svg>
);

const VSCodeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
  </svg>
);

const NodeJSLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
  </svg>
);

const MongoDBLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
  </svg>
);

const PostgreSQLLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M23.111 5.441c-.777-1.185-2.247-1.385-4.394-.6-1.744.638-3.77 1.729-5.717 3.08-1.947-1.351-3.973-2.442-5.717-3.08-2.147-.785-3.617-.585-4.394.6C1.112 7.525 2.056 10.701 4.556 13.8c1.25 1.55 2.75 2.85 4.25 3.7.5.283 1 .517 1.5.7v4.8c0 .55.45 1 1 1s1-.45 1-1v-4.8c.5-.183 1-.417 1.5-.7 1.5-.85 3-2.15 4.25-3.7 2.5-3.099 3.444-6.275 1.667-8.359zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
  </svg>
);

const MySQLLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.002c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.966.378 3.85.433 5.53zM10.924 13.618v.007c-.417.963-.646 1.648-1.618 1.618v4.45h-.96v-5.53h.791c1.618 0 1.8-1.618 1.787-2.953zm1.48 1.618c-.32 0-.617-.077-.835-.007-.218.077-.835.007-.835.007v2.953c0 .77.77.77.77.77h.84c.693 0 .693-.693.693-.693v-2.26c-.077-.693-.693-.77-.693-.77zm6.404.007c-.693 0-.693.693-.693.693v2.26c0 .693.693.693.693.693h.84c.77 0 .77-.77.77-.77v-2.953s-.617.07-.835-.007c-.218-.07-.515.007-.835.007zm2.968-1.035a.5.5 0 01.48-.33c.407 0 .663.19.663.19.207-.23.48-.36.772-.36.295 0 .520.13.72.36 0 0 .28-.19.663-.19.295 0 .52.13.72.36v-.69c0-.69-.69-.69-.69-.69h-2.64c-.69 0-.69.69-.69.69v.69z" />
  </svg>
);

const PrismaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.2061-1.1908.6092L3.9468 18.2848c-.2047.3461-.2047.7717 0 1.1178.2047.3461.5816.5588.9934.5588h16.8132c.4118 0 .7887-.2127.9934-.5588.2047-.3461.2047-.7717 0-1.1178zM12.0001 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" />
  </svg>
);

const VercelLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="white">
    <path d="M24 22.525H0l12-21.05 12 21.05z" />
  </svg>
);

const frontendSkills = [
  { name: "HTML", component: HTML5Logo, delay: 0.1 },
  { name: "CSS", component: CSS3Logo, delay: 0.15 },
  { name: "JavaScript", component: JavaScriptLogo, delay: 0.2 },
  { name: "TypeScript", component: TypeScriptLogo, delay: 0.25 },
  { name: "React", component: ReactLogo, delay: 0.3 },
  { name: "Next.js", component: NextJSLogo, delay: 0.35 },
  { name: "Tailwind CSS", component: TailwindLogo, delay: 0.4 },
  { name: "Figma", component: FigmaLogo, delay: 0.45 },
  { name: "Framer Motion", component: FramerMotionLogo, delay: 0.5 },
  { name: "Git", component: GitLogo, delay: 0.55 },
  { name: "GitHub", component: GitHubLogo, delay: 0.6 },
  { name: "NPM", component: NPMLogo, delay: 0.65 },
  { name: "Prettier", component: PrettierLogo, delay: 0.7 },
  { name: "VS Code", component: VSCodeLogo, delay: 0.75 },
];

const backendSkills = [
  { name: "Node.js", component: NodeJSLogo, delay: 0.1 },
  { name: "Next.js API", component: NextJSLogo, delay: 0.15 },
  { name: "MongoDB", component: MongoDBLogo, delay: 0.2 },
  { name: "PostgreSQL", component: PostgreSQLLogo, delay: 0.25 },
  { name: "MySQL", component: MySQLLogo, delay: 0.3 },
  { name: "Prisma", component: PrismaLogo, delay: 0.35 },
  { name: "Vercel", component: VercelLogo, delay: 0.4 },
];

const SkillLogo = ({
  skill,
  index,
}: {
  skill: (typeof frontendSkills)[0];
  index: number;
}) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = async () => {
    setIsHovered(true);
    await controls.start({
      scale: [1, 1.2, 1.1],
      rotate: [0, -10, 5, 0],
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.5,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        y: -50,
        scale: 0.5,
        filter: "blur(10px)",
        transition: { duration: 0.4 },
      }}
      transition={{
        duration: 0.8,
        delay: skill.delay,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      className="relative group cursor-pointer"
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
    >
      {/* Floating background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl"
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main logo container */}
      <motion.div
        animate={controls}
        className="relative m-3 z-10 w-16 h-16 flex items-center justify-center text-gray-800"
        whileHover={{
          filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(100%)"],
          transition: { duration: 0.5 },
        }}
      >
        <skill.component className="w-12 h-12" />
      </motion.div>

      {/* Skill name with typewriter effect */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          width: isHovered ? "auto" : 0,
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
      >
        <span className="text-sm font-medium text-gray-700 bg-white px-2 py-1 rounded-md shadow-lg">
          {skill.name}
        </span>
      </motion.div>

      {/* Animated particles */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"
              initial={{
                opacity: 0,
                x: 40,
                y: 40,
                scale: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                x: [40, 40 + (Math.random() - 0.5) * 100],
                y: [40, 40 + (Math.random() - 0.5) * 100],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 border-2 border-gray-300 dark:border-gray-600 rounded-2xl"
        animate={{
          scale: isHovered ? [1, 1.5] : 1,
          opacity: isHovered ? [0.5, 0] : 0,
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

const ToggleButton = ({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <motion.button
    onClick={onClick}
    className={`relative px-8 py-3 font-semibold text-lg transition-all duration-300 ${
      isActive ? "text-white" : "text-black hover:text-black"
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Active background */}
    <motion.div
      className="absolute inset-0 bg-black rounded-xl"
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.8,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />

    {/* Button text */}
    <span className="relative z-10">{children}</span>

    {/* Hover effect */}
    <motion.div
      className="absolute inset-0 bg-gray-200 rounded-xl"
      initial={false}
      animate={{
        opacity: 0,
        scale: 0.8,
      }}
      whileHover={{
        opacity: isActive ? 0 : 0.5,
        scale: 1,
      }}
      transition={{ duration: 0.2 }}
    />
  </motion.button>
);

export default function SkillsSection() {
  const [activeSection, setActiveSection] = useState<"frontend" | "backend">(
    "frontend"
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const currentSkills =
    activeSection === "frontend" ? frontendSkills : backendSkills;

  return (
    <section className="py-10 px-4 bg-black min-h-screen relative overflow-visible pb-32">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tech
            <motion.span
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500"
            >
              Expertise
            </motion.span>
          </h2>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="flex bg-gray-200 rounded-xl p-1 gap-1">
            <ToggleButton
              isActive={activeSection === "frontend"}
              onClick={() => setActiveSection("frontend")}
            >
              Frontend
            </ToggleButton>
            <ToggleButton
              isActive={activeSection === "backend"}
              onClick={() => setActiveSection("backend")}
            >
              Backend
            </ToggleButton>
          </div>
        </motion.div>

        {/* Skills Grid with Sliding Animation */}
        <div className="relative min-h-[24rem] overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ x: 300, opacity: 0, position: "absolute" }}
              animate={{ x: 0, opacity: 1, position: "relative" }}
              exit={{ x: -300, opacity: 0, position: "absolute" }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                opacity: { duration: 0.3 },
              }}
              className="absolute inset-0"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 justify-items-center"
              >
                {currentSkills.map((skill, index) => (
                  <SkillLogo
                    key={`${activeSection}-${skill.name}`}
                    skill={skill}
                    index={index}
                  />
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gray-300 dark:bg-gray-700 rounded-full opacity-30"
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -100, 50, 0],
                scale: [1, 1.5, 0.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 2,
                ease: "linear",
              }}
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
